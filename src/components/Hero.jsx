import { useEffect, useRef } from 'react';
import { profile } from '../data/profile';
import { follow } from './follow';
import './Hero.css';

// The words on the moving band: "WEB · MOBILE · DESKTOP · ", repeated.
const WORDS = `${profile.focus.join(' · ').toUpperCase()} · `;

// Parallax as Work slides up over the pinned hero: sets --p (0 to 1, how much
// of the hero Work covers) and --lift (the same in pixels) once per frame while
// scrolling. Hero.css turns those into each layer's speed. Nothing runs for
// visitors who prefer less motion.
function useParallax(heroRef) {
  useEffect(() => {
    const hero = heroRef.current;
    const work = document.getElementById('work');
    if (!hero || !work || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const height = hero.offsetHeight;
      const p = Math.min(1, Math.max(0, 1 - work.getBoundingClientRect().top / height));
      hero.style.setProperty('--p', p.toFixed(4));
      hero.style.setProperty('--lift', `${(p * height).toFixed(1)}px`);
      hero.toggleAttribute('data-covered', p >= 1);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [heroRef]);
}

const Hero = () => {
  const heroRef = useRef(null);
  useParallax(heroRef);

  return (
    <section id="top" ref={heroRef} className="hero" aria-labelledby="hero-name" data-reveal>
      <div className="container hero-text">
        <h1 id="hero-name" {...follow(0, 'hero-name')}>
          Hi, I’m {profile.shortName}.
        </h1>
        <p {...follow(1, 'hero-tagline')}>{profile.tagline}</p>
        <p {...follow(2, 'hero-status')}>
          {profile.location}
          <br />
          <strong>{profile.status}</strong>
        </p>
      </div>

      {/* Two copies side by side, so sliding by half loops without a seam. */}
      <div className="hero-band" aria-hidden="true">
        <div className="hero-track">
          <span>{WORDS.repeat(4)}</span>
          <span>{WORDS.repeat(4)}</span>
        </div>
      </div>

      <img className="hero-portrait" src={profile.photo} alt={profile.photoAlt} width="1000" height="1000" fetchPriority="high" />
    </section>
  );
};

export default Hero;
