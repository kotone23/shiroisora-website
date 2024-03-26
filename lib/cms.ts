import { Media, Live } from "./types";

interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

const MEDIA_GRAPHQL_FIELDS = `
  sys {
    id
  }
  description
  date
`;

const LIVE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  venue {
    name
    url
  }
  date
  time
  charge
  performers
  description
  setlistCollection (limit: 15) {
    items {
      title
    }
  }
  encore
  imagesCollection (limit: 2) {
    items {
      sys {
        id
      }
      url
    }
  }
`;

async function fetchGraphQL<T>(query: string, preview = false): Promise<GraphQLResponse<T>> {
  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with a cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { 
        tags: ["all"],
        revalidate: 300
      },
    }
  ).then((response) => response.json());
}

export async function getContents<T>(collectionName: string, fields: string, isDraftMode = false): Promise<T[]> {
  const query = `query {
    ${collectionName}(order:date_DESC preview: ${isDraftMode ? "true" : "false"}) {
      items {
        ${fields}
      }
    }
  }`;

  const res = await fetchGraphQL<{ [key: string]: { items: T[] } }>(query, isDraftMode);
  return res?.data?.[collectionName]?.items;
}

export async function getMediaContents(isDraftMode = false) {
  return await getContents<Media>("mediaCollection", MEDIA_GRAPHQL_FIELDS, isDraftMode);
}

export async function getLiveContents(isDraftMode = false) {
  return await getContents<Live>("liveCollection", LIVE_GRAPHQL_FIELDS, isDraftMode);
}