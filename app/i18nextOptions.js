export default {
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'de-DE'],
    defaultNS: 'common',
    react: { useSuspense: false }
}