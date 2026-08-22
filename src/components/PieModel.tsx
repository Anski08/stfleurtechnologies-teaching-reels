import React from 'react';

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
};

const wedge = (cx: number, cy: number, r: number, from: number, to: number) => {
  const [x1, y1] = polar(cx, cy, r, from);
  const [x2, y2] = polar(cx, cy, r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
};

/**
 * A circle cut into `parts` exactly equal wedges, with `filled` of them shaded.
 * Angles are computed from the part count, so thirds are exactly 120 degrees.
 * Use for part-whole intuition; prefer BarModel when adding two fractions.
 */
export const PieModel: React.FC<{
  parts: number;
  filled: number;
  fill: string;
  size?: number;
  ink?: string;
}> = ({parts, filled, fill, size = 320, ink = '#1F2937'}) => {
  const r = size / 2 - 8;
  const c = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {new Array(parts).fill(0).map((_, i) => (
        <path
          key={i}
          d={wedge(c, c, r, (i * 360) / parts, ((i + 1) * 360) / parts)}
          fill={i < filled ? fill : '#FFFFFF'}
          stroke={ink}
          strokeWidth={5}
          strokeLinejoin="round"
        />
      ))}
      <circle cx={c} cy={c} r={r} fill="none" stroke={ink} strokeWidth={7} />
    </svg>
  );
};
