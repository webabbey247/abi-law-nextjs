/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import RequestCallModal from "@/components/form/RequestCallModal";
import { getFeaturedLawyers } from "@/sanity/lib/services/lawyerService";
import { getFeaturedExpertise } from "@/sanity/lib/services/expertiseService";
import { getLegalProcessSteps } from "@/sanity/lib/services/legalProcessService";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";

export default async function HomePage() {
  const [lawyers, expertise, processSteps] = await Promise.all([
    getFeaturedLawyers(3),
    getFeaturedExpertise({ category: "", limit: 6 }),
    getLegalProcessSteps(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex justify-center items-center relative overflow-hidden pt-18 bg-[url('/images/dummy/bg-03.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6),transparent_52%,rgba(0,0,0,0.6)_85%)] pointer-events-none" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_30%,rgba(201,168,76,0.06)_100%)] pointer-events-none" />
        <div className="absolute -bottom-50 -left-25 w-150 h-150 rounded-full bg-[rgba(201,168,76,0.04)] pointer-events-none" />

        <div className="w-full lg:max-w-7xl relative z-1 py-16 flex flex-col justify-center items-start gap-6">
          <div className="w-full lg:max-w-4xl flex flex-col justify-end items-start px-6 md:px-0 lg:px-0">

            {/* Label — DM Sans, 12px, +0.07em, font-medium, uppercase */}
            <span className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] mb-4 block">
              Solicitors serving Kensington & Chelsea · West London
            </span>

            {/* H1 — Playfair Display, 36px→72px, -0.015em→-0.02em, lh 1.1 */}
            <h1 className="font-heading text-[2.25rem] md:text-[4rem] lg:text-[5.5rem] tracking-[-0.015em] md:tracking-[-0.02em] leading-[1.1] font-bold text-white mb-6">
              Delivering Swift Legal
              Results Across
              <br />
              <em className="italic text-[#8ed4b8]">Kensington & Greater London</em>
            </h1>

            {/* Lead — DM Sans, 18px, -0.01em, lh 1.65 */}
            <p className="font-body text-[1.125rem] tracking-[-0.01em] leading-[1.65] font-light text-white/65 mb-10 w-full">
              With decades of experience and hundreds of victories behind us, we empower people and businesses through clear, reliable legal guidance. Based at The Pavilion, 96 Kensington High Street — in the heart of the Royal Borough of Kensington and Chelsea — we serve clients across Greater London and beyond. Everything we do is built on integrity, community, and care.
            </p>

          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full  px-6 md:px-0 lg:px-0">
            <Link
              className="py-3.5 px-5 bg-secondary text-center font-body font-medium text-base text-primary rounded w-full lg:w-60 hover:bg-primary hover:text-white"
              href="/about"
            >
              Learn More
            </Link>
            <Link
              className="py-3.5 px-5 bg-transparent border border-secondary text-center font-body font-medium text-base text-secondary rounded w-full lg:w-60 hover:bg-primary hover:border-primary hover:text-white"
              href="/our-expertise"
            >
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 lg:px-24 py-20">
        <div className="w-full lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            {/* Label — DM Sans, 12px, +0.07em, font-medium, uppercase */}
            <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] mb-5">
              About Us
            </p>

            {/* H1 — Playfair Display, 36px→48px, -0.015em→-0.02em, lh 1.2→1.1 */}
            <h1 className="font-heading text-[2.25rem] md:text-[3rem] tracking-[-0.015em] md:tracking-[-0.02em] leading-[1.2] md:leading-[1.1] font-bold text-stone-900">
              Straight forward legal services with no hidden surprises
            </h1>
          </div>

          {/* Right */}
          <div className="space-y-5 pt-8 md:pt-10">

            {/* Body — DM Sans, 16px, -0.005em, lh 1.7 */}
            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-stone-700">
              At ABI Law Associates, we believe in providing clear and transparent legal
              services that you can trust. Our experienced attorneys are
              committed to offering personalized solutions, whether you're
              dealing with complex real estate matters, seeking defense in
              criminal cases, or managing immigration and insurance issues. We
              simplify the legal process, making it easy to understand and
              navigate.
            </p>

            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-stone-700">
              Our team ensures that every client receives the most effective
              legal strategies, all while building long-term relationships
              focused on achieving the best possible outcomes.
            </p>

          </div>
        </div>
      </section>

      {/* <!-- Stats Section --> */}
      <section className="bg-white px-6 md:px-16 lg:px-24 pb-20 w-full">
        <div className="w-full lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-400/40">
            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Successful Cases
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                252+
              </p>
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Satisfied Clients
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                250+
              </p>
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Lawyer Associates
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                15+
              </p>
            </div>

            <div className="flex flex-col items-center py-8 px-4 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Saved for Clients
              </p>
              <p className="font-serif text-5xl md:text-6xl text-stone-900">
                $10M+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legal Process — sticky left, stacking cards right */}
      <section className="bg-[#f9f9f8]  px-6 md:px-16 lg:px-24 w-full">
        <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-16 items-start">
          {/* Left: sticky label + heading */}
          <div className="lg:sticky lg:top-28 w-full lg:w-2/5 shrink-0 py-28 flex flex-col gap-5">

            {/* Label — DM Sans, 12px, +0.07em, font-medium, uppercase */}
            <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8]">
              Our process
            </p>

            {/* H2 — Playfair Display, 28px, -0.01em, lh 1.25 */}
            <h2 className="font-heading text-[1.75rem] tracking-[-0.01em] leading-tight font-semibold text-[#071639]">
              Our Legal Process
            </h2>

            {/* Body — DM Sans, 16px, -0.005em, lh 1.7 */}
            <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-text-light">
              We believe in transparency and keeping our clients informed at
              every stage. Here&apos;s how we work together to achieve the best
              outcome for your case.
            </p>

            <div className="flex flex-col lg:flex-row gap-2 w-full">
              {/* Button — DM Sans, 14px, +0.02em, font-medium */}
              <Link
                className="py-3.5 px-5 bg-secondary text-center font-body text-base tracking-[0.02em] font-medium text-primary rounded w-full lg:w-60 hover:bg-primary hover:text-white"
                href="/about"
              >
                Learn More
              </Link>
              <Link
                className="py-3.5 px-5 bg-transparent border border-primary text-center font-body text-base tracking-[0.02em] font-medium text-primary rounded w-full lg:w-60 hover:bg-primary hover:text-white"
                href="/our-expertise"
              >
                Our Expertise
              </Link>
            </div>

          </div>

          {/* Right: stacking sticky cards */}
          <div className="flex-1 py-4 lg:py-28 gap-4 w-full lg:w-3/5">
            {processSteps.map((step, i) => (
              <div
                key={step._id}
                className="sticky bg-white rounded mx-auto p-8 pb-12"
                style={{
                  top: `${6 + i * 0.6}rem`,
                  zIndex: i + 1,
                }}
              >
                <div className="flex flex-col lg:flex-row items-start justify-start lg:justify-between">
                  <h2 className="font-heading order-2 lg:order-1 line-clamp-2 text-[2.25rem] tracking-[-0.015em] leading-[1.2] font-bold text-stone-900">
                    {step.title}
                  </h2>
                  <span className="font-heading order-1 lg:order-2 text-[6rem] tracking-[-0.02em] leading-none font-bold text-stone-200/30 select-none">
                    {String(step.order).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-body line-clamp-3 text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-stone-600 mb-6 max-w-lg">
                  {step.description}
                </p>
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  {step.image ? (
                    <Image
                      src={urlFor(step.image).width(800).url()}
                      alt={step.image.alt ?? step.title}
                      fill
                      className="object-cover"
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

      <section className="py-40 px-6 md:px-16 lg:px-24 bg-white bg-[url('/images/expertise-section-bg.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center w-full">
        <div className="w-full lg:max-w-7xl flex flex-col justify-start items-end gap-16">
          <div className="flex flex-col lg:flex-row gap-2 justify-between items-center w-full">
            <div className=" w-full lg:max-w-2xl p-0 lg:pr-10">
              <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] mb-4 block">
                Our Services
              </p>
              <h2 className="font-display text-[1.75rem] tracking-[-0.015em] leading-[1.2] font-semibold mb-5 text-[#071639] w-full lg:max-w-150">
                Expertise For Individuals &amp; Businesses
              </h2>
              <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-slate-600 w-full lg:max-w-160">
                With a proud tradition spanning decades, our firm has delivered
                steadfast representation and proven.
              </p>
            </div>
            <Link
              className="py-3.5 px-5 bg-secondary text-center font-body font-medium text-base text-primary rounded w-full lg:w-60 hover:bg-primary hover:text-white"
              href="/about"
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {expertise.map(
              (item: {
                _id: string;
                title: string;
                slug: string;
                category: string;
                excerpt?: string;
                coverImage?: object;
              }) => (
                <div
                  key={item._id}
                  className="group border border-[#0474C4]/10 bg-white hover:border-[#0474C4]/30 transition-colors duration-200 rounded"
                >
                  <div className="relative w-full h-44 overflow-hidden">
                    {item.coverImage ? (
                      <Image
                        src={urlFor(item.coverImage).width(600).url()}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#EBF3FC]" />
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <span
                      className="inline-flex font-body w-fit text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-primary bg-bg px-2.5 py-1 border border-border"
                    >
                      {item.category ?? "General"}
                    </span>

                    <h4 className="font-display font-semibold text-[1.1rem] text-primary leading-snug line-clamp-1">
                      {item.title}
                    </h4>
                    {item.excerpt && (
                      <p className="font-body font-normal text-[15px] text-primary line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}

                    <Link href={`/our-expertise/${item.slug}`} className="font-body text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 inline-flex items-center gap-1 mt-4">
                      Read More <ChevronRight className="inline-block" size={16} />
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 md:px-16 lg:px-24 bg-white flex justify-center items-center w-full">
        <div className="w-full lg:max-w-7xl flex flex-col justify-start items-end gap-16">
          <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full">
            <div className="lg:mb-14 w-full lg:w-3/5 pr-0 lg:pr-10 flex flex-col gap-4">
              <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] block">
                Our team
              </p>
              <h2 className="font-display text-[1.75rem] tracking-[-0.015em] leading-[1.2] font-semibold text-[#071639] w-full lg:max-w-150">
                We take pride in our team of committed legal
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

            <div className="w-full flex flex-col justify-start items-start bg-primary p-8 text-white rounded gap-2 max-w-100">
              <div className="flex flex-col gap-2">
                {/* Label — DM Sans, 12px, +0.07em, font-medium, uppercase */}
                <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] mb-4 block">
                  Join the team
                </p>

                {/* H4 — Playfair Display, 22px, -0.005em, lh 1.3 */}
                <h4 className="font-heading text-[1.375rem] tracking-[-0.005em] leading-[1.3] font-medium text-white">
                  Qualified Personnel
                </h4>
              </div>

              {/* Body — DM Sans, 16px, -0.005em, lh 1.7 */}
              <p className="font-body text-[1rem] tracking-[-0.005em] leading-[1.7] font-normal text-white/70 mt-4">
                We value our team of legal professionals—a group
                that is both diverse and deeply dedicated.
              </p>

              <Link href="/our-people" className="bg-secondary w-full py-3.5 px-8 text-base font-medium font-body rounded inline-flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200 mt-8">
                Meet the Team  <ChevronRight className="inline w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 bg-[#162238] flex justify-center items-center w-full">
        <div className="px-6 lg:px-0 lg:max-w-7xl flex flex-col lg:flex-row justify-start items-end w-full gap-6 text-white">
          <div className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-4">
            <h4 className="text-[40px] text-white font-medium font-playfair tracking-normal max-w-lg leading-10">
              Get a Free Consultation!
            </h4>
            <p className="font-jakata font-normal text-white tracking-normal text-lg">
              If you have questions for our experts, just leave a request or
              contact us by contact phone.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-start lg:justify-end items-start">
            <RequestCallModal className="py-[0.6rem] rounded px-5! text-sm! w-full lg:w-60! hover:bg-[#2C3E50]!" />
          </div>
        </div>
      </section>
    </>
  );
}
