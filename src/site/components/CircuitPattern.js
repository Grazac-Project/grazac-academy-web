import { useMemo } from "react";

// The Grazac line pattern from the brand guideline (Assets > Patterns, p.14):
// parallel traces at 45°, jogging straight up in step, with dot terminals.
// No curves, per the guideline. Drawn in `currentColor`, so set the colour with CSS.

const W = 1200;
const H = 600;
const GAP = 30;

// Small deterministic PRNG so the pattern is identical on every render.
const rng = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

// Traces run bottom-left to top-right in groups of 3 to 6. A group shares
// one or two vertical jogs; offsetting each jog by GAP / 2 per trace keeps
// the lines parallel through the step.
const buildTraces = (seed) => {
  const rand = rng(seed);
  const paths = [];
  const dots = [];
  const count = Math.ceil((W + H) / GAP) + 2;

  let i = 0;
  while (i < count) {
    const size = 3 + Math.floor(rand() * 4);
    const jogs = [];
    let y = H * (0.75 + rand() * 0.15);
    const jogCount = 1 + Math.floor(rand() * 2);
    for (let j = 0; j < jogCount && y > H * 0.2; j += 1) {
      const len = 24 + rand() * 60;
      jogs.push([y, len]);
      y -= len + H * (0.2 + rand() * 0.2);
    }
    const breakTrace = rand() < 0.45 ? Math.floor(rand() * size) : -1;

    for (let k = 0; k < size && i < count; k += 1, i += 1) {
      let x = -H + i * GAP;
      let cy = H;
      let d = `M${x} ${cy}`;
      jogs.forEach(([jy, len], n) => {
        const top = jy + (k * GAP) / 2;
        const nx = x + (cy - top);
        if (k === breakTrace && n === 0) {
          // A short gap before the first jog, with a dot at each loose end.
          const cut = 26 + rand() * 30;
          const ax = nx - cut;
          const ay = top + cut;
          d += `L${ax} ${ay}`;
          dots.push([ax, ay], [nx, top]);
          d += `M${nx} ${top}`;
        } else {
          d += `L${nx} ${top}`;
        }
        x = nx;
        cy = top - len;
        d += `L${x} ${cy}`;
      });
      d += `L${x + cy} 0`;
      paths.push(d);
    }
  }
  return { d: paths.join(""), dots };
};

const CircuitPattern = ({ className = "", seed = 7 }) => {
  const { d, dots } = useMemo(() => buildTraces(seed), [seed]);
  return (
    <svg
      className={`gz-circuit ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
      {dots.map(([x, y], n) => (
        <circle key={n} cx={x} cy={y} r="4" fill="currentColor" />
      ))}
    </svg>
  );
};

export default CircuitPattern;
