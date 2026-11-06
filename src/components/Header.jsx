import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { profile } from '../data/profile';
import './Header.css';

// The switch shows where it goes: a sun in dark mode, a moon in light mode.
const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" className="theme-icon theme-sun">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" className="theme-icon theme-moon">
    <path d="M20 14.6A8 8 0 0 1 9.4 4a8 8 0 1 0 10.6 10.6Z" />
  </svg>
);

// Theme flip: the new theme spreads out in a circle from the button. The
// browser snapshots the page, the theme changes, and the new page is revealed
// through a growing circle (View Transitions). Without View Transitions, or for
// visitors who prefer less motion, the theme just switches.
function switchTheme(next, setTheme, button) {
  const apply = () => {
    document.documentElement.dataset.theme = next;
    flushSync(() => setTheme(next));
  };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) {
    apply();
    return;
  }
  const r = button.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const transition = document.startViewTransition(apply);
  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.3, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    })
    .catch(() => {
      // The transition was skipped; the theme has still changed.
    });
}

// Plain words in the nav, one per section.
const LINKS = [
  ['work', 'Work'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

// Marks the nav link of the section in view: the last one, in page order,
// that crosses the middle of the screen. (The hero stays pinned behind the
// page, so it always crosses it; anything below it wins.)
function useCurrentSection(ids) {
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const crossing = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) crossing.add(entry.target.id);
          else crossing.delete(entry.target.id);
        }
        setCurrent(ids.filter((id) => crossing.has(id)).at(-1) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return current;
}

// The hero is watched too, so scrolling back to the top clears the mark.
const IDS = ['top', ...LINKS.map(([id]) => id)];

const Header = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const current = useCurrentSection(IDS);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be off (private windows); the theme still applies for this visit.
    }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="header-name">
          {profile.name}
        </a>
        <nav className="header-nav" aria-label="Main">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={current === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={(e) => switchTheme(next, setTheme, e.currentTarget)}
            aria-label={`Switch to ${next} mode`}
            title={`Switch to ${next} mode`}
          >
            {next === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
