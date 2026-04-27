import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import {
  getExpertiseBySlug,
  getRelatedExpertise,
  getAllExpertiseSlugs,
} from "@/sanity/lib/services/expertiseService";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAllExpertiseSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const expertise = await getExpertiseBySlug(slug);

  if (!expertise) notFound();

  const related = await getRelatedExpertise(expertise._id, expertise.category);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden px-8 md:px-16 py-20 w-full">
        <div className="absolute inset-0 bg-grid-ink pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-3">
          <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#EBF3FC] inline-flex items-center gap-2">
            <span className="block w-8 h-px bg-[#EBF3FC]" />
            <Link
              href="/our-expertise"
              className="hover:text-secondary transition-colors"
            >
              Our Expertise
            </Link>
            <span>/</span>
            <span className="capitalize">{expertise.category}</span>
          </p>
          <h1 className="font-display text-[2rem] md:text-[2.75rem] tracking-tight leading-tight font-bold text-white max-w-2xl">
            {expertise.title}
          </h1>
          {expertise.excerpt && (
            <p className="font-body text-lg leading-[1.65] font-light text-[#EBF3FC] max-w-xl">
              {expertise.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Content: sticky image left, body right */}
      <section className="bg-white w-full flex flex-col lg:flex-row items-start">
        {/* Left – sticky cover image as background */}
        <div
          className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen lg:sticky lg:top-0 shrink-0 bg-cover bg-center bg-no-repeat"
          style={
            expertise.coverImage
              ? {
                  backgroundImage: `url(${urlFor(expertise.coverImage).width(1200).url()})`,
                }
              : { backgroundColor: "#EBF3FC" }
          }
        />

        {/* Right – scrollable body */}
        <div className="w-full lg:w-1/2 min-w-0 p-20">
          {expertise.body ? (
            <div
              className="flex flex-col gap-2 prose prose-lg max-w-none font-body text-text leading-loose
              prose-headings:font-display prose-headings:text-primary prose-headings:tracking-tight
              prose-p:text-text prose-p:leading-loose
              prose-a:text-[#0474C4] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary
              prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1 prose-ul:italic
              prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-1 prose-ol:italic
              prose-li:text-text-light prose-li:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-4 prose-blockquote:text-text-light prose-blockquote:italic"
            >
              <PortableText value={expertise.body} />
            </div>
          ) : (
            <p className="font-body text-text-light text-base">
              No content available.
            </p>
          )}
        </div>
      </section>

      {/* Related Expertise */}
      {related.length > 0 && (
        <section className="bg-bg py-16 px-8 md:px-16 w-full">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b] inline-flex items-center gap-2">
                <span className="block w-8 h-px bg-[#057e5b]" />
                Related
              </p>
              <h2 className="font-display text-3xl font-bold text-primary leading-tight">
                Related Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(
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
                    className="border border-[#0474C4]/10 rounded-sm hover-lift block bg-white"
                  >
                    {item.coverImage ? (
                      <Image
                        src={urlFor(item.coverImage)
                          .width(400)
                          .height(240)
                          .url()}
                        alt={item.title}
                        width={400}
                        height={240}
                        className="w-full h-36 object-cover object-top rounded-t-sm"
                      />
                    ) : (
                      <div className="w-full h-36 bg-[#EBF3FC] rounded-t-sm" />
                    )}
                    <div className="flex flex-col gap-2 p-4 py-8 text-primary">
                      <span className="inline-flex font-body w-fit text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-primary bg-bg px-2.5 py-1 border border-border">
                        {item.category ?? "General"}
                      </span>

                      <h4 className="font-display font-semibold text-xl line-clamp-1">
                        {item.title}
                      </h4>
                      {item.excerpt && (
                        <p className="font-body font-normal text-[15px] text-text-light line-clamp-3">
                          {item.excerpt}
                        </p>
                      )}

                      <Link
                        href={`/our-expertise/${item.slug}`}
                        className="font-body text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 inline-flex items-center gap-1 mt-4"
                      >
                        Read More{" "}
                        <ChevronRight className="inline-block" size={16} />
                      </Link>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-15 bg-[#162238] flex justify-center items-center w-full">
        <div className="px-6 lg:px-0 lg:max-w-7xl flex flex-col lg:flex-row justify-start items-end w-full gap-6">
          <div className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-4">
            <h4 className="font-display text-[40px] text-white font-medium max-w-lg leading-10">
              Need Legal Counsel?
            </h4>
            <p className="font-body text-white text-lg">
              Our attorneys are ready to assist with{" "}
              {expertise.title.toLowerCase()} matters.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="py-4.5 px-5 bg-secondary text-center font-body font-semibold text-base text-primary rounded-[10px] w-full lg:w-60"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
