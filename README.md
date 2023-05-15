# Localize Remix Workshop

Welcome to Localize Remix Workshop. In this repository, you will learn how to localize your Remix website.

In this step (Step-1
2), you will implement internationalization to the website.

## 1. Adding Packages

Run the following command to install the required packages

```sh
npm i remix-i18next i18next react-i18next i18next-browser-languagedetector i18next-http-backend i18next-fs-backend
```

## 2. Create i18nextOptions.js file

This file contains the i18n configuration options like supported languages, default languages, etc.

The structure looks as follow:

```js
export default {
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'FALLBACK_LANGUAGE', //eg. en-US
    supportedLngs: ['', ''], // eg. ['en-US', 'de-DE']
    defaultNS: '', // default value is translation. This project uses 'common'
    react: { useSuspense: false } // In Remix you will not be using Suspense
}
```

## 3. Create locale files

For all the supported languages mentioned above, create a `common.json` file in `/public/locales/SUPPORTED_LANGUAGE`. Eg. for `en-US`, create `public/locales/en-US/common.json`.

These files will contain the translation for the header as well as the title of the index page. The structure looks as folllow:

```json
{
    "headTitle": "",
    "title": ""
}
```

## 4. Create i18n.server.js

Check the [i18n.server.js](./app/i18n.server.js) file.

## 5. Update entry.client.jsx and entry.server.jsx

Use the code from [entry.client.jsx](./app/entry.client.jsx) file.

Use the code from [entry.server.jsx](./app/entry.server.jsx) file.

## 6. Update the root.jsx file

Update the [root.jsx](./app/root.jsx) file to implement i18n.

## 7. Update the _index.jsx file

Based on the user's language preference, and the i18n configuration, render the correct content on the page.

## Render content in different language

To check if the content renders for other supported languages, append the URL with `/?lng=LANGUAGE` parameter, where `LANGUAGE` is the one of the supported language.

In the next step, you will add language switcher to make navigation between languages easy.

## Learn more

- [Workshop Guide](https://github.com/harshil1712/localize-remix-workshop)
