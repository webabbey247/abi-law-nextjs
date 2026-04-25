import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expertise",
  description:
    "Learn more about A1 Laywers Limited's areas of expertise. Discover our specialized legal services and the team dedicated to providing exceptional support to our clients.",
};

export default function OurExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
