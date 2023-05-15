# Localize Remix Workshop

Welcome to Localize Remix Workshop. In this repository, you will learn how to localize your Remix website.

In this step (Step-1), you will:
## 1. Setup a Remix project

To create a new Remix project from scratch, run the following command:

```sh
npx create-remix@latest
```

## 2. Create the following components:
    1. Nav
    2. Card

Create the Nav and Card component in the `./app/Components/Nav.jsx` and `./app/Components/Card.jsx` files respectively.

The Card component will have the following props:
- Title - This will contain the title of the recipe
- Description - This will contain a short description of the recipe
- Slug - For this example, we will be using ID as slug
- Image - This is an object that contains the URL and a description of the image.

> NOTE: I am using TailwindCSS for styling. This is optional. You can use whatever you want for styling.

## 3. Render the components on the page

The Nav component should be rendered on all the pages. Hence, add the component to the `root.jsx` file.

Copy the following mock data in your `_index.jsx` file.

```js
const recipes = [
  {
    id: "1",
    title: "Hakka Noodles",
    description: "Hakka Noodles fused in Indian style",
    coverImage: {
      url: "https://images.ctfassets.net/rsj8wf5a3fox/3vsTfOlKTonXK5e7MX83Vy/7d5671c521f6441c63ecdd3c382c2b17/IMG_2974.jpg",
      description: "Hakka Noodles Image"
    }
  },
  {
    id: "2",
    title: "Black Bean and Veggie Burritos",
    description: "Delicious and healthy veggie burritos!",
    coverImage: {
      url: "https://images.ctfassets.net/rsj8wf5a3fox/4oaf0vi232rxojfzHcGrDG/4fabf817205583cf827fccdc93703ca5/IMG_7911.jpg",
      description: "Black Beans and Veggie Burrito image"
    }
  },
  {
    id: "3",
    title: "White Sauce Pasta",
    description: "Delicious Cheesy Pasta",
    coverImage: {
      url: "https://images.ctfassets.net/rsj8wf5a3fox/34dZERDAm5GNzMqGvzcA2i/2e3cd6544f60be12675af72372565ff6/IMG_1586.jpg",
      description: "White Gravy Pasta image"
    }
  },
]
```

Render the above data on the homepage using the Card component.

## Learn more

- [Workshop Guide](https://github.com/harshil1712/localize-remix-workshop)
