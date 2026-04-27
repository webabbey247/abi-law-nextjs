import Link from "next/link";
import Image from "next/image";
import SubscriptionForm from "./form/SubscriptionForm";
import { getFeaturedExpertise } from "@/sanity/lib/services/expertiseService";

const sitemapLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-expertise", label: "Our Expertise" },
  { href: "/our-people", label: "Our People" },
  { href: "/contact", label: "Contact" },
  { href: "/career", label: "Career" },
];

export default async function Footer() {
  const expertiseItems = await getFeaturedExpertise({ limit: 7 });

  return (
    <footer className="bg-[#2e2e2e] text-white/70 px-6 lg:px-24 pt-20 pb-10 w-full">
      <div className="w-full lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.2fr] gap-12 pb-16">
          {/* Col 1 — Description */}
          <div className="flex flex-col justify-start gap-4">
            {/* Body — DM Sans, 15px, 0em, lh 1.7 */}
            <p className="font-body text-[0.9375rem] tracking-[0em] leading-[1.7] font-normal">
              At ABI Law Associates, we focus on building lasting relationships
              and go the extra mile to secure the best outcomes for our clients.
              Our advice and costs are always transparent, and we give careful
              thought to the legal and financial implications you may encounter.
            </p>
            <div className="max-w-lg flex flex-row gap-4">
              <Image
                className="w-25 h-25 object-contain"
                src="/images/accreditation-immigration-and-asylum.png"
                alt=""
                width={100}
                height={100}
                priority
              />
              <Image
                className="w-25 h-25 object-contain"
                src="/images/solicitors-regulation-authority-logo.svg"
                alt=""
                width={100}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Col 2 — Our Expertise + Sitemaps */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              {/* Label — DM Sans, 11px, +0.07em, font-medium, uppercase */}
              <h4 className="font-body text-[1rem] tracking-[0.07em] leading-[1.5px] uppercase font-normal text-[#f7f5f1] mb-5">
                Our Expertise
              </h4>
              <ul className="list-none p-0 m-0">
                {expertiseItems.map((item: { _id: string; title: string; slug: string }) => (
                  <li key={item._id} className="mb-[0.55rem]">
                    <Link
                      href={`/our-expertise/${item.slug}`}
                      className="font-body text-sm tracking-[0em] leading-[1.6] font-normal text-white/65 hover:text-secondary transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-body text-[1rem] tracking-[0.07em] leading-[1.5px] uppercase font-normal text-[#f7f5f1] mb-5">
                Sitemaps
              </h4>
              <ul className="list-none p-0 m-0">
                {sitemapLinks.map(({ href, label }) => (
                  <li key={href} className="mb-[0.55rem]">
                    <Link
                      href={href}
                      className="font-body text-sm tracking-[0em] leading-[1.6] font-normal text-white/65 hover:text-secondary transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 — Newsletter */}
          <div>
            <h4 className="font-body text-[1rem] tracking-[0.07em] leading-[1.5px] uppercase font-normal text-[#f7f5f1] mb-5">
              Stay Informed
            </h4>
            {/* Body — DM Sans, 15px, 0em, lh 1.7 */}
            <p className="font-body text-[0.9375rem] tracking-[0em] leading-[1.7] font-normal text-white/80 mb-6">
              Get notified about new programs &amp; cohort openings.
            </p>
            <SubscriptionForm />
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <p className="font-body text-[0.8375rem] tracking-[0em] leading-[1.7] font-normal text-white/80 mb-6">
            ABI Law Associates is a recognized sole practice with registered name of ABI Law Limited, incorporated in England and Wales with company number
            (08827355) and is authorised and regulated by the Solicitors
            Regulation Authority (number 8012829). Registered office: The Pavilion, 96 Kensington High Street, London, W8 4SG, England .
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-4 flex justify-between items-center flex-wrap gap-4">
          {/* Small — DM Sans, 12px, 0em */}
          <p className="font-body text-[0.8375rem] tracking-[0em] leading-[1.7] font-normal text-white/80">
            &copy; {new Date().getFullYear()} ABI Law Associates. All rights
            reserved.
          </p>
          {/* <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-body text-[0.8375rem] tracking-[0em] leading-[1.7] font-normal text-white/80 hover:text-secondary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-body text-[0.8375rem] tracking-[0em] leading-[1.7] font-normal text-white/80 hover:text-secondary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
