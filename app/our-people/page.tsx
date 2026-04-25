import Image from "next/image";
import { Suspense } from "react";
import { getLawyersPage } from "@/sanity/lib/services/lawyerService";
import { urlFor } from "@/sanity/lib/image";
import ExpertisePagination from "@/components/ExpertisePagination";
import PageHero from "@/components/PageHero";
import CtaSection from "../features/General/sections/cta-section";

export default async function OurPeoplePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const currentPage =
    typeof page === "string" ? Math.max(1, parseInt(page, 10)) : 1;

  const { items: lawyers, totalPages } = await getLawyersPage({
    page: currentPage,
  });

  return (
    <>
      <PageHero
        tagline="The People"
        firstCaption="Our"
        secondCaption="People"
        description="Our knowledge, experience, and expertise form the foundation for everything we do. They drive the depth and consistency of our legal advice, shape our legal approach, and build lasting trust with our clients."
      />

      {/* Grid */}
      <section className="py-24 bg-white flex justify-center items-start w-full px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:max-w-7xl w-full gap-10">
          {lawyers.length === 0 ? (
            <p className="font-body text-text-light text-base py-16 text-center">
              No lawyers found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
              {lawyers.map(
                (lawyer: {
                  _id: string;
                  fullName: string;
                  slug: string;
                  position: string;
                  excerpt?: string;
                  photo?: { asset: object; alt?: string };
                  expertise?: {
                    _id: string;
                    title: string;
                    slug: string;
                    category: string;
                  }[];
                }) => (
                  <div
                    key={lawyer._id}
                    className="hover-lift bg-white overflow-hidden w-full border border-border"
                  >
                    <div className="relative overflow-hidden max-w-100 h-75 w-full">
                      {lawyer.photo ? (
                        <Image
                          src={urlFor(lawyer.photo).width(600).url()}
                          alt={lawyer.photo.alt ?? lawyer.fullName}
                          fill
                          className="object-cover w-full h-75 object-top transition-transform duration-300 hover:scale-105"
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
                ),
              )}
            </div>
          )}

          <Suspense>
            <ExpertisePagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
     <CtaSection />
    </>
  );
}
