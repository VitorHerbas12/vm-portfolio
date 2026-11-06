import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Process from '../components/Process';
import Differential from '../components/Differential';
import TechTicker from '../components/TechTicker';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Differential />
        <TechTicker />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
