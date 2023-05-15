import Card from "../Components/Card";
import { useTranslation } from "react-i18next";
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
  const { t, ready, i18n } = useTranslation();
  const { recipes } = useLoaderData()
  if (!ready) return <p>Loading...</p>
  return (
    <div className="flex-grow container mx-auto">
      <h1 className="text-center text-5xl my-8">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              slug={recipe.sys.id}
              image={recipe.coverImage}
            />
          ))
        }
      </div>
    </div>
  );
}
