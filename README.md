# Localize Remix Workshop

Welcome to Localize Remix Workshop. In this repository, you will learn how to localize your Remix website.

In this step (Step-4), you fetch data from Contentful and render it.

## 1. Create contentful.server.js file

Create the `app/utils/contentful.server.js` file. This file will contain all the code that handles content fetching from Contentful.

The project uses the [Contentful GraphQL API](https://www.contentful.com/developers/docs/references/graphql/) to fetch the content.

> NOTE: You can use the [Content Delivery API](https://www.contentful.com/developers/docs/concepts/apis/#content-delivery-api) or the [SDK](https://github.com/contentful/contentful.js), instead of the GraphQL API.

1. Create a function that handels the API calls. This function will take `query` and `variables` as parameters.
2. Create a function that fetches all the recipes from Contentful. This function will take `locale` as the parameter.

## 2. Update _index.jsx file

Update the `_index.jsx` file to fetch and render the data from Contentful.

```js
...
import { getRecipes } from '../utils/contentful.server'
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import remixI18n from '../i18n.server'

export async function loader({ request }) {
  const locale = await remixI18n.getLocale(request)
  const recipes = await getRecipes(locale)
  return json({ recipes, locale })
}

export default function Index() {
  ...
  const { recipes } = useLoaderData()
  ...
  <Card
    key={recipe.id}
    title={recipe.title}
    description={recipe.description}
    slug={recipe.sys.id}
    image={recipe.coverImage}
    />
  ...
}
```

## 3. Add Contentful credentials

Create a `.env` file and paste the following:

```
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

Replace `YOUR_SPACE_ID` and `YOUR_ACCESS_TOKEN` with your Space ID and Access Token.

> NOTE: Since the data is fetched with the GraphQL API, make sure to use the Preview token.

## Learn more

- [Workshop Guide](https://github.com/harshil1712/localize-remix-workshop)
