import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/f1b7dfa1b0607f8be11674d77d7419c44090596c?width=1920')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="relative container mx-auto px-4 lg:px-20 pt-72 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-white font-jakarta mb-6">
            <span className="block text-7xl lg:text-8xl font-extralight leading-tight">
              VentureNest
            </span>
            <span className="block text-4xl lg:text-5xl font-medium mt-4 leading-snug">
              Unlock Funding Opportunities
              
              <br />
              for Your Startup Idea
            </span>
          </h1>

          <p className="text-white text-2xl lg:text-3xl font-jakarta font-light mb-8 drop-shadow-lg">
            Holistic Support for Budding Entrepreneurs
            <br />
            and Startups
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="bg-white rounded-lg p-4 w-full sm:w-56 h-26 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/32eb7cb71a2a79d33a6e5843d8a5a6e4b124e872?width=362"
                alt="Partner Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-4 w-full sm:w-56 h-26 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d66fcb5c9fed7efb4682e11c2c47856f8ebad0f5?width=194"
                alt="Partner Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          <Button className="bg-venture-red hover:bg-venture-red-dark text-white rounded-full px-8 py-6 text-sm font-bold uppercase font-jakarta shadow-lg transition-all">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
