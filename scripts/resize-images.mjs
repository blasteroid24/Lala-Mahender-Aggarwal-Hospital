/**
 * Generates smaller copies of every image in public/img into public/img/r/
 * (e.g. doc-1.webp → r/doc-1-160.webp, r/doc-1-480.webp …) so pages can serve
 * phone-sized images via `srcSet`. Runs automatically before `dev` and `build`;
 * just drop new images into public/img.
 */
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

// Keep in sync with IMAGE_WIDTHS in src/lib/utils.ts
const WIDTHS = [160, 480, 768, 1280]
const SRC = path.resolve('public/img')
const OUT = path.join(SRC, 'r')

await mkdir(OUT, { recursive: true })
const files = (await readdir(SRC)).filter((f) => /\.(webp|jpe?g|png)$/i.test(f))

let made = 0
await Promise.all(
  files.flatMap((file) => {
    const input = path.join(SRC, file)
    const base = file.replace(/\.[^.]+$/, '')
    return WIDTHS.map(async (w) => {
      const output = path.join(OUT, `${base}-${w}.webp`)
      const [src, out] = await Promise.all([stat(input), stat(output).catch(() => null)])
      if (out && out.mtimeMs >= src.mtimeMs) return
      await sharp(input).resize({ width: w, withoutEnlargement: true }).webp({ quality: 72 }).toFile(output)
      made++
    })
  }),
)
if (made) console.log(`resize-images: generated ${made} variants in public/img/r`)
