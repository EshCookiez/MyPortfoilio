import { useEffect, useState } from 'react';
import './App.css';
import IntroLoader from './components/IntroLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

const BAND_WORDS = 'OPEN TO NEW ROLES · ';

const INTRO_SEEN_KEY = 'intro-seen';

// The axe-throw intro plays once per browser tab (on every reload while
// developing), and never for visitors who prefer less motion.
function shouldPlayIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (import.meta.env.DEV) return true;
  try {
    return !sessionStorage.getItem(INTRO_SEEN_KEY);
  } catch {
    return true;
  }
}

// Fades sections in as they scroll into view, once `enabled` (after the intro).
// Without IntersectionObserver, or when the visitor prefers less motion,
// everything shows at once.
function useReveal(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;
    const items = document.querySelectorAll('[data-reveal]');
    const show = (el) => el.classList.add('is-visible');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(show);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
}

function App() {
  // 'playing' → 'leaving' (curtain lifts, sections start revealing) → 'done'
  const [intro, setIntro] = useState(() => (shouldPlayIntro() ? 'playing' : 'done'));
  useReveal(intro !== 'playing');
  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // Storage blocked: the intro just plays again next time.
    }
  }, []);

  return (
    <div className="app">
      {intro !== 'done' && <IntroLoader leaving={intro === 'leaving'} onPhase={setIntro} />}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        {/* Two copies side by side, so sliding by half loops without a seam. */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>{BAND_WORDS.repeat(6)}</span>
            <span>{BAND_WORDS.repeat(6)}</span>
          </div>
        </div>
        <Contact />
      </main>
    </div>
  );
}

export default App;
