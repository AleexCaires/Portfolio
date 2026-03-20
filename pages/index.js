import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Caires | Full-Stack Engineer</title>
        <meta name="description" content="Full-stack engineer in London building polished, scalable digital products for teams, brands, and ambitious web projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#071521" />
        <meta property="og:title" content="Alex Caires | Full-Stack Engineer" />
        <meta property="og:description" content="Full-stack engineer focused on thoughtful UX, scalable architecture, and fast, high-trust user experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alex Caires | Full-Stack Engineer" />
        <meta name="twitter:description" content="Selected work, experience, and contact details for Alex Caires, a full-stack engineer based in London." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
