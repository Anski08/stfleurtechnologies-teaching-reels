import React from 'react';

/**
 * Hand-drawn marker strokes. Like ButterflyDiagram, every shape declares
 * pathLength={1} so `progress` (0..1) maps straight onto how much of the
 * stroke has been laid down - no path measuring required.
 */
export type PenMarkVariant = 'check' | 'cross' | 'underline' | 'circle' | 'arrow';

const PATHS: Record<PenMarkVariant, string[]> = {
  check: ['M 40 132 L 96 190 L 208 48'],
  cross: ['M 44 44 L 212 212', 'M 212 44 L 44 212'],
  underline: ['M 26 168 Q 128 214 230 164'],
  circle: ['M 128 30 C 210 30 236 96 220 140 C 200 200 120 236 66 216 C 18 198 6 118 52 66 C 74 42 106 30 140 32'],
  arrow: ['M 34 200 Q 128 60 214 96', 'M 214 96 L 176 78', 'M 214 96 L 190 136'],
};

/**
 * A hand-drawn lasso sized to whatever it is wrapping. The `circle` variant of
 * PenMark is fixed-aspect, so using it around a tall stacked fraction either
 * clipped the denominator or swallowed the neighbouring operator. This takes
 * explicit width and height and draws an ellipse to match.
 *
 * Place it absolutely inside a position:relative wrapper around the target,
 * with negative inset equal to the padding you want around it.
 */
export const PenEllipse: React.FC<{
  width: number;
  height: number;
  progress: number;
  color?: string;
  strokeWidth?: number;
  /** Slight tilt reads as handwritten rather than printed. */
  rotate?: number;
}> = ({width, height, progress, color = '#E11D48', strokeWidth = 11, rotate = -4}) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible'}}>
    <ellipse
      cx={width / 2}
      cy={height / 2}
      rx={width / 2 - strokeWidth}
      ry={height / 2 - strokeWidth}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      pathLength={1}
      strokeDasharray={1}
      strokeDashoffset={1 - Math.min(1, Math.max(0, progress))}
      transform={`rotate(${rotate} ${width / 2} ${height / 2})`}
    />
  </svg>
);

export const PenMark: React.FC<{
  variant: PenMarkVariant;
  progress: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
}> = ({variant, progress, color = '#E11D48', size = 240, strokeWidth = 16}) => {
  const paths = PATHS[variant];

  return (
    <svg width={size} height={size} viewBox="0 0 256 256" style={{overflow: 'visible'}}>
      {paths.map((d, i) => {
        // Multi-stroke marks draw in sequence rather than all at once.
        const share = 1 / paths.length;
        const local = Math.min(1, Math.max(0, (progress - i * share) / share));

        return (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - local}
          />
        );
      })}
    </svg>
  );
};
