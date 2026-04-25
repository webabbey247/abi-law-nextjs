import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BriefcaseBusiness, Bell, ChevronRight } from "lucide-react";

export default function CareerPage() {
  return (
    <>
      <PageHero
        tagline="Join the Team"
        firstCaption="Career"
        secondCaption="Opportunities"
        description="We value our staff, and offer them every opportunity to fulfil their potential through structured career paths and established appraisal frameworks. Continuous development of skills and performance is positively encouraged. We will ensure that you have the relevant training and support to achieve the best results for our clients, the firm, and yourself. We are accredited Investors in People and are an Equal Opportunities employer."
      />

      <section className="py-28 px-8 bg-bg flex items-center justify-center w-full">
        <div className="relative max-w-2xl w-full bg-white border border-border rounded-sm px-12 py-16 flex flex-col items-center text-center overflow-hidden">
          <span className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#0474C4]/30" />
          <span className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#0474C4]/30" />

          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#EBF3FC] mb-6">
            <BriefcaseBusiness
              className="w-7 h-7 text-[#0474C4]"
              strokeWidth={1.5}
            />
          </div>

          <span className="font-body text-[0.72rem] tracking-[0.12em] uppercase font-semibold text-[#0474C4] mb-3">
            Positions Closed
          </span>

          <h2 className="font-display text-[2rem] leading-[1.2] font-semibold text-primary mb-4 max-w-md">
            No Openings at the Moment
          </h2>

          <p className="font-body text-[0.95rem] leading-[1.75] text-text-light max-w-sm mb-8">
            We&apos;re not actively hiring right now, but great talent is always
            welcome. Drop us your CV and we&apos;ll reach out when a role opens
            up.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-3 w-full max-w-sm mx-auto">
            <Link
              href="mailto:careers@a1lawyerslimited.co.uk"
              className="inline-flex justify-center items-center gap-4 py-3 px-5 bg-secondary text-center font-body font-medium text-base text-primary rounded w-full hover:bg-primary hover:text-white"
            >
              <Bell size={15} />
              Send Your CV
            </Link>
            <Link
              href="/"
              className="font-body w-full text-[0.82rem] font-medium text-primary tracking-[0.04em] uppercase hover:border-[#0474C4] hover:text-[#0474C4] transition-colors duration-200"
            >
              Back to Home{" "}
              <ChevronRight className="w-4 h-4 inline-block ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-box bg-[#071639]">
        <div className="container">
          <span className="section-label block text-center">
            Don&apos;t See a Fit?
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mb-4">
            Send Us Your Resume
          </h2>
          <p className="text-white/60 max-w-120 mx-auto mb-10">
            We accept speculative applications year-round. Reach out and tell us
            why you&apos;d be a great fit.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
