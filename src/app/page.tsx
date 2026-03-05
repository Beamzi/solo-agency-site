import { HeroPanel } from "@/components/hero-panel";
import ProcessSection from "@/components/ProcessSection";
import { processSectionContent } from "@/data/sections/process";

export default function Home() {
  return (
    <>
      <HeroPanel />
      <ProcessSection content={processSectionContent} />
    </>
  );
}
