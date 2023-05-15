import { RemixI18Next } from 'remix-i18next'
import i18nextOptions from './i18nextOptions'
import Backend from 'i18next-fs-backend'
import { resolve } from 'node:path'

export default new RemixI18Next({
    detection: {
        // List of languages application supports
        supportedLanguages: i18nextOptions.supportedLngs,
        // Language to use in case the user language is not listed above
        fallbackLanguage: i18nextOptions.fallbackLng,
    },
    // Configuration for i18next used when translating messages server-side only
    i18next: {
        backend: { loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json') },
    },
    // Backend to use to load the translations
    backend: Backend,
})