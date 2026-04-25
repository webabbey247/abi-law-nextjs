import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        tagline="Legal"
        firstCaption="Terms of"
        secondCaption="Service"
        description="Please read these terms carefully before using our website."
      />

      <section className="py-24 bg-bg">
        <div className="container">
          <div className="max-w-190 mx-auto">
            {[
              {
                heading: "Acceptance of Terms",
                body: "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.",
              },
              {
                heading: "No Attorney-Client Relationship",
                body: "The information on this website is for general informational purposes only and does not constitute legal advice. Visiting this website or contacting us through it does not create an attorney-client relationship.",
              },
              {
                heading: "Intellectual Property",
                body: "All content on this website, including text, graphics, logos, and images, is the property of Lawyers and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our express written permission.",
              },
              {
                heading: "Limitation of Liability",
                body: "To the fullest extent permitted by law, Lawyers shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information provided herein.",
              },
              {
                heading: "Changes to Terms",
                body: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.",
              },
              {
                heading: "Governing Law",
                body: "These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="mb-10">
                <h2 className="font-display text-[1.4rem] text-primary mb-3">{heading}</h2>
                <p className="text-text-light leading-[1.9]">{body}</p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-[0.85rem] text-text-light">Last updated: January 1, 2025</p>
              <Link href="/contact" className="btn-primary inline-block mt-6">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
