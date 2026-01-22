const services = [
  {
    title: "Incubation Programs",
    description:
      "Tailored programs designed to guide startups through every stage of their journey, from ideation to market entry and growth",
    icon: "incubation",
  },
  {
    title: "Mentorship & Coaching",
    description:
      "Expert guidance and mentorship from seasoned industry professionals, entrepreneurs, and subject matter experts",
    icon: "mentorship",
  },
  {
    title: "Infrastructure & Facilities",
    description:
      "State-of-the-art workspace, laboratories, prototyping facilities, and access to cutting-edge technologies",
    icon: "infrastructure",
  },
  {
    title: "Funding Assistance",
    description:
      "Assistance in securing funding through investor connections, pitch events, and access to venture capital firms and angel investors",
    icon: "funding",
  },
  {
    title: "Networking Opportunities",
    description:
      "Regular networking events, workshops, seminars, and industry collaborations to foster connections and partnerships",
    icon: "networking",
  },
  {
    title: "Legal & Regulatory Support",
    description:
      "Guidance on legal and regulatory compliance, intellectual property rights, company registration, and business incorporation",
    icon: "legal",
  },
  {
    title: "Market Access & Validation",
    description:
      "Support in market research, validation, product development, and access to potential customers and markets",
    icon: "validation",
  },
  {
    title: "Alumni Support",
    description:
      "Continued support and guidance for alumni startups, including access to resources, mentorship, and networking opportunities",
    icon: "alumni",
  },
];

export default function HowWeHelpSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-multiply"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/939ef9da218225d29baddfda288652afe49f8227?width=1920')`,
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-venture-blue text-4xl lg:text-[40px] font-bold font-jakarta mb-4">
            How We Help You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative group hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                {/* Icon placeholder */}
                <div className="w-24 h-24 bg-venture-blue mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                </div>

                <h3 className="text-venture-blue text-xl font-bold font-lato text-center mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-venture-gray text-base lg:text-lg font-lato text-center leading-normal">
                  {service.description}
                </p>
              </div>

              {/* Separator line */}
              {index < 4 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-venture-gray/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
