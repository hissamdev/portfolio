import Hero from "../components/home-ui/hero-section-ui/Hero";
import About from "../components/home-ui/About";
import Projects from "../components/home-ui/Projects";
import { getProjects } from "../actions/projects";
import TechStack from "../components/home-ui/TechStack";

export default async function Home() {
  const projects = await getProjects();
  
  return (
    <>
        <Hero />
        <About />
        <Projects projects={projects} />
        <TechStack />
    </>
  );
};