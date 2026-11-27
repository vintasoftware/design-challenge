import type { ComponentType } from 'react'

/**
 * Every file in src/screens/ becomes a screen automatically.
 * A screen file has a default export (the component) and a `meta` export.
 */
export type ScreenMeta = {
  title: string
  description?: string
  /** Lower numbers show first on the index page. */
  order?: number
}

type ScreenModule = {
  default: ComponentType
  meta?: ScreenMeta
}

export type Screen = ScreenMeta & {
  slug: string
  Component: ComponentType
}

const modules = import.meta.glob<ScreenModule>('../screens/*.tsx', { eager: true })

export const screens: Screen[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.replace('../screens/', '').replace('.tsx', '')
    return {
      slug,
      title: mod.meta?.title ?? slug,
      description: mod.meta?.description,
      order: mod.meta?.order ?? 100,
      Component: mod.default,
    }
  })
  .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.title.localeCompare(b.title))
