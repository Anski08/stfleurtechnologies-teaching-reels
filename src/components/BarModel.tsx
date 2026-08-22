import React from 'react';

/**
 * An exact area model for a fraction: a bar cut into `parts` equal pieces
 * with the first `filled` pieces shaded. Geometry is computed, never traced
 * from artwork, so halves, thirds and sixths are always mathematically true.
 */
export const BarModel: React.FC<{
  parts: number;
  filled: number;
  fill: string;
  width?: number;
  height?: number;
}> = ({parts, filled, fill, width = 800, height = 132}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 9,
        width,
        height,
        padding: 11,
        borderRadius: 28,
        backgroundColor: 'rgba(255,255,255,0.10)',
        border: '5px solid rgba(255,255,255,0.55)',
        boxSizing: 'border-box',
      }}
    >
      {new Array(parts).fill(0).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            borderRadius: 15,
            backgroundColor: i < filled ? fill : 'rgba(255,255,255,0.09)',
          }}
        />
      ))}
    </div>
  );
};
