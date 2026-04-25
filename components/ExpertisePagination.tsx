"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function ExpertisePagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete("page");
      } else {
        params.set("page", String(page));
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btnBase =
    "w-9 h-9 flex items-center justify-center rounded border font-body text-sm transition-all duration-200";

  return (
    <div className="flex items-center justify-center gap-2 py-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${btnBase} border-border text-text-light disabled:opacity-30 hover:border-primary hover:text-primary`}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          className={
            p === currentPage
              ? `${btnBase} bg-primary text-secondary border-primary`
              : `${btnBase} border-border text-text hover:border-primary hover:text-primary`
          }
          aria-label={`Page ${p}`}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${btnBase} border-border text-text-light disabled:opacity-30 hover:border-primary hover:text-primary`}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
}
