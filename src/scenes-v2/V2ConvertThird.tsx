import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {BarModel} from '../components/BarModel';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const V2ConvertThird: React.FC = () => {
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
        Now the other bar.
      </Interactive.Div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 46}}>
        <Interactive.Div
          name="Before bar"
          style={{
            opacity: interpolate(frame, [4, 18], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <BarModel parts={3} filled={1} fill="#FDE047" height={120} />
        </Interactive.Div>

        <Interactive.Div
          name="Times two"
          style={{
            fontFamily: body,
            fontSize: 62,
            fontWeight: 800,
            color: '#67E8F9',
            opacity: interpolate(frame, [24, 38], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [24, 42], [0.6, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          cut every piece into 2
        </Interactive.Div>

        <Interactive.Div
          name="After bar"
          style={{
            opacity: interpolate(frame, [48, 62], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [48, 70], [0.82, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <BarModel parts={6} filled={2} fill="#FDE047" height={120} />
        </Interactive.Div>

        <Interactive.Div
          name="Equation"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: interpolate(frame, [76, 90], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [76, 98], [0.7, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <Fraction top="1" bottom="3" size={116} color="#FFFFFF" />
          <Op size={110}>=</Op>
          <Fraction top="2" bottom="6" size={116} color="#FFFFFF" bottomColor="#FDE047" />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Match note"
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
          opacity: interpolate(frame, [106, 122], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Both bars are sixths now.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
