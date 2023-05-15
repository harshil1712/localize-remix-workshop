import { hydrate } from 'react-dom'
import { RemixBrowser } from '@remix-run/react'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { getInitialNamespaces } from 'remix-i18next'
import i18nextOptions from './i18nextOptions'

// initialize i18next using initReactI18next and configuring it
if (!i18next.isInitialized)
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
      ...i18nextOptions,
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      // Detects the namespaces your routes rendered while SSR use
      // and pass them here to load the translations
      ns: getInitialNamespaces(),
      detection: {
        order: ['htmlTag'],
        caches: [],
      }
    })
    .then(() => {
      // then hydrate the app wrapped in the I18nextProvider
      return hydrate(
        <I18nextProvider i18n={i18next}>
          <RemixBrowser />
        </I18nextProvider>,
        document
      )
    })