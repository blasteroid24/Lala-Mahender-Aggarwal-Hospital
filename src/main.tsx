import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { preloadRoute } from './route-modules'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are pre-rendered at build time. Hydrate only when the HTML was rendered
// for this exact URL; otherwise (e.g. SPA fallback, ?query) render from scratch.
const normalize = (p: string) => p.replace(/\/+$/, '') || '/'
if (root.dataset.route && normalize(root.dataset.route) === normalize(location.pathname) && !location.search) {
  // Load this page's chunk first so hydration never suspends (which could flash a blank fallback)
  preloadRoute(normalize(location.pathname))
    .catch(() => undefined)
    .then(() => hydrateRoot(root, app))
} else {
  root.textContent = ''
  createRoot(root).render(app)
}
