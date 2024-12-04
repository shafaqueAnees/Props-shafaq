import Image from "next/image";
import FigmaNavbar from "./component/figma";
import HeroSection from "./component/hero";
import Footer from "./component/footer";
import Card from "./component/card";
import Work from "./component/work";
import Project from "./component/project";

export default function Home() {
  return (
   <div>
    <FigmaNavbar />
    <HeroSection />
    <Project />
    <Work />
    <Card />
    <Footer />
   </div>
  );
}
