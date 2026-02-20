import Link from "next/link";
import Image from "next/image";
import Hero from "../components/home-ui/Hero";
import About from "../components/home-ui/About";
import Projects from "../components/home-ui/Projects";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Projects />
    </>
  );
};