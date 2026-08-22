import React from 'react';

/**
 * The butterfly (cross-multiplication) diagram, drawn as if by hand.
 *
 * Every stroke uses `pathLength={1}` so a 0..1 progress value maps directly to
 * "how much of this stroke has been drawn" without measuring path geometry.
 *
 * The maths shown is exact: a/b + c/d = (a*d + c*b) / (b*d).
 */
export const ButterflyDiagram: React.FC<{
  blueProgress: number;
  redProgress: number;
  baseProgress: number;
  showBlueResult: boolean;
  showRedResult: boolean;
  showBaseResult: boolean;
  ink?: string;
}> = ({
  blueProgress,
  redProgress,
  baseProgress,
  showBlueResult,
  showRedResult,
  showBaseResult,
  ink = '#1F2937',
}) => {
  return (
    <svg width={880} height={620} viewBox="0 0 880 620" style={{overflow: 'visible'}}>
      {/* ---- the problem, 1/2 + 1/3 ---- */}
      <text x={250} y={215} fontSize={130} fontWeight={600} fill={ink} textAnchor="middle">
        1
      </text>
      <rect x={182} y={252} width={136} height={11} rx={5} fill={ink} />
      <text x={250} y={392} fontSize={130} fontWeight={600} fill={ink} textAnchor="middle">
        2
      </text>

      <text x={440} y={330} fontSize={120} fontWeight={600} fill={ink} textAnchor="middle">
        +
      </text>

      <text x={630} y={215} fontSize={130} fontWeight={600} fill={ink} textAnchor="middle">
        1
      </text>
      <rect x={562} y={252} width={136} height={11} rx={5} fill={ink} />
      <text x={630} y={392} fontSize={130} fontWeight={600} fill={ink} textAnchor="middle">
        3
      </text>

      {/* ---- blue wing: numerator of the first x denominator of the second ----
           Centre is the midpoint of the two glyphs it must enclose - (250,169)
           and (630,347) - and the angle is the line between them, so the loop
           sits symmetrically over both digits. */}
      <ellipse
        cx={440}
        cy={258}
        rx={295}
        ry={132}
        transform="rotate(25.1 440 258)"
        fill="none"
        stroke="#2563EB"
        strokeWidth={11}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - blueProgress}
      />

      {/* ---- red wing: numerator of the second x denominator of the first ---- */}
      <ellipse
        cx={440}
        cy={258}
        rx={295}
        ry={132}
        transform="rotate(-25.1 440 258)"
        fill="none"
        stroke="#E11D48"
        strokeWidth={11}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - redProgress}
      />

      {/* ---- the base stroke under both denominators ---- */}
      <path
        d="M 168 470 Q 440 528 712 470"
        fill="none"
        stroke="#0E9488"
        strokeWidth={11}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - baseProgress}
      />

      {/* ---- results ---- */}
      {showBlueResult ? (
        <g>
          <circle cx={800} cy={150} r={74} fill="#2563EB" />
          <text
            x={800}
            y={178}
            fontSize={76}
            fontWeight={700}
            fill="#FFFFFF"
            textAnchor="middle"
          >
            3
          </text>
        </g>
      ) : null}

      {showRedResult ? (
        <g>
          <circle cx={80} cy={150} r={74} fill="#E11D48" />
          <text
            x={80}
            y={178}
            fontSize={76}
            fontWeight={700}
            fill="#FFFFFF"
            textAnchor="middle"
          >
            2
          </text>
        </g>
      ) : null}

      {showBaseResult ? (
        <g>
          <circle cx={440} cy={568} r={74} fill="#0E9488" />
          <text
            x={440}
            y={596}
            fontSize={76}
            fontWeight={700}
            fill="#FFFFFF"
            textAnchor="middle"
          >
            6
          </text>
        </g>
      ) : null}
    </svg>
  );
};
