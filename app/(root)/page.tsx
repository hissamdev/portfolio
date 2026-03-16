import Hero from "../components/home-ui/hero-section-ui/Hero";
import About from "../components/home-ui/About";
import Projects from "../components/home-ui/Projects";
import { getProjects } from "../actions/projects";
import TechStack from "../components/home-ui/TechStack";
import HeroFeatureBoxes from "../components/home-ui/hero-section-ui/HeroFeatureBoxes";

export default async function Home() {
  const projects = 'test';
  
  return (
    <>
        <Hero />
        <HeroFeatureBoxes />
        <About />
        <Projects />
        <TechStack />
    </>
  );
};