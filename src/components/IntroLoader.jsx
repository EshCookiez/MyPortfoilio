import { useEffect, useRef } from 'react';
import './IntroLoader.css';

// The intro: a pixel axe spins in from the left and thunks into a target in the
// middle of the screen. It rests there for half a second, then the screen opens from
// the bullseye in a round wave, with ripples following it out. The hold is timed
// from the impact animation itself (see onAnimationStart), so it never drifts.
const IMPACT_ANIMATION = 'intro-target-hit'; // the target's shake, in IntroLoader.css
const HOLD_MS = 500; // how long the axe sits in the target before the screen opens
const EXIT_MS = 1150; // the wave and the last ripple, in IntroLoader.css
const FALLBACK_OPEN_MS = 3000; // if animations never run (a background tab, say)

// PICO-8 colors, so the sprites match the rest of the pixel art.
const INK = '#1D2B53';
const STEEL_DARK = '#5F574F';
const STEEL = '#C2C3C7';
const EDGE = '#FFF1E8';
const WOOD = '#FFCCAA';
const BARK = '#AB5236';
const RING = '#FFA300';
const RED = '#FF004D';

// 16×16, blade facing right. o outline, d socket, s steel, w edge, b handle, r grip wrap.
const AXE = [
  '...........oooo.',
  '...ooooo..ossswo',
  '...oddddoosssswo',
  '...odbddddsssswo',
  '...odbdssssssswo',
  '...odbddoosssswo',
  '...odbdo..ossswo',
  '....obo....oswo.',
  '....obo.....ooo.',
  '....obo.........',
  '....obo.........',
  '....oro.........',
  '....oro.........',
  '....oro.........',
  '....obo.........',
  '....ooo.........',
];
const AXE_COLORS = { o: INK, d: STEEL_DARK, s: STEEL, w: EDGE, b: BARK, r: RED };

// 24×24 log end with a painted bullseye, drawn from distance to the centre.
function targetColor(x, y) {
  const d = Math.hypot(x + 0.5 - 12, y + 0.5 - 12);
  if (d > 12) return null;
  if (d > 11) return INK;
  if (d > 9.6) return BARK;
  if (d < 2.2) return RED;
  if (d < 3.4) return WOOD;
  if (d < 4.6) return RED;
  if (d > 7.4 && d < 8.4) return RING;
  return WOOD;
}

// One <rect> per run of same-colored pixels in a row, to keep the SVG small.
function toRects(size, colorAt) {
  const rects = [];
  for (let y = 0; y < size; y++) {
    let x = 0;
    while (x < size) {
      const fill = colorAt(x, y);
      let w = 1;
      while (x + w < size && colorAt(x + w, y) === fill) w++;
      if (fill) rects.push({ x, y, w, fill });
      x += w;
    }
  }
  return rects;
}

const AXE_RECTS = toRects(16, (x, y) => AXE_COLORS[AXE[y][x]] ?? null);
const TARGET_RECTS = toRects(24, targetColor);

const Sprite = ({ size, rects, className }) => (
  <svg className={className} viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" aria-hidden="true" focusable="false">
    {rects.map((r) => (
      <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height="1" fill={r.fill} />
    ))}
  </svg>
);

// Wood chips that fly off on impact, away from the axe: direction in art
// pixels, and color.
const CHIPS = [
  { dx: 6, dy: -16, c: BARK },
  { dx: 14, dy: -10, c: RING },
  { dx: 17, dy: -1, c: BARK },
  { dx: 13, dy: 10, c: RING },
  { dx: 5, dy: 16, c: BARK },
  { dx: -2, dy: -17, c: RING },
];

// `onPhase` must be stable (a state setter): it moves the app from 'playing' to
// 'leaving' (the screen opens) to 'done' (unmount).
const IntroLoader = ({ leaving, onPhase }) => {
  const hold = useRef(0);

  // While the intro shows: no scrolling, and any key or click opens it early.
  useEffect(() => {
    const holdTimer = hold;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    const open = () => onPhase('leaving');
    window.addEventListener('keydown', open);
    window.addEventListener('pointerdown', open);
    const fallback = setTimeout(open, FALLBACK_OPEN_MS);

    return () => {
      clearTimeout(fallback);
      clearTimeout(holdTimer.current);
      window.removeEventListener('keydown', open);
      window.removeEventListener('pointerdown', open);
      root.style.overflow = prevOverflow;
    };
  }, [onPhase]);

  // Once open, remove the intro when the wave and ripples have finished.
  useEffect(() => {
    if (!leaving) return undefined;
    const done = setTimeout(() => onPhase('done'), EXIT_MS);
    return () => clearTimeout(done);
  }, [leaving, onPhase]);

  // The axe has landed: hold half a second, then open.
  const onAnimationStart = (event) => {
    if (event.animationName !== IMPACT_ANIMATION || hold.current) return;
    hold.current = setTimeout(() => onPhase('leaving'), HOLD_MS);
  };

  return (
    // Decorative: the page underneath stays readable to screen readers, and any
    // key or click skips the intro.
    <div className={`intro${leaving ? ' is-leaving' : ''}`} aria-hidden="true" onAnimationStart={onAnimationStart}>
      <div className="intro-curtain">
        <div className="intro-stage">
          <Sprite size={24} rects={TARGET_RECTS} className="intro-target" />
          <div className="intro-axe">
            <Sprite size={16} rects={AXE_RECTS} className="intro-axe-sprite" />
          </div>
          {CHIPS.map((chip, i) => (
            <span key={i} className="intro-chip" style={{ '--dx': chip.dx, '--dy': chip.dy, '--c': chip.c }} />
          ))}
        </div>
      </div>
      <span className="intro-wave" />
      <span className="intro-ripple" style={{ '--i': 1 }} />
      <span className="intro-ripple" style={{ '--i': 2 }} />
    </div>
  );
};

export default IntroLoader;
