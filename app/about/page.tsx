/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { getFeaturedLawyers } from "@/sanity/lib/services/lawyerService";
import { getLegalProcessSteps } from "@/sanity/lib/services/legalProcessService";
import { urlFor } from "@/sanity/lib/image";
import PageHero from "@/components/PageHero";
import CtaSection from "../features/General/sections/cta-section";
import { ChevronRight } from "lucide-react";

export default async function AboutPage() {
  const [lawyers, processSteps] = await Promise.all([
    getFeaturedLawyers(3),
    getLegalProcessSteps(),
  ]);
  return (
    <>
      <PageHero
        tagline="Who We Are"
        firstCaption="About"
        secondCaption="Our Firm"
        description="We place a high value on our staff and are committed to providing them with opportunities to realize their full potential through structured career pathways and established appraisal frameworks. "
      />

      <section className="bg-secondary px-6 md:px-16 lg:px-24 py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* <!-- Left --> */}
          <div>
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#057e5b] mb-5">
              Start With Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-stone-900">
              Straight forward legal services with no hidden surprises
            </h1>
          </div>

          {/* <!-- Right --> */}
          <div className="space-y-5 pt-8 md:pt-10">
            <p className="font-sans text-base text-[#262b40] leading-relaxed">
              At ABI Law Associates, we believe in providing clear and transparent legal
              services that you can trust. Our experienced attorneys are
              committed to offering personalized solutions, whether you're
              dealing with complex real estate matters, seeking defense in
              criminal cases, or managing immigration and insurance issues. We
              simplify the legal process, making it easy to understand and
              navigate.
            </p>
            <p className="font-sans text-base text-[#262b40] leading-relaxed">
              Our dedicated team of specialist lawyers is committed to working
              closely with you to effectively address your legal matters. We
              prioritize the establishment of enduring relationships and are
              prepared to go above and beyond to ensure the best possible
              outcomes for our clients. We maintain transparency regarding our
              advice and associated costs, while giving careful consideration to
              the legal and financial implications you may face.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Stats Section --> */}
      <section className="bg-secondary px-6 md:px-16 lg:px-24 pb-20 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-400/40">
            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-[#057e5b] mb-2">
                Successful Cases
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                252+
              </p>
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-[#057e5b] mb-2">
                Satisfied Clients
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                250+
              </p>
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-[#057e5b] mb-2">
                Lawyer Associates
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                15+
              </p>
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-[#057e5b] mb-2">
                Saved for Clients
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                $10M+
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#F9F9FB] bg-[url('/images/expertise-section-bg.jpg')] w-full bg-cover bg-center bg-no-repeat flex flex-col gap-10 justify-center">
        <div className="flex flex-col gap-4 w-full lg:max-w-7xl mx-auto justify-center items-center">
          {/* Label — DM Sans, 12px, +0.07em, font-medium, uppercase */}
          <span className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b] block">
            Our process
          </span>

          {/* H2 — Playfair Display, 28px, -0.01em, lh 1.25 */}
          <h2 className="font-heading text-[1.75rem] tracking-[-0.01em] leading-tight font-semibold text-primary max-w-2xl text-center">
            Our Legal Process
          </h2>

          {/* Body — DM Sans, 16px, -0.005em, lh 1.7 */}
          <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-center max-w-2xl">
            We believe in transparency and keeping our clients informed at every
            stage. Here's how we work together to achieve the best outcome for
            your case.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full lg:max-w-7xl mx-auto justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step._id}
                className="w-full lg:max-w-2xl mx-auto bg-white rounded p-8 px-4 hover-lift"
              >
                <div className="flex items-start justify-between mb-2">
                  {/* H2 — Playfair Display, 36px, -0.015em, lh 1.2 */}
                  <h2 className="font-heading line-clamp-2 text-[2.25rem] tracking-[-0.015em] leading-[1.2] font-bold text-primary">
                    {step.title}
                  </h2>

                  {/* Display number — Playfair Display, 96px, -0.02em, lh 1 */}
                  <span className="font-heading text-[6rem] tracking-[-0.02em] leading-none font-bold text-stone-200/30 select-none">
                    {String(step.order).padStart(2, "0")}
                  </span>
                </div>

                {/* Body — DM Sans, 16px, -0.005em, lh 1.7 */}
                <p className="font-body line-clamp-3 text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-text-light mb-6 max-w-md">
                  {step.description}
                </p>

                <div className="relative h-72 rounded overflow-hidden">
                  {step.image ? (
                    <Image
                      src={urlFor(step.image).width(800).url()}
                      alt={step.image.alt ?? step.title}
                      className="object-cover"
                      fill
                    />
                  ) : (
                    <div className="w-full h-full bg-[#EBF3FC]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 md:px-16 lg:px-24 bg-white flex justify-center items-center w-full">
        <div className="w-full lg:max-w-7xl flex flex-col justify-start items-end gap-16">
          <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full">
            <div className="lg:mb-14 w-full lg:w-3/5 pr-0 lg:pr-10 flex flex-col gap-4">
              <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b] block">
                Our team
              </p>
              <h2 className="font-display text-[1.75rem] tracking-[-0.015em] leading-[1.2] font-semibold text-[#071639] w-full lg:max-w-150">
                At A1 Lawyers, we take pride in our team of committed legal
                professionals who bring a wide range of backgrounds and
                perspectives.
              </h2>
            </div>
            <p className="w-full lg:w-2/5 font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-slate-600 lg:max-w-160">
              We pride ourselves on having a diverse and
              dedicated group of legal professionals, ready to guide you through
              complex legal challenges with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {lawyers.map((lawyer) => (
              <div
                key={lawyer._id}
                className="hover-lift bg-white overflow-hidden border border-border block"
              >
                <div className="relative h-70 overflow-hidden">
                  {lawyer.photo ? (
                    <Image
                      src={urlFor(lawyer.photo).width(600).url()}
                      alt={lawyer.photo.alt ?? lawyer.fullName}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#EBF3FC]" />
                  )}
                </div>
                <div className="p-6 w-full flex flex-col gap-3">
                  <div>
                    <h3 className="font-display text-[1.4rem] text-primary leading-tight">
                      {lawyer.fullName}
                    </h3>
                    <p className="font-body text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#0474C4] mt-1">
                      {lawyer.position}
                    </p>
                  </div>
                  {lawyer.excerpt && (
                    <p className="font-body text-sm text-text-light leading-[1.7] line-clamp-3">
                      {lawyer.excerpt}
                    </p>
                  )}
                  {lawyer.expertise && lawyer.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {lawyer.expertise.map((e) => (
                        <span
                          key={e._id}
                          className="font-body text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-primary bg-bg px-2.5 py-1 border border-border"
                        >
                          {e.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="w-full flex flex-col justify-between items-start bg-primary p-8 text-white rounded gap-2 max-w-100">
              <div className="flex flex-col gap-2">
                {/* Label — DM Sans, 12px, +0.07em, font-medium, uppercase */}
                <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] mb-4 block">
                  Join the team
                </p>

                {/* H4 — Playfair Display, 22px, -0.005em, lh 1.3 */}
                <h4 className="font-heading text-[1.375rem] tracking-[-0.005em] leading-[1.3] font-medium text-white">
                  Qualified Personnel
                </h4>

                    {/* Body — DM Sans, 16px, -0.005em, lh 1.7 */}
              <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-white/70 mt-4">
                ABI Law Associates, we value our team of legal professionals—a group
                that is both diverse and deeply dedicated.
              </p>
              </div>

          

              <Link href="/our-people" className="bg-secondary w-full py-3.5 px-8 text-base font-medium font-body rounded inline-flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200 mt-8">
                Meet the Team  <ChevronRight className="inline w-3" />
              </Link> 
            </div>
          </div>
        </div>
      </section>

     <CtaSection />
    </>
  );
}
