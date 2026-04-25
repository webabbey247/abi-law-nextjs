import { groq } from "next-sanity";
import { sanityFetch } from "../live";
import { client } from "../client";

const PAGE_LIMIT = 16;

const EXPERTISE_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  coverImage
`;

export async function getExpertisePage({
  category,
  page = 1,
}: {
  category?: string;
  page?: number;
}) {
  const offset = (page - 1) * PAGE_LIMIT;
  const end = page * PAGE_LIMIT;

  const query = groq`{
    "items": *[_type == "expertise" && ($category == "" || category == $category)]
      | order(_createdAt desc) [$offset...$end] {
        ${EXPERTISE_FIELDS}
      },
    "total": count(*[_type == "expertise" && ($category == "" || category == $category)])
  }`;

  const { data } = await sanityFetch({
    query,
    params: {
      category: category && category !== "all" ? category : "",
      offset,
      end,
    },
  });

  const total: number = data?.total ?? 0;

  return {
    items: data?.items ?? [],
    total,
    totalPages: Math.ceil(total / PAGE_LIMIT),
  };
}

export async function getFeaturedExpertise({
  category,
  limit = 6,
}: {
  category?: string;
  limit?: number;
} = {}) {
  const query = groq`*[_type == "expertise" && ($category == "" || category == $category)]
    | order(_createdAt desc) [0...$limit] {
      ${EXPERTISE_FIELDS}
    }`;

  const { data } = await sanityFetch({
    query,
    params: {
      category: category && category !== "all" ? category : "",
      limit,
    },
  });

  return data ?? [];
}

export async function getExpertiseBySlug(slug: string) {
  const query = groq`*[_type == "expertise" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    body
  }`;

  const { data } = await sanityFetch({ query, params: { slug } });
  return data ?? null;
}

export async function getRelatedExpertise(currentId: string, category: string) {
  const query = groq`*[_type == "expertise" && _id != $currentId && category == $category]
    | order(_createdAt desc) [0...4] {
      ${EXPERTISE_FIELDS}
    }`;

  const { data } = await sanityFetch({ query, params: { currentId, category } });
  return data ?? [];
}

export async function getAllExpertiseSlugs() {
  const query = groq`*[_type == "expertise"] { "slug": slug.current }`;
  const data = await client.fetch(query);
  return (data ?? []) as { slug: string }[];
}
