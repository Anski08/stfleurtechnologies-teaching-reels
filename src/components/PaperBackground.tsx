import React from 'react';

/**
 * Notebook paper backdrop. Ruled lines and a margin rule are drawn, not
 * imported, so they stay crisp at any resolution.
 */
export const PaperBackground: React.FC<{
  lineGap?: number;
  lineColor?: string;
  paper?: string;
}> = ({lineGap = 96, lineColor = '#D7E3F4', paper = '#FDFCF7'}) => {
  return (
    <div style={{position: 'absolute', inset: 0, backgroundColor: paper, overflow: 'hidden'}}>
      {new Array(20).fill(0).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 240 + i * lineGap,
            height: 3,
            backgroundColor: lineColor,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 150,
          width: 4,
          backgroundColor: '#F7B9C4',
        }}
      />
    </div>
  );
};
