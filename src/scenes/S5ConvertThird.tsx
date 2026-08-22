import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const S5ConvertThird: React.FC = () => {
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
        Now the other one.
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
        <Fraction top="1" bottom="3" size={150} color="#FFFFFF" bottomColor="#22D3EE" />

        <Interactive.Div
          name="Times two"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22,
            fontFamily: body,
            fontSize: 64,
            fontWeight: 800,
            color: '#FBBF24',
            opacity: interpolate(frame, [16, 30], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [16, 34], [0.6, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <div>&times;2</div>
          <div style={{fontSize: 80, color: '#C7D2FE'}}>&rarr;</div>
          <div>&times;2</div>
        </Interactive.Div>

        <Interactive.Div
          name="Result two sixths"
          style={{
            opacity: interpolate(frame, [42, 56], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [42, 62], [0.65, 1], {
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
          <Fraction top="2" bottom="6" size={150} color="#FFFFFF" bottomColor="#FBBF24" />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Match note"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 66,
          fontWeight: 800,
          lineHeight: 1.25,
          maxWidth: 880,
          color: '#FFFFFF',
          opacity: interpolate(frame, [78, 94], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [78, 94], ['0px 34px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Both bottoms are <span style={{color: '#FBBF24'}}>6</span> now.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
