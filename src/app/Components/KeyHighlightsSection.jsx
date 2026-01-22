export default function KeyHighlightsSection() {
  return (
    <section className="relative py-20 bg-venture-red">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-multiply"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/cad66c0f58e40106790a2f64cf919ca4060559a1?width=1920')`,
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col lg:flex-row gap-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/56a068c9dcd8659c7f8d339ea01242fa31c7744a?width=726"
              alt="Team collaboration"
              className="w-full lg:w-1/2 rounded-lg shadow-xl object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6cbb65a2664b8ca5bfd3f6780cd4e1a1323b128f?width=726"
              alt="Innovation showcase"
              className="w-full lg:w-1/2 rounded-lg shadow-xl object-cover"
            />
          </div>

          <div className="text-white">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <div className="h-0.5 w-30 bg-white"></div>
                <div className="h-0.5 w-20 bg-white"></div>
                <div className="h-0.5 w-7 bg-white"></div>
              </div>
              <h2 className="text-4xl lg:text-[44px] font-bold font-jakarta leading-tight">
                Key Highlights
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-jakarta mb-3">
                  Technology Business Incubator (TBI)
                </h3>
                <p className="text-white/90 font-jakarta leading-relaxed">
                  As a recognized Technology Business Incubator, CGC VentureNest
                  provides specialized support and infrastructure tailored to
                  the needs of technology-driven startups. Our TBI status
                  ensures access to government grants, funding schemes, and
                  other benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
