import { useState } from 'react';
import { site } from '../data/site';
import SplitText from './ui/SplitText';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">INITIATE CONTACT</p>
      <h2>
        <SplitText
          text="HAVE A PROJECT IN MIND? LET'S SHAPE IT."
          tag="span"
          effect="rise"
          splitType="words"
          hoverEffect="lift"
          trigger="view"
          threshold={0.1}
          delay={35}
          duration={1.0}
        />
      </h2>
      <p>
        Open for bespoke web development, design system implementation, and contract collaborations. Let's discuss scope, goals, and timelines.
      </p>
      <div className="hero-actions">
        <a className="button primary" href={`mailto:${site.email}`}>Send an Email</a>
        <button type="button" className="button button-copy" onClick={copyEmail}>
          {copied ? '✓ Copied to Clipboard!' : 'Copy Email Address'}
        </button>
        <a className="button button-phone" href={site.phoneHref}>Let's build something together</a>
      </div>
    </section>
  );
}
