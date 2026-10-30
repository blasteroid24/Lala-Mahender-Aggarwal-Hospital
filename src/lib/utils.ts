import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Widths generated into /img/r by scripts/resize-images.mjs
const IMAGE_WIDTHS = [160, 480, 768, 1280]

/** `srcSet` for an image in /img, pointing at its pre-resized variants. */
export function srcSet(src: string) {
  const base = src.replace(/^\/img\//, '/img/r/').replace(/\.[^.]+$/, '')
  return IMAGE_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(', ')
}
