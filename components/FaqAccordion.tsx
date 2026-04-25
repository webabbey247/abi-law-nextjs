"use client";

import { useState } from "react";
import type { Faq } from "@/sanity/lib/services/faqService";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) {
    return (
      <p className="font-body text-text-light text-sm py-8">
        No FAQs available yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq._id}
            className={`border-b border-[rgba(200,169,110,0.2)] ${i === 0 ? "border-t border-t-[rgba(200,169,110,0.2)]" : ""}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full bg-transparent border-0 py-[1.4rem] cursor-pointer flex items-center justify-between gap-4 font-display text-base font-normal text-primary leading-[1.35] text-left transition-colors duration-200 hover:text-[#0474C4]"
            >
              <span>{faq.question}</span>
              <span
                className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                  isOpen ? "bg-[#0474C4] border-[#0474C4]" : "border-border"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-3.5 h-3.5 fill-none stroke-2 transition-transform duration-200 ${
                    isOpen ? "stroke-white rotate-45" : "stroke-text-light"
                  }`}
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="font-body text-[0.9rem] text-text-light leading-[1.85] font-light pb-[1.4rem]">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
