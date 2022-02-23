import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return(
    <>
      <Head>
        <title>Frontend developer - Alex Caires</title>
        <meta name="description" content="I am Alex Caires a frontend developer from London and this is my portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
