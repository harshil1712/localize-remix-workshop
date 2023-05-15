import stylesheet from "~/tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Nav from "./Components/Nav";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
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
