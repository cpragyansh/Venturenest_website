import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function VentureVaultSection() {
  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/dcbb864cbc703476746ab68a78a17849ffe3fb5d?width=1920')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80" />

      <div className="relative container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-venture-red-light text-4xl lg:text-[44px] font-bold font-lato leading-tight mb-6">
              Venturenest:
              <br />
              Fueling Dreams, Funding Reality
            </h2>

            <div className="space-y-6 text-venture-gray font-lato text-base leading-relaxed">

              <p>CGC VentureNest is the premier business incubator at CGC University , designed to empower innovation, entrepreneurship, and sustainable business growth. As a dynamic startup hub, VentureNest provides a thriving ecosystem where aspiring entrepreneurs and early-stage startups can transform groundbreaking ideas into successful ventures.
              </p>

              <p>
                
As a flagship initiative of CGC University, CGC VentureNest is dedicated to fostering an entrepreneurial culture among students, faculty and the broader community. Our incubator offers cutting-edge infrastructure, personalized mentorship from industry experts, strong networking opportunities and access to investors and funding resources. Whether you're launching a tech startup, social enterprise, or scalable business model, CGC VentureNest accelerates your journey from concept to market success.
              </p>
            </div>

            <Button className="mt-8 bg-venture-red hover:bg-venture-red-dark text-white rounded-full px-8 py-6 text-sm font-bold uppercase font-jakarta shadow-lg transition-all">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="hidden lg:block">
            {/* Image placeholder for right side */}
          </div>
        </div>
      </div>
    </section>
  );
}
