import Header from "../Header";
import HeroSection from "../HeroSection";
import VentureVaultSection from "../VentureVaultSection";
import KeyHighlightsSection from "../KeyHighlightsSection";
import HowWeHelpSection from "../HowWeHelpSection";
import ShowcaseSections from "../ShowcaseSections";
import ApplicationProcessSection from "../ApplicationProcessSection";
import StudentStoriesSection from "../StudentStoriesSection";
import AssociationsSection from "../AssociationsSection";
import Footer from "../Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <VentureVaultSection />
        <KeyHighlightsSection />
        <HowWeHelpSection />
        <ShowcaseSections />
        <ApplicationProcessSection />
        <StudentStoriesSection />
        <AssociationsSection />
      </main>
      <Footer />
    </div>
  );
}
