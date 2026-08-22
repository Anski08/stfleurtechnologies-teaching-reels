import React from 'react';
import {random} from 'remotion';

/**
 * Deterministic confetti burst. Uses Remotion's seeded `random()` so every
 * render produces identical frames - essential for reproducible video output.
 * Drive `progress` from 0 to 1 with an interpolate() at the call site.
 */
export const Confetti: React.FC<{
  progress: number;
  count?: number;
  originX?: number;
  originY?: number;
  spread?: number;
  seed?: string;
}> = ({progress, count = 48, originX = 540, originY = 900, spread = 620, seed = 'party'}) => {
  const colors = ['#E11D48', '#2563EB', '#0E9488', '#F59E0B', '#7C3AED'];

  return (
    <svg
      width={1080}
      height={1920}
      viewBox="0 0 1080 1920"
      style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}
    >
      {new Array(count).fill(0).map((_, i) => {
        const angle = random(`${seed}-a-${i}`) * Math.PI * 2;
        const dist = (0.35 + random(`${seed}-d-${i}`) * 0.65) * spread;
        const x = originX + Math.cos(angle) * dist * progress;
        const y =
          originY + Math.sin(angle) * dist * progress + 900 * progress * progress * 0.55;
        const size = 14 + random(`${seed}-s-${i}`) * 20;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={size}
            height={size * 0.55}
            rx={3}
            fill={colors[Math.floor(random(`${seed}-c-${i}`) * colors.length)]}
            opacity={progress > 0.75 ? Math.max(0, (1 - progress) * 4) : 1}
            transform={`rotate(${random(`${seed}-r-${i}`) * 360 + progress * 420} ${x} ${y})`}
          />
        );
      })}
    </svg>
  );
};
