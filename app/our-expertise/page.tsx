import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getExpertisePage } from "@/sanity/lib/services/expertiseService";
import { urlFor } from "@/sanity/lib/image";
import ExpertiseFilters from "@/components/ExpertiseFilters";
import ExpertisePagination from "@/components/ExpertisePagination";
import PageHero from "@/components/PageHero";
import { ChevronRight } from "lucide-react";
import CtaSection from "../features/General/sections/cta-section";

export default async function OurExpertisePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category, page } = await searchParams;

  const activeCategory = typeof category === "string" ? category : "all";
  const currentPage =
    typeof page === "string" ? Math.max(1, parseInt(page, 10)) : 1;

  const { items, totalPages } = await getExpertisePage({
    category: activeCategory,
    page: currentPage,
  });

  return (
    <>
      <PageHero
        tagline="Legal Expertise"
        firstCaption="Our"
        secondCaption="Expertise"
        description="Despite many changes over the years, our reputation as a friendly, respected, and forward-thinking firm has never wavered. Our values are shared by the entire organization and every team member — all carefully selected to fit our culture."
      />

      {/* Filters */}
      <Suspense>
        <ExpertiseFilters activeCategory={activeCategory} />
      </Suspense>

      {/* Grid */}
      <section className="py-16 bg-white flex justify-center items-start w-full px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:max-w-7xl w-full gap-10">
          {items.length === 0 ? (
            <p className="font-body text-text-light text-base py-16 text-center">
              No expertise found for this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
              {items.map(
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
                    className="w-full h-full border border-[#0474C4]/10 rounded-sm"
                  >
                    <div className="flex flex-col w-full">
                      <div className="relative w-full h-40 overflow-hidden">
                        {item.coverImage ? (
                          <Image
                            src={urlFor(item.coverImage).width(600).url()}
                            alt={item.title}
                            fill
                            className="object-cover object-top transition-transform duration-300 hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#EBF3FC]" />
                        )}
                      </div>
                      <div className="flex flex-col gap-2 p-4 py-8 text-primary">
                        <span className="inline-flex font-body w-fit text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-primary bg-bg px-2.5 py-1 border border-border">
                          {item.category ?? "General"}
                        </span>

                        <h4 className="font-display font-semibold text-xl line-clamp-1">
                          {item.title}
                        </h4>
                        {item.excerpt && (
                          <p className="font-body font-normal text-[15px] text-primary line-clamp-3">
                            {item.excerpt}
                          </p>
                        )}

                        <Link
                          href="/our-expertise"
                          className="font-body text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 inline-flex items-center gap-1 mt-4"
                        >
                          Read More{" "}
                          <ChevronRight className="inline-block" size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}

          {/* Pagination */}
          <Suspense>
            <ExpertisePagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </Suspense>
        </div>
      </section>

   <CtaSection />
    </>
  );
}
