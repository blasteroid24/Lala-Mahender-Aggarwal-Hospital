import { lazy, type ComponentType } from 'react'

type Loader = () => Promise<{ default: ComponentType }>
export type LazyRoute = ComponentType & { preload: () => Promise<void> }

/**
 * Like React.lazy, but can be preloaded. Once preloaded it renders the module
 * synchronously, so a prerendered page can hydrate without suspending — a
 * suspended boundary that receives an update (e.g. LazyMotion loading its
 * features) would otherwise discard the server HTML and flash the fallback.
 */
export function lazyRoute(load: Loader): LazyRoute {
  let Loaded: ComponentType | undefined
  const remember = <T extends { default: ComponentType }>(mod: T) => {
    Loaded = mod.default
    return mod
  }
  const Lazy = lazy(() => load().then(remember))
  function Route() {
    return Loaded ? <Loaded /> : <Lazy />
  }
  return Object.assign(Route, { preload: () => load().then(remember).then(() => undefined) })
}
