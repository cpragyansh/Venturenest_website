const testimonials = [
  {
    name: "Megha Kwatra",
    placement: "Placed in Adobe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/3de79127234df7c7adfe8f27c85da1cbe4939d8b?width=80",
  },
  {
    name: "Madhav Anand",
    placement: "Placed in Nutanix",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/bd4ed0a4ddb787eb56e2100da00a1e0fdb7b8f0c?width=80",
  },
  {
    name: "Anmol Bhateja",
    placement: "Placed in Amazon",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e5ba27a84a0d2ad500b7f6d6f4a37e9da79c5419?width=80",
  },
  {
    name: "Yashika Sharma",
    placement: "Placed in MU Sigma",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8718f3b492b658780ed7f8f406481472d3a7b39c?width=80",
  },
  {
    name: "Deepika Sharma",
    placement: "Placed in Autodesk",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c90d1cfc9bf28320c417348e1c6962bee3622c7b?width=80",
  },
  {
    name: "Rahul Sharma",
    placement: "Placed in PlaySimple",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/72554f6c16acc9aad205c7c7b5e4680de5b2b9fd?width=80",
  },
  {
    name: "Ankita Kumari",
    placement: "Placed in MU Sigma",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/24928bd9be06499fd390e87ddf0649b24899b1a0?width=80",
  },
  {
    name: "Megha Kwatra",
    placement: "Placed in Adobe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5d45ff49d9ec212022ff1ba1459555a3f09aceed?width=80",
  },
];

export default function StudentStoriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-[44px] font-bold font-jakarta">
            <span className="text-venture-red">Student</span>{" "}
            <span className="text-venture-gray">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 relative">
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 mb-6 opacity-40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.8665 30.8241C13.1838 31.3681 11.2425 31.3574 9.65584 30.5441C5.99184 28.6614 4.40517 23.8081 5.87984 18.6668C6.54117 16.3601 7.7065 14.1201 10.1705 11.8614C12.6345 9.6001 16.0532 8.26677 17.6372 8.26677C17.7705 8.26465 17.9029 8.28886 18.0268 8.338C18.1507 8.38715 18.2637 8.46026 18.3594 8.55316C18.455 8.64605 18.5313 8.7569 18.584 8.87936C18.6367 9.00181 18.6648 9.13346 18.6665 9.26677C18.6665 9.81877 18.1972 10.2668 17.6372 10.2668C15.8265 10.2668 14.2078 11.2534 12.2905 12.7041C10.8238 13.8161 9.67717 15.2374 9.04517 16.4748C7.83184 18.8428 7.79184 22.1814 9.75183 23.0694C10.2069 22.553 10.7677 22.1404 11.3962 21.8597C12.0247 21.5791 12.7062 21.4369 13.3945 21.4428C16.5945 21.4428 18.4798 24.0161 18.3972 26.3468C18.3198 28.5734 16.9038 30.1601 14.8665 30.8241ZM30.8665 30.8241C29.1838 31.3681 27.2425 31.3574 25.6558 30.5441C21.9918 28.6614 20.4052 23.8081 21.8798 18.6668C22.5412 16.3601 23.7065 14.1201 26.1705 11.8614C28.6345 9.6001 32.0532 8.26677 33.6372 8.26677C33.7705 8.26465 33.9029 8.28886 34.0268 8.338C34.1507 8.38715 34.2637 8.46026 34.3594 8.55316C34.455 8.64605 34.5313 8.7569 34.584 8.87936C34.6367 9.00181 34.6648 9.13346 34.6665 9.26677C34.6665 9.81877 34.1972 10.2668 33.6372 10.2668C31.8265 10.2668 30.2078 11.2534 28.2905 12.7041C26.8238 13.8161 25.6772 15.2374 25.0452 16.4748C23.8318 18.8428 23.7918 22.1814 25.7518 23.0694C26.6932 22.0401 27.9225 21.4428 29.3945 21.4428C32.5945 21.4428 34.4798 24.0161 34.3972 26.3468C34.3198 28.5734 32.9038 30.1601 30.8665 30.8241Z"
                  fill="#2E2E2E"
                  fillOpacity="0.4"
                />
              </svg>

              {/* Avatar */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-venture-gray font-jakarta mb-6 leading-normal">
                {testimonial.quote}
              </p>

              <div className="border-t border-venture-gray/40 pt-4 mt-auto">
                <p className="font-bold font-jakarta text-venture-red">
                  {testimonial.name}
                </p>
                <p className="text-sm text-venture-gray-light font-jakarta">
                  {testimonial.placement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
