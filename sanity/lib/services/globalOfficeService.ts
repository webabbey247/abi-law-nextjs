import { groq } from "next-sanity";
import { sanityFetch } from "../live";

export interface GlobalOffice {
  _id: string;
  category: "headquarters" | "regional";
  continent: string;
  city: string;
  country: string;
  fullAddress: string;
  email?: string;
  phone?: string;
}

export async function getGlobalOffices(): Promise<GlobalOffice[]> {
  const query = groq`*[_type == "globalOffice"] | order(category asc, continent asc) {
    _id,
    category,
    continent,
    city,
    country,
    fullAddress,
    email,
    phone
  }`;

  const { data } = await sanityFetch({ query });
  return (data ?? []) as GlobalOffice[];
}
