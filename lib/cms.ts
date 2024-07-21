import type { Live, Media, Release } from "./types";

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

const RELEASE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  releaseType
  releaseDate
  price
  spotifyLink
  appleMusicLink
  coverImage {
    sys {
      id
    }
    title
    url
  }
  songCollection (limit: 20) {
    items {
      sys {
        id
      }
      title
      lyrics
      spotifyLink
      appleMusicLink
      youTubeLink
    }
  }
  description
`;

async function fetchGraphQL<T>(
  query: string,
  tags: string[],
  preview = false,
): Promise<GraphQLResponse<T>> {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
        next: {
          tags: tags,
          revalidate: 86400,
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GraphQL API error:', errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching GraphQL:', error);
    throw error;
  }
}

export async function getContents<T>(
	collectionName: string,
	fields: string,
  tags: string[],
	isDraftMode = false,
	order = "date",
): Promise<T[]> {
	const query = `query {
    ${collectionName}(order:${order}_DESC preview: ${isDraftMode ? "true" : "false"}) {
      items {
        ${fields}
      }
    }
  }`;

	const res = await fetchGraphQL<{ [key: string]: { items: T[] } }>(
		query,
    tags,
		isDraftMode,
	);
	return res?.data?.[collectionName]?.items;
}

export async function getMediaContents(isDraftMode = false) {
	return await getContents<Media>(
		"mediaCollection",
		MEDIA_GRAPHQL_FIELDS,
    ["media"],
		isDraftMode,
	);
}

export async function getLiveContents(isDraftMode = false) {
	return await getContents<Live>(
		"liveCollection",
		LIVE_GRAPHQL_FIELDS,
    ["live"],
		isDraftMode,
	);
}

export async function getReleaseContents(isDraftMode = false) {
  return await getContents<Release>(
    "releaseCollection",
    RELEASE_GRAPHQL_FIELDS,
    ["release", "song"],
    isDraftMode,
    "releaseDate",
  );
}
