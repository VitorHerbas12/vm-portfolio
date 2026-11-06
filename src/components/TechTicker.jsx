import LogoLoop from './ui/LogoLoop';
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  ViteLogo,
  GithubLogo,
  VercelLogo,
  FigmaLogo,
  BlenderLogo,
  ThreeLogo
} from './ui/Icons';

const logos = [
  { node: <ReactLogo />, title: 'React', hoverColor: '#61DAFB' },
  { node: <JsLogo />, title: 'JavaScript (ES6+)', hoverColor: '#F7DF1E' },
  { node: <ViteLogo />, title: 'Vite', hoverColor: '#BD34FE' },
  { node: <ThreeLogo />, title: 'Three.js / WebGL', hoverColor: '#FFFFFF' },
  { node: <FigmaLogo />, title: 'Figma', hoverColor: '#FF7262' },
  { node: <HtmlLogo />, title: 'HTML5', hoverColor: '#E44D26' },
  { node: <CssLogo />, title: 'CSS3', hoverColor: '#264DE4' },
  { node: <GithubLogo />, title: 'GitHub', hoverColor: '#FFFFFF' },
  { node: <VercelLogo />, title: 'Vercel', hoverColor: '#FFFFFF' },
  { node: <BlenderLogo />, title: 'Blender 3D', hoverColor: '#EA7600' }
];

export default function TechTicker() {
  return (
    <section className="tech-ticker-section" aria-label="Technology Ticker">
      <div className="tech-ticker-header">
        <span className="tech-ticker-badge">// CONTINUOUS RUNTIME</span>
        <span className="tech-ticker-hint">DRAG OR HOVER TO EXPLORE STACK</span>
      </div>

      <div className="tech-ticker-wrap">
        <LogoLoop
          logos={logos}
          speed={70}
          direction="left"
          logoHeight={38}
          gap={60}
          hoverSpeed={10}
          scaleOnHover
          labels="hover"
          fadeOut
          fadeOutWidth={0.18}
          draggable
          ariaLabel="Core technologies and toolset"
        />
      </div>
    </section>
  );
}

