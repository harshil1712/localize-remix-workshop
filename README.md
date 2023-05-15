# Localize Remix Workshop

Welcome to Localize Remix Workshop. In this repository, you will learn how to localize your Remix website.

In this step (Step-3), you implement language switcher and also store the information in cookie.

## 1. Update Nav.jsx

By default, remix-i18next detects the current language in this order:

1. The `lng` search parameter
2. A cookie (if available)
3. The session (if sessionStorage is passed)
4. The Accept-Language header
5. The fallback language you configured

However, user might want to manually change the locale. For the same, you pass the `lng` parameter.

Update the code in your [Nav.jsx](./app/Components/Nav.jsx) file. Add the Link component that passes the `lng` parameter.

```html
<Link
    to={`/?lng=${lng.value}`}
    key={lng.value}
    className={(i18n.resolvedLanguage === lng.value ? "underline " : "") + "px-1"}
>
    {lng.name}
</Link>
```

## 2. Add cookie.js file

Remix provides methods to handle cookies. Create a `cookie.js` file and add the following code:

```js
import { createCookie } from "@remix-run/node";

export const i18nCookie = createCookie('i18n', {
    sameSite: 'lax',
    path: '/'
})
```

## 3. Update i18n.server.js and root.jsx

Update the [i18n.server.js](./app/i18n.server.js) and [root.jsx](./app/root.jsx) files to use the cookie.

`i18n.server.js`
```js
import { i18nCookie } from './cookie'
...
    detection: {
        cookie: i18nCookie,
    ...
    }
...
```


`root.jsx`
```js
import { i18nCookie } from "./cookie";
...

export const loader = async ({ request }) => {
  ...
  return json({ locale, title }, {
    headers: {
      "Set-Cookie": await i18nCookie.serialize(locale)
    }
  })
}
...
```

## Learn more

- [Workshop Guide](https://github.com/harshil1712/localize-remix-workshop)
