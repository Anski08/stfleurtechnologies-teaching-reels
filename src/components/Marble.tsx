import React from 'react';
import {BLUE, INK, RED} from '../scenes-prob/theme';

export type MarbleColour = 'red' | 'blue';

const FILL: Record<MarbleColour, string> = {red: RED, blue: BLUE};

/**
 * A single marble, drawn as SVG inside whatever <svg> the caller provides.
 * The highlight is a rotated ellipse rather than a gradient so the marble
 * still reads clearly at thumbnail size.
 */
export const Marble: React.FC<{
  cx: number;
  cy: number;
  r: number;
  colour: MarbleColour;
  opacity?: number;
  strokeWidth?: number;
}> = ({cx, cy, r, colour, opacity = 1, strokeWidth = 5}) => (
  <g opacity={opacity}>
    <circle cx={cx} cy={cy} r={r} fill={FILL[colour]} stroke={INK} strokeWidth={strokeWidth} />
    <ellipse
      cx={cx - r * 0.32}
      cy={cy - r * 0.36}
      rx={r * 0.3}
      ry={r * 0.2}
      fill="#FFFFFF"
      opacity={0.6}
      transform={`rotate(-28 ${cx - r * 0.32} ${cy - r * 0.36})`}
    />
  </g>
);

/** Standalone marble with its own <svg> box, for absolutely-positioned use. */
export const MarbleDot: React.FC<{
  size: number;
  colour: MarbleColour;
  style?: React.CSSProperties;
}> = ({size, colour, style}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{overflow: 'visible', ...style}}>
    <Marble cx={50} cy={50} r={44} colour={colour} strokeWidth={5} />
  </svg>
);

/**
 * A horizontal row of marbles, used under each step so the fraction is never
 * an abstract pair of numbers. `ghosts` draws dashed empty circles for marbles
 * that have already been removed - the visual reminder that the denominator
 * dropped, repeated in every scene after the bag shrinks.
 */
export const MarbleStrip: React.FC<{
  marbles: MarbleColour[];
  ghosts?: number;
  r?: number;
  gap?: number;
  /** Marbles of this colour stay solid; the rest dim back. */
  emphasis?: MarbleColour;
}> = ({marbles, ghosts = 0, r = 24, gap = 16, emphasis}) => {
  const step = r * 2 + gap;
  const count = marbles.length + ghosts;
  const width = count * step;

  return (
    <svg width={width} height={r * 2 + 8} viewBox={`0 0 ${width} ${r * 2 + 8}`} style={{overflow: 'visible'}}>
      {marbles.map((colour, i) => (
        <Marble
          key={i}
          cx={i * step + r + gap / 2}
          cy={r + 4}
          r={r}
          colour={colour}
          strokeWidth={3}
          opacity={emphasis && colour !== emphasis ? 0.26 : 1}
        />
      ))}
      {new Array(ghosts).fill(0).map((_, i) => (
        <circle
          key={`g${i}`}
          cx={(marbles.length + i) * step + r + gap / 2}
          cy={r + 4}
          r={r}
          fill="none"
          stroke={INK}
          strokeOpacity={0.55}
          strokeWidth={4}
          strokeDasharray="7 8"
        />
      ))}
    </svg>
  );
};

/**
 * Where marbles sit inside the bag body. Hand-placed per count so the cluster
 * always looks deliberate; a generic packing algorithm gave lopsided rows at
 * n = 3 and n = 5, which is exactly when the count needs to be easiest to read.
 */
const LAYOUTS: Record<number, Array<[number, number]>> = {
  0: [],
  1: [[200, 312]],
  2: [
    [164, 312],
    [236, 312],
  ],
  3: [
    [200, 268],
    [156, 356],
    [244, 356],
  ],
  4: [
    [156, 268],
    [244, 268],
    [156, 356],
    [244, 356],
  ],
  5: [
    [152, 268],
    [248, 268],
    [122, 356],
    [200, 356],
    [278, 356],
  ],
};

/** Vertical centre of the lowest marble row, exported so scenes can launch a
 * marble from exactly where it was sitting. */
export const BAG_BOTTOM_ROW_Y = 356;
export const BAG_LAST_SLOT_X = 278;

/**
 * Drawstring bag drawn as a cutaway: the body is translucent so the marbles
 * inside stay visible. That is the whole pedagogical point of this video - the
 * student has to *see* five become four when one marble leaves.
 *
 * viewBox is 400 x 470; marble slots live between roughly x 90-310, y 210-390.
 */
export const MarbleBag: React.FC<{
  marbles: MarbleColour[];
  width?: number;
  /** Dim marbles beyond this index, for showing one about to leave. */
  fadeFrom?: number;
  fadeOpacity?: number;
}> = ({marbles, width = 400, fadeFrom, fadeOpacity = 0.18}) => {
  const slots = LAYOUTS[Math.min(marbles.length, 5)] ?? [];

  return (
    <svg width={width} height={width * (470 / 400)} viewBox="0 0 400 470" style={{overflow: 'visible'}}>
      {/* Body. Low-opacity fill keeps the contents readable through the cloth. */}
      <path
        d="M 82 150 C 58 232 44 312 76 374 C 110 440 290 440 324 374 C 356 312 342 232 318 150 A 118 38 0 0 1 82 150 Z"
        fill="#E7C89B"
        fillOpacity={0.45}
        stroke={INK}
        strokeWidth={7}
        strokeLinejoin="round"
      />

      {/* Marbles sit above the cloth but below the rim, so the rim reads as nearer. */}
      {slots.map(([cx, cy], i) => (
        <Marble
          key={i}
          cx={cx}
          cy={cy}
          r={38}
          colour={marbles[i]}
          opacity={fadeFrom !== undefined && i >= fadeFrom ? fadeOpacity : 1}
        />
      ))}

      {/* Mouth of the bag. Dark ellipse reads as an opening you can reach into. */}
      <ellipse cx={200} cy={150} rx={118} ry={38} fill="#6B5236" stroke={INK} strokeWidth={7} />
      <ellipse cx={200} cy={150} rx={118} ry={38} fill="none" stroke="#FDFCF7" strokeWidth={2} opacity={0.5} />

      {/* Drawstring: a band across the neck with two knots and loose ends.
          Sits just under the rim and above the top marble row - at y 218 it
          cut straight through the marbles and read as a pair of spectacles. */}
      <path
        d="M 76 192 C 130 218 270 218 324 192"
        fill="none"
        stroke={INK}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <circle cx={76} cy={192} r={13} fill="#B98A4B" stroke={INK} strokeWidth={5} />
      <circle cx={324} cy={192} r={13} fill="#B98A4B" stroke={INK} strokeWidth={5} />
      <path d="M 68 204 Q 46 238 58 266" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M 332 204 Q 354 238 342 266" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};
