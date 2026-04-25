import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with A1 Laywers Limited. Reach our customer support via email, call, or visit our office. We also welcome inquiries regarding partnerships, media, or support teams.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
