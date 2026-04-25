import RequestCallModal from '@/components/form/RequestCallModal'

const CtaSection = () => {
  return (
     <section className="py-15 bg-[#01694e] flex justify-center items-center w-full">
            <div className="px-6 lg:px-0 lg:max-w-7xl flex flex-col lg:flex-row justify-start items-end w-full gap-6">
              <div className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-4">
                <h4 className="font-display text-[40px] text-white font-medium max-w-lg leading-10">
                  Ready to Fight for You!
                </h4>
                <p className="font-body font-normal text-white text-lg">
                  Schedule a free consultation with one of our experienced attorneys
                  today.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex justify-start lg:justify-end items-start">
                <RequestCallModal className="w-full lg:w-60" />
              </div>
            </div>
          </section>
  )
}

export default CtaSection