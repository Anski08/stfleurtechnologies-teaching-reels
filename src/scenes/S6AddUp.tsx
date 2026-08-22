import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const S6AddUp: React.FC = () => {
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
        name="Green flash"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#4ADE80',
          opacity: interpolate(frame, [96, 102, 120], [0, 0.22, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.linear,
          }),
        }}
      />

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
        <span style={{color: '#22D3EE'}}>STEP 3</span>
        <br />
        Add the tops only.
      </Interactive.Div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fraction top="3" bottom="6" size={140} color="#FFFFFF" topColor="#22D3EE" />
        <Op size={140}>+</Op>
        <Fraction top="2" bottom="6" size={140} color="#FFFFFF" topColor="#22D3EE" />

        <Interactive.Div
          name="Answer group"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: interpolate(frame, [84, 98], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [84, 108], [0.55, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <Op size={140}>=</Op>
          <Fraction top="5" bottom="6" size={140} color="#FFFFFF" topColor="#4ADE80" />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Top math note"
        style={{
          position: 'absolute',
          bottom: 560,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 62,
          fontWeight: 800,
          color: '#22D3EE',
          opacity: interpolate(frame, [40, 54, 84, 92], [0, 1, 1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.linear,
          }),
        }}
      >
        3 + 2 = 5
      </Interactive.Div>

      <Interactive.Div
        name="Keep bottom rule"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 70,
          fontWeight: 800,
          lineHeight: 1.25,
          maxWidth: 900,
          color: '#FFFFFF',
          opacity: interpolate(frame, [110, 126], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [110, 126], ['0px 34px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        The bottom <span style={{color: '#FBBF24'}}>never</span> changes.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
