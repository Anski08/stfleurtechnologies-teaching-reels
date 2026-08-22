import React from 'react';
import {display} from '../fonts';

/**
 * A stacked fraction: numerator over a rule over denominator.
 * Sized from a single `size` value so scenes stay visually consistent.
 */
export const Fraction: React.FC<{
  top: React.ReactNode;
  bottom: React.ReactNode;
  size?: number;
  color?: string;
  topColor?: string;
  bottomColor?: string;
}> = ({top, bottom, size = 150, color = '#FFFFFF', topColor, bottomColor}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: display,
        lineHeight: 1,
      }}
    >
      <div
        style={{
          fontSize: size,
          fontWeight: 600,
          color: topColor ?? color,
          padding: '0 12px',
        }}
      >
        {top}
      </div>
      <div
        style={{
          width: size * 1.15,
          height: Math.max(8, size * 0.08),
          backgroundColor: color,
          borderRadius: 999,
          margin: `${size * 0.11}px 0`,
        }}
      />
      <div
        style={{
          fontSize: size,
          fontWeight: 600,
          color: bottomColor ?? color,
          padding: '0 12px',
        }}
      >
        {bottom}
      </div>
    </div>
  );
};

/** A large operator or symbol sitting between fractions. */
export const Op: React.FC<{children: React.ReactNode; size?: number; color?: string}> = ({
  children,
  size = 120,
  color = '#C7D2FE',
}) => {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: 600,
        color,
        fontFamily: display,
        lineHeight: 1,
        padding: '0 8px',
      }}
    >
      {children}
    </div>
  );
};
