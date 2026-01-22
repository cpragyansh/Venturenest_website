import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Online Application",
    description:
      "Interested startups can submit their applications through our online portal, providing details about their business idea, team, market potential, and current stage of development.",
    icon: "online",
  },
  {
    step: "Step 2",
    title: "Screening & Evaluation",
    description:
      "Applications undergo a rigorous screening and evaluation process by our expert panel to assess feasibility, scalability, and alignment with our incubation objectives.",
    icon: "screening",
  },
  {
    step: "Step 3",
    title: "Selection & Onboarding",
    description:
      "Shortlisted startups are invited for further discussions and interviews. Selected startups are then onboarded into our incubation program, where they receive personalized support and guidance.",
    icon: "onboarding",
  },
];

export default function ApplicationProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-venture-red-light text-4xl lg:text-[44px] font-bold font-jakarta mb-6">
            Application Process
          </h2>
          <p className="text-venture-gray text-lg font-jakarta max-w-4xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum h the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 relative"
            >
              <div className="mb-6">
                <p className="text-venture-red-light text-lg font-light font-lato uppercase mb-4">
                  {item.step}
                </p>

                {/* Icon placeholder */}
                <div className="w-30 h-30 bg-venture-red-light mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <h3 className="text-venture-red-light text-2xl font-bold font-poppins text-right mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-venture-gray text-lg font-lato text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-venture-red hover:bg-venture-red-dark text-white rounded-lg px-8 py-6 text-base font-bold font-open-sans shadow-lg transition-all">
            Apply Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
