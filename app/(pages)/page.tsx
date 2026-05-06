import Hero from "../components/home-ui/hero-section-ui/Hero";
import About from "../components/home-ui/About";
import Projects from "../components/home-ui/Projects";
import { addTag, getProjects } from "../actions/projects";
import TechStack from "../components/home-ui/TechStack";
import HeroFeatureBoxes from "../components/home-ui/hero-section-ui/HeroFeatureBoxes";
import XMarqueText from "../components/home-ui/hero-section-ui/XMarqueText";
import FeaturedProjects from "../components/home-ui/FeaturedProjects";
import AbstractFlexbox from "../components/home-ui/AbstractFlexbox";
import Services from "../components/home-ui/Services";
import Footer from "../components/nav-ui/Footer";
import Process from "../components/home-ui/Process";

export default async function Home() {
    const projects = "test";
    addTag();

    return (
        <>
            <Hero />
            <XMarqueText />
            <FeaturedProjects />
            <About />
            <Projects />
            <AbstractFlexbox />
            <Services />
            <Process />
            <TechStack />
            <Footer />
        </>
    );
}
