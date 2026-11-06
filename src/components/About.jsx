import SplitText from './ui/SplitText';

export default function About() {
  return (
    <section id="about" className="section split">
      <p className="eyebrow">ABOUT & PHILOSOPHY</p>
      <div>
        <h2>
          <SplitText
            text="Bridging the gap between deliberate design systems and production-grade engineering."
            tag="span"
            effect="blur"
            splitType="words"
            hoverEffect="lift"
            trigger="view"
            threshold={0.1}
            delay={30}
            duration={1.0}
          />
        </h2>
        <p>
          I treat visual design and front-end code as a single continuous discipline. By operating fluidly across UI architecture, component logic, and automated data pipelines, I deliver digital products that look distinctive, respond smoothly, and endure under real-world demands.
        </p>
      </div>
    </section>
  );
}
