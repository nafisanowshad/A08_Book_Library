import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="px-7 mx-auto">
        <FeaturedBooks/>
      </div>
    </div>
  );
}
