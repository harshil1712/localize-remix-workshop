const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

// Function that handles the API calls
async function apiCall(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  }
  return await fetch(fetchUrl, options)
}

export async function getRecipes(locale) {
  const query = `
    query($locale:String){
        recipeCollection(locale:$locale) {
          items {
            sys {
              id
            }
            title
            description
            coverImage {
                url
                description
            }
          }
        }
      }
    `
  const variables = {
    locale: locale
  }
  const response = await apiCall(query, variables);
  const result = await response.json();
  return result.data.recipeCollection.items
}

export async function getSingleReceipe(locale, id) {
  const query = `
      query($id:String!,$locale:String) {
          recipe(id:$id,locale:$locale) {
              title
              description
              coverImage {
                  url
                  description
              }
              ingredients {
                json
                links {
                  entries {
                    inline {
                      sys {
                        id
                      }
                      __typename
                      ... on Ingredient {
                        name
                      }
                    }
                  }
                }
              }
              instructions {
                json
              }
            }
        }
  `
  const variables = {
    id: id,
    locale: locale
  }
  const response = await apiCall(query, variables)
  const result = await response.json();
  return await result.data.recipe
}
