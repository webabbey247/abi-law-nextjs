import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        tagline="Legal"
        firstCaption="Privacy"
        secondCaption="Policy"
        description="How we collect, use, and protect your personal information."
      />

      <section className="py-24 bg-bg">
        <div className="container">
          <div className="max-w-190 mx-auto">
            {[
              {
                heading: "Information We Collect",
                body: "We collect information you provide directly to us, such as your name, email address, phone number, and details about your legal matter when you fill out our contact form or schedule a consultation.",
              },
              {
                heading: "How We Use Your Information",
                body: "We use the information we collect to respond to your inquiries, provide legal services, send administrative communications, and comply with legal obligations. We do not sell or share your personal information with third parties for marketing purposes.",
              },
              {
                heading: "Attorney-Client Privilege",
                body: "Information shared with our attorneys in the context of a legal representation is protected by attorney-client privilege and our professional duty of confidentiality.",
              },
              {
                heading: "Data Security",
                body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
              },
              {
                heading: "Cookies",
                body: "Our website may use cookies to improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
              },
              {
                heading: "Contact Us",
                body: "If you have questions about this Privacy Policy, please contact us at contact@lawyers.com or (212) 587-0127.",
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
