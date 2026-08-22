import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const S4ConvertHalf: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1E1B4B',
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
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span style={{color: '#22D3EE'}}>STEP 2</span>
        <br />
        Rebuild each fraction.
      </Interactive.Div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
        }}
      >
        <Fraction top="1" bottom="2" size={150} color="#FFFFFF" bottomColor="#22D3EE" />

        <Interactive.Div
          name="Times three"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22,
            fontFamily: body,
            fontSize: 64,
            fontWeight: 800,
            color: '#FBBF24',
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
          <div>&times;3</div>
          <div style={{fontSize: 80, color: '#C7D2FE'}}>&rarr;</div>
          <div>&times;3</div>
        </Interactive.Div>

        <Interactive.Div
          name="Result three sixths"
          style={{
            opacity: interpolate(frame, [52, 66], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [52, 72], [0.65, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Op size={125}>=</Op>
          <Fraction top="3" bottom="6" size={150} color="#FFFFFF" bottomColor="#FBBF24" />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Same value note"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.25,
          maxWidth: 880,
          color: '#FFFFFF',
          opacity: interpolate(frame, [88, 104], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [88, 104], ['0px 34px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Same amount.
        <br />
        <span style={{color: '#22D3EE'}}>Smaller pieces.</span>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
