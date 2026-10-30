/**
 * Pre-renders each route to static HTML after `vite build`, so the first paint
 * doesn't wait for the JavaScript bundle. The client then hydrates it.
 */
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises'
import path from 'node:path'

const ROUTES = ['/', '/about', '/doctors', '/specialities', '/contact']
const DIST = path.resolve('dist')
const SSR = path.resolve('dist-ssr')

const { render } = await import(path.join(SSR, 'entry-server.js'))
let template = await readFile(path.join(DIST, 'index.html'), 'utf8')

// Preload the heading font so the hero headline (the LCP element) paints in its final face
const assets = await readdir(path.join(DIST, 'assets'))
const headingFont = assets.find((f) => /^plus-jakarta-sans-latin-wght-normal-.*\.woff2$/.test(f))
if (headingFont) {
  template = template.replace(
    '</head>',
    `  <link rel="preload" as="font" type="font/woff2" href="/assets/${headingFont}" crossorigin />\n</head>`,
  )
}

// Inline the stylesheet (~15 KB gzipped) so first paint needs no extra round trip
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/)
if (cssLink) {
  const css = await readFile(path.join(DIST, cssLink[1]), 'utf8')
  template = template.replace(cssLink[0], () => `<style>${css}</style>`)
}

// The HTML is already rendered, so start fetching JS only after the first frame
// has painted (double rAF):
// on slow mobile networks it otherwise competes with the HTML, CSS and fonts.
const entry = template.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)
if (entry) {
  const preloads = [...template.matchAll(/\s*<link rel="modulepreload" crossorigin href="([^"]+)">/g)]
  for (const p of preloads) template = template.replace(p[0], '')
  const chunks = JSON.stringify([entry[1], ...preloads.map((p) => p[1])])
  template = template.replace(
    entry[0],
    `<script type="module">requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(() => {
    for (const href of ${chunks}.slice(1)) document.head.append(Object.assign(document.createElement('link'), { rel: 'modulepreload', href, crossOrigin: '' }))
    import(${JSON.stringify(entry[1])})
  })))</script>`,
  )
}

for (const route of ROUTES) {
  const html = await render(route)
  const page = template.replace('<div id="root"></div>', `<div id="root" data-route="${route}">${html}</div>`)
  const file = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.slice(1), 'index.html')
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, page)
  console.log(`prerendered ${route} → ${path.relative(process.cwd(), file)}`)
}

await rm(SSR, { recursive: true, force: true })
