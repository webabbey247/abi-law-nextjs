import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Opportunities",
  description:
    "Explore career opportunities at A1 Laywers Limited. We value our staff and offer structured career paths, continuous development, and support to achieve the best results for our clients, the firm, and yourself. We are accredited Investors in People and are an Equal Opportunities employer.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
