import SplitText from './ui/SplitText';

export default function Differential() {
  return (
    <section className="statement">
      <p className="eyebrow">ENGINEERED FOR CLARITY. DESIGNED FOR RETENTION.</p>
      <h2>
        <SplitText
          text="DETAILS ARE NOT DECORATION — THEY ARE THE PRODUCT."
          tag="span"
          effect="flip"
          splitType="words"
          hoverEffect="wave"
          trigger="view"
          threshold={0.15}
          delay={40}
          duration={1.1}
        />
      </h2>
    </section>
  );
}
