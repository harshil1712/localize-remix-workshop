import { getSingleReceipe } from "../utils/contentful.server";
import remixI18n from '../i18n.server'
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export async function loader({ request, params }) {
    let { id } = params;
    const locale = await remixI18n.getLocale(request);
    const recipe = await getSingleReceipe(locale, id)
    return json({ recipe })
}

function renderOptions(links) {
    const entryMap = new Map();
    if (links) {
        for (const entry of links.entries.inline) {
            entryMap.set(entry.sys.id, entry)
        }
    }
    return {
        renderNode: {
            [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                const entry = entryMap.get(node.data.target.sys.id);
                if (entry.__typename === 'Ingredient') {
                    return <>{entry.name}</>
                }
            },
            [BLOCKS.UL_LIST]: (node, children) => {

                return <ul className="list-disc pl-4">{children}</ul>
            },
            [BLOCKS.OL_LIST]: (node, children) => {

                return <ol className="list-decimal pl-4">{children}</ol>
            }
        }
    }
}

export default function () {
    const { recipe } = useLoaderData();
    const { title, coverImage, ingredients, instructions } = recipe;
    return (
        <div className="container mx-auto">
            <h1 className="text-6xl text-center py-8">{title}</h1>
            <div className="flex justify-center">
                <img src={coverImage.url} alt={coverImage.description} width={300} className="rounded-lg" />
            </div>
            <section className="text-left">
                <h2 className="text-4xl py-2">Ingredients</h2>
                {documentToReactComponents(ingredients.json, renderOptions(ingredients.links))}
            </section>
            <section>
                <h2 className="text-4xl py-2">Instructions</h2>
                {documentToReactComponents(instructions.json, renderOptions())}
            </section>
        </div>
    )
}