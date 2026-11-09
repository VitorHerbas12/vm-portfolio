import { Link } from 'react-router-dom';
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
      {/* Banner de Acesso Rápido ao Protótipo Popeyes Brasil */}
      <aside 
        role="region"
        aria-label="Aviso de protótipo em destaque"
        style={{
          backgroundColor: '#F15A24',
          color: '#ffffff',
          textAlign: 'center',
          padding: '0.6rem 1rem',
          fontSize: '0.8rem',
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <span>🍗 <strong>PROJETO EM DESTAQUE:</strong> Protótipo Cinematográfico Popeyes Brasil</span>
        <Link 
          to="/"
          style={{
            backgroundColor: '#0D0C0A',
            color: '#ffffff',
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
            fontSize: '0.75rem',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-block',
          }}
        >
          Acessar Experiência →
        </Link>
      </aside>
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
