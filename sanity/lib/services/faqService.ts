import { groq } from "next-sanity";
import { sanityFetch } from "../live";

export interface Faq {
  _id: string;
  question: string;
  answer: string;
}

export async function getFaqs(): Promise<Faq[]> {
  const query = groq`*[_type == "faq"] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer
  }`;

  const { data } = await sanityFetch({ query });
  return (data ?? []) as Faq[];
}
