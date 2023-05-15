# Localize Remix Workshop

Welcome to Localize Remix Workshop. In this repository, you will learn how to localize your Remix website.

In this step (Step-5), you will implement dynamic routing to render recipes.

## 1. Fetch details of the recipe from Contentful

In the `app/utils/contentful.server.js` file, add a function that fetches the details of a recipe. This function should take the `id` and `locale` as the params.

## 2. Create $id.jsx file

Create the [`app/routes/$id.jsx`](./app/routes/%24id.jsx) file. This file will serve as a template for all our recipes.

Similar to `_index.jsx` file, fetch the content from Contentful for a single recipe. Render the fetched content.

## 3. Rendering Rich Text

The `ingredients` and the `instructions` fields are of the type [Rich Text](https://www.contentful.com/developers/docs/concepts/rich-text/). To render them, install the following packages.

```sh
npm i @contentful/rich-text-react-renderer @contentful/rich-text-types
```

Use the above packages to render Rich Text.

## Learn more

- [Rendering linked assets and entries in the Contentful Rich Text field](https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/)
- [Routing in Remix](https://remix.run/docs/en/main/guides/routing)
- [Workshop Guide](https://github.com/harshil1712/localize-remix-workshop)
