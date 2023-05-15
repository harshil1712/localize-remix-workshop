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

