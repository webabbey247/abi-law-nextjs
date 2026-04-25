import { groq } from "next-sanity";
import { sanityFetch } from "../live";
import { client } from "../client";

const PAGE_LIMIT = 16;

const LAWYER_FIELDS = groq`
  _id,
  fullName,
  "slug": slug.current,
  position,
  excerpt,
  photo,
  "expertise": expertise[]->{
    _id,
    title,
    "slug": slug.current,
    category
  }
`;

export async function getLawyersPage({ page = 1 }: { page?: number } = {}) {
  const offset = (page - 1) * PAGE_LIMIT;
  const end = page * PAGE_LIMIT;

  const query = groq`{
    "items": *[_type == "lawyer"] | order(displayOrder asc, fullName asc) [$offset...$end] {
      ${LAWYER_FIELDS}
    },
    "total": count(*[_type == "lawyer"])
  }`;

  const { data } = await sanityFetch({ query, params: { offset, end } });

  const total: number = data?.total ?? 0;

  return {
    items: data?.items ?? [],
    total,
    totalPages: Math.ceil(total / PAGE_LIMIT),
  };
}

export async function getLawyerBySlug(slug: string) {
  const query = groq`*[_type == "lawyer" && slug.current == $slug][0] {
    ${LAWYER_FIELDS}
  }`;

  const { data } = await sanityFetch({ query, params: { slug } });
  return data ?? null;
}

export async function getFeaturedLawyers(limit = 3) {
  const query = groq`*[_type == "lawyer"] | order(displayOrder asc, fullName asc) [0...$limit] {
    ${LAWYER_FIELDS}
  }`;

  const { data } = await sanityFetch({ query, params: { limit } });
  return (data ?? []) as {
    _id: string;
    fullName: string;
    slug: string;
    position: string;
    excerpt?: string;
    photo?: { asset: object; alt?: string };
    expertise?: { _id: string; title: string; slug: string; category: string }[];
  }[];
}

export async function getAllLawyerSlugs() {
  const query = groq`*[_type == "lawyer"] { "slug": slug.current }`;
  const data = await client.fetch(query);
  return (data ?? []) as { slug: string }[];
}
