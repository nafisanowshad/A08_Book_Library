import Banner from "@/components/Banner";
import BenefitsAndMembership from "@/components/BenefitsAndMembership";
import FeaturedBooks from "@/components/FeaturedBooks";
import HowItWorks from "@/components/HowItWorks";
import MarqueeBanner from "@/components/MarqueeBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <MarqueeBanner/>
      <div className="px-7 mx-auto">
        <FeaturedBooks/>
        <HowItWorks/>
        <BenefitsAndMembership/>
      </div>
    </div>
  );
}
