import ServiceDetails from "@/components/ServiceDetails";
import { developmentPageContent } from "@/data/pages/development";

export default function DevelopmentPage() {
  return <ServiceDetails content={developmentPageContent} />;
}
