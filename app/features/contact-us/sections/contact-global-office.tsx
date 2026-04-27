import React from 'react'

interface Office {
  _id: string;
  continent: string;
  category: "headquarters" | "regional";
  city: string;
  country: string;
  fullAddress: string;
  phone?: string;
  email?: string;
}

const ContactGlobalOffice = ({offices} : {offices: Office[]}) => {
  return (
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-secondary w-full">
            <div className="w-full lg:max-w-7xl flex flex-col gap-5 mx-auto">
             <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#057e5b]">
                Our Presence
              </p>
              <h2 className="font-display text-[1.75rem] tracking-[-0.01em] leading-tight font-semibold text-primary">
                Global Offices &amp; Operations
              </h2>
    
              {offices.length === 0 ? (
                <p className="font-body text-text-light text-sm">No offices listed yet.</p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {offices.map((office) => (
                    <div
                      key={office._id}
                      className="border bg-white/90 border-[#0474C4]/25 rounded-sm p-6 flex flex-col gap-1"
                    >
      <div className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#8ed4b8] mb-2">
                        {office.continent} · {office.category === "headquarters" ? "Headquarters" : "Regional"}
                      </div>
      <div className="font-display text-[1.375rem] tracking-[-0.005em] leading-[1.3] font-medium text-primary mb-3">
                        {office.city}, {office.country}
                      </div>
      <div className="font-body text-[0.875rem] tracking-[0em] leading-[1.6] font-normal text-black whitespace-pre-line mb-2">
                        {office.fullAddress}
                      </div>
                      {office.phone && (
                        <a
                          href={`tel:${office.phone.replace(/\D/g, "")}`}
    className="font-body text-[0.75rem] tracking-[0em] leading-normal font-normal text-white/30"                    >
                          {office.phone}
                        </a>
                      )}
                      {office.email && (
                        <a
                          href={`mailto:${office.email}`}
                          className="font-body text-[0.8rem] text-text-light hover:text-[#0474C4] transition-colors duration-200"
                        >
                          {office.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
  )
}

export default ContactGlobalOffice