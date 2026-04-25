import { groq } from "next-sanity";
import { sanityFetch } from "../live";

const LEGAL_PROCESS_FIELDS = groq`
  _id,
  title,
  order,
  description,
  image
`;

export async function getLegalProcessSteps() {
  const query = groq`*[_type == "legalProcess"] | order(order asc) {
    ${LEGAL_PROCESS_FIELDS}
  }`;

  const { data } = await sanityFetch({ query });
  return (data ?? []) as {
    _id: string;
    title: string;
    order: number;
    description: string;
    image?: { asset: object; alt?: string };
  }[];
}
