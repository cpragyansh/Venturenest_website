const showcaseItems = [
  {
    title: "Showcase Your\nInnovations",
    description:
      "At Venturene, startups have the unique opportunity to present their groundbreaking ide a panel of esteemed investors and industry leaders. This exposure helps gain valuable feedback and increases visibility and credibility by putting your startup in front of a national audience.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/61a5c5e914511ec02cfe680c9382ba279bf229d3?width=948",
    bgColor: "venture-red",
    reverse: false,
  },
  {
    title: "Connect with\nInvestors",
    description:
      "The event provides ample opportunities to connect with investors. Meet and network with top investors actively seeking the next big thing and unlock opportunities to secure funding that can take your startup to the next level.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/1dbe4e4444413b9337dc409b5dc9163491a18ce1?width=948",
    bgColor: "venture-red",
    reverse: true,
  },
  {
    title: "Celebrate\nEntrepreneurial Talent",
    description:
      "Venturenest is also a celebration of entrepreneurial talent. Be recognised for your entrepreneurial spirit and innovative ideas, and compete for awards and prizes celebrating your hard work and creativity. This event aims to foster a supportive and dynamic startup ecosystem, providing the resources and connections necessary for startups to thrive and succeed.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71c69d8db763115fb08a05d08cfcc9ace95d7cc7?width=948",
    bgColor: "venture-red",
    reverse: false,
  },
];

export default function ShowcaseSections() {
  return (
    <section className="bg-white">
      {showcaseItems.map((item, index) => (
        <div
          key={index}
          className={`relative py-20 lg:py-32 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 lg:px-20">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${item.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              {item.reverse ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 bg-venture-red mix-blend-multiply opacity-80"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-lg shadow-xl relative z-10"
                    />
                  </div>
                  <div className="relative">
                    <div className="bg-venture-red p-12 lg:p-16 text-white">
                      <div className="mb-6">
                        <div className="flex gap-2 mb-4">
                          <div className="h-0.5 w-30 bg-white"></div>
                          <div className="h-0.5 w-20 bg-white"></div>
                          <div className="h-0.5 w-7 bg-white"></div>
                        </div>
                        <h2 className="text-4xl lg:text-[44px] font-bold font-jakarta leading-tight whitespace-pre-line">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-lg font-bold font-jakarta leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <div className="bg-venture-red p-12 lg:p-16 text-white">
                      <div className="mb-6">
                        <div className="flex gap-2 mb-4">
                          <div className="h-0.5 w-30 bg-white"></div>
                          <div className="h-0.5 w-20 bg-white"></div>
                          <div className="h-0.5 w-7 bg-white"></div>
                        </div>
                        <h2 className="text-4xl lg:text-[44px] font-bold font-jakarta leading-tight whitespace-pre-line">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-lg font-bold font-jakarta leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-venture-red mix-blend-multiply opacity-80"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-lg shadow-xl relative z-10"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
