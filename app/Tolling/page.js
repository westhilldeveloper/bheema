import About from "./components/About";
import ClientsDetails from "./components/ClientsDetails";
import Hero from "./components/Hero";
import ImageStrip from "./components/ImageStrip";
import Leadership from "./components/Leadership";
import LeadershipPage from "./components/LeadershipPage";
import OngoingProjects from "./components/OngoingProjects";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "../components/Footer";
import Navbar from "./components/Navbar";

export default function Tolling() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <LeadershipPage/>
    <OngoingProjects/>
   
    <Services/>
     <Projects/>
    <ClientsDetails/>
    <ProjectDetails/>
    <Footer/>
    </>
  )
}