export default function AssociationsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-multiply"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/cad66c0f58e40106790a2f64cf919ca4060559a1?width=1920')`,
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Associations */}
          <div className="bg-venture-blue/90 p-12 lg:p-16 text-white">
            <h2 className="text-4xl lg:text-[44px] font-bold font-jakarta leading-tight mb-6">
              Associations and
              <br />
              Partnerships
            </h2>

            <p className="text-white/90 font-jakarta leading-relaxed mb-8">
              CGC VentureNest collaborates with a diverse network of industry
              partners, academic institutions, government agencies, and
              ecosystem enablers to provide startups with access to resources,
              opportunities, and expertise. Our strategic partnerships
              strengthen our ecosystem and create avenues for growth and
              collaboration.
            </p>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/56a068c9dcd8659c7f8d339ea01242fa31c7744a?width=726"
              alt="Partnership collaboration"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Right Column - Notable Incubatees */}
          <div className="bg-black/90 p-12 lg:p-16 text-white">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6cbb65a2664b8ca5bfd3f6780cd4e1a1323b128f?width=726"
              alt="Notable incubatees"
              className="w-full rounded-lg shadow-xl mb-8"
            />

            <h2 className="text-4xl lg:text-[44px] font-bold font-jakarta leading-tight mb-6">
              Notable Incubatees
            </h2>

            <p className="text-white/90 font-jakarta leading-relaxed">
              Explore success stories of startups that have graduated from CGC
              VentureNest and have made significant strides in their
              entrepreneurial journey. Learn about their innovations,
              achievements, and impact on society and the economy.
            </p>

            <p className="text-white/90 font-jakarta leading-relaxed mt-6">
              At CGC VentureNest, we are committed to empowering innovators,
              fueling entrepreneurship, and driving economic growth. Join us on
              this exciting journey of innovation and transformation.
            </p>

            <p className="text-white/90 font-jakarta leading-relaxed mt-6">
              For more information and inquiries, please contact us at………….....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
