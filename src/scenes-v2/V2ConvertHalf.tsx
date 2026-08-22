import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {BarModel} from '../components/BarModel';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const V2ConvertHalf: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundImage: 'linear-gradient(160deg, #6D28D9 0%, #2563EB 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      <Interactive.Div
        name="Step label"
        style={{
          position: 'absolute',
          top: 250,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 88,
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span style={{color: '#FDE047'}}>STEP 2</span>
        <br />
        Same bar, more cuts.
      </Interactive.Div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 46}}>
        <Interactive.Div
          name="Before bar"
          style={{
            opacity: interpolate(frame, [8, 22], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <BarModel parts={2} filled={1} fill="#22D3EE" height={120} />
        </Interactive.Div>

        <Interactive.Div
          name="Times three"
          style={{
            fontFamily: body,
            fontSize: 62,
            fontWeight: 800,
            color: '#FDE047',
            opacity: interpolate(frame, [30, 44], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [30, 48], [0.6, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          cut every piece into 3
        </Interactive.Div>

        <Interactive.Div
          name="After bar"
          style={{
            opacity: interpolate(frame, [56, 70], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [56, 78], [0.82, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <BarModel parts={6} filled={3} fill="#22D3EE" height={120} />
        </Interactive.Div>

        <Interactive.Div
          name="Equation"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: interpolate(frame, [86, 100], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [86, 108], [0.7, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <Fraction top="1" bottom="2" size={116} color="#FFFFFF" />
          <Op size={110}>=</Op>
          <Fraction top="3" bottom="6" size={116} color="#FFFFFF" bottomColor="#FDE047" />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Same amount note"
        style={{
          position: 'absolute',
          bottom: 340,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 62,
          fontWeight: 800,
          lineHeight: 1.25,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [118, 134], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Same amount shaded.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
