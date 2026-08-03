import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <WhyUs />
      <About />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
}