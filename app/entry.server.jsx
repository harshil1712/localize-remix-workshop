import { renderToString } from 'react-dom/server'
import { RemixServer } from '@remix-run/react'
import { createInstance } from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Backend from 'i18next-fs-backend'
import { resolve } from 'node:path'
import i18nextOptions from './i18nextOptions'
import i18n from './i18n.server'

export default async function handleRequest(
  request,
  statusCode,
  headers,
  context
) {
  // Create a new instance of i18next so every request will have a unique instance and not share any state
  const instance = createInstance()

  // Detect locale from the request
  const lng = await i18n.getLocale(request)
  // Detect the namespaces the route is about to render
  const ns = i18n.getRouteNamespaces(context)

  // Configure the instance
  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18nextOptions,
      lng,
      ns,
      backend: {
        loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
      }
    })

  // Render your app wrapped in the I18nextProvider as in the

  const markup = renderToString(
    <I18nextProvider i18n={instance}>
      <RemixServer context={context} url={request.url} />
    </I18nextProvider>
  );

  headers.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: statusCode,
    headers: headers,
  })
}