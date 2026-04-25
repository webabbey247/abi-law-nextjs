"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const FILTERS = [
  { label: "All", value: "all" },
    { label: "Individual", value: "individual" },
  { label: "Business", value: "business" },
];

export default function ExpertiseFilters({
  activeCategory,
}: {
  activeCategory: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setFilter = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") {
        params.delete("category");
      } else {
        params.set("category", value);
      }
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const btnClass = (value: string) => {
    const base =
      "py-3 px-10 rounded border font-body text-base font-normal cursor-pointer transition-all duration-300 whitespace-nowrap";
    const isActive =
      activeCategory === value || (value === "all" && !activeCategory);
    return isActive
      ? `${base} bg-primary text-secondary border-primary`
      : `${base} bg-[#fafaf8] text-text border-border hover:bg-primary hover:text-secondary hover:border-primary`;
  };

  return (
    <section className="w-full flex justify-center items-center bg-white py-4 px-8 md:px-20 border-b border-border sticky top-17 z-40">
      <div className="flex max-w-7xl justify-start items-center flex-wrap gap-2.5 w-full">
        <span className="font-body text-base tracking-caps uppercase text-text-light mr-1.5 shrink-0">
          Filter:
        </span>
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            className={btnClass(value)}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
