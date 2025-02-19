import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  pt: () =>
    import('@/i18n/dictionaries/pt.json').then((module) => module.default),
  en: () =>
    import('@/i18n/dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.pt()
