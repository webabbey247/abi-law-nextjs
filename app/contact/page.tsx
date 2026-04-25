/* eslint-disable react/no-unescaped-entities */
import ContactForm from "@/components/form/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { getGlobalOffices } from "@/sanity/lib/services/globalOfficeService";
import { getFaqs } from "@/sanity/lib/services/faqService";
import PageHero from "@/components/PageHero";
import ContactGlobalOffice from "../features/contact-us/sections/contact-global-office";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function ContactPage() {
  const [offices, faqs] = await Promise.all([getGlobalOffices(), getFaqs()]);

  return (
    <>
      <PageHero
        tagline="Reach Out"
        firstCaption="We'd Love to"
        secondCaption="Hear from You"
        description="Whether you need legal counsel, want to discuss your case, or simply have a question — our team is here and ready to help."
      />

      {/* Global Offices */}
      <ContactGlobalOffice offices={offices} />

      {/* Contact form */}
      <section className="py-16 bg-white flex justify-center items-start w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] w-full lg:max-w-7xl">
          <div className=" py-16 flex flex-col justify-start gap-4 bg-white max-w-120">
           <h2 className="font-display text-[1.75rem] tracking-[-0.01em] leading-tight font-semibold text-primary">
            Get in touch
          </h2>
            <div className="flex flex-col gap-2">
            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-[#262b40]">
                Have a legal question or need to discuss your case? Complete this form and one of our attorneys will respond within 24–48 hours.
                 For urgent matters, call or email us directly.
              </p>
            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-[#262b40]">
                We can't wait to talk to you about how we can help your child grow
              their emotional wellbeing.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                          <h4 className="font-display text-[1.375rem] tracking-[-0.005em] leading-[1.3] font-semibold text-ink text-primary">
Contact Details</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-0.5">
                                  <span className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b]">
Email</span>
                  <a href="mailto:contact@lawyers.com" className="font-body text-[0.95rem] text-text hover:text-primary transition-colors duration-200">
                    contact@lawyers.com
                  </a>
                </div>
                <div className="flex flex-col gap-0.5">
                                  <span className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b]">
Phone</span>
                  <a href="tel:+12125870127" className="font-body text-[0.95rem] text-text hover:text-primary transition-colors duration-200">
                    (212) 587 - 0127
                  </a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-[0.72rem] tracking-[0.07em] uppercase font-medium text-[#057e5b]">Hours</span>
                  <span className="font-body text-[0.95rem] text-text">Mon – Fri, 8:00 AM – 6:00 PM ET</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9FB] rounded-sm  flex flex-col justify-start gap-8 items-start py-10 px-8 w-full relative z-10">
           <div className="block space-y-4">
             <h2 className="font-heading text-[1.75rem] tracking-[-0.01em] leading-tight font-semibold text-primary">
              How Can We Help?
            </h2>

            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-[#262b40]">
              Use the tabs below to route your message to the right team. We
              typically respond within 24–48 hours.
            </p>
           </div>
          <ContactForm />
        </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section id="faqs" className="py-28 px-8 md:px-20 bg-[#F9F9FB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-start">
          <div className="lg:sticky lg:top-24 space-y-4">
             <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b]">
              Support
            </p>
              <h2 className="font-display text-[1.75rem] tracking-[-0.01em] leading-tight font-semibold text-[#057e5b]">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-[#262b40]">
              Everything you need to know about working with our firm. Can&apos;t find your answer? Talk to our team.
            </p>
            <Link
              href="/contact"
              className="font-body text-[0.78rem] text-[#057e5b] uppercase tracking-[0.08em] border-b border-[#057e5b]/30 pb-0.5 hover:text-primary hover:border-primary/30 transition-colors duration-200"
            >
              Contact Our Team <ChevronRight className="inline w-3" />
            </Link>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
