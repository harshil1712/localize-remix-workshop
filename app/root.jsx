import stylesheet from "~/tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next";
import remixI18n from './i18n.server'
import { useTranslation } from "react-i18next";

import Nav from "./Components/Nav";
import { json } from "@remix-run/node";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async ({ request }) => {
  const locale = await remixI18n.getLocale(request)
  const t = await remixI18n.getFixedT(request, 'common')
  const title = t('headTitle')
  return json({ locale, title })
}

export function meta({ data }) {
  return [
    { title: data.title }
  ]
}

export default function App() {
  const { i18n } = useTranslation()
  const { locale } = useLoaderData()

  useChangeLanguage(locale)
  return (
    <html lang={i18n.resolvedLanguage}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <main className="flex flex-col min-h-screen">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="bg-slate-300 flex justify-around py-4">
          <div>
            <h3 className="text-lg">Made with</h3>
            <ul>
              <li><a href="contentful.com">Contentful</a></li>
              <li><a href="remix.run">Remix</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg">Resources</h3>
            <ul>
              <li><a href="github.com">GitHub Repo</a></li>
              <li><a href="github.com">Workshop guide</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
