import { HeroPanel } from "@/components/hero-panel";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import { processSectionContent } from "@/data/sections/process";
import { servicesSectionContent } from "@/data/sections/services";

export default function Home() {
  return (
    <>
      <HeroPanel />
      <ServicesSection content={servicesSectionContent} />
      <ProcessSection content={processSectionContent} />
    </>
  );
}
