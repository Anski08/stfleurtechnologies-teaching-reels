import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {body, display} from '../fonts';

const Step: React.FC<{num: string; text: string; from: number}> = ({num, text, from}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 34,
        opacity: interpolate(frame, [from, from + 14], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [from, from + 14], ['-40px 0px', '0px 0px'], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <div
        style={{
          width: 92,
          height: 92,
          borderRadius: 999,
          backgroundColor: '#22D3EE',
          color: '#1E1B4B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: display,
          fontSize: 52,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div style={{fontFamily: body, fontSize: 60, fontWeight: 800, color: '#FFFFFF'}}>{text}</div>
    </div>
  );
};

export const S7Recap: React.FC = () => {
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
        name="Recap headline"
        style={{
          position: 'absolute',
          top: 230,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 86,
          fontWeight: 800,
          color: '#FFFFFF',
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Every single time:
      </Interactive.Div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 44,
          marginBottom: 90,
        }}
      >
        <Step num="1" text="Make the bottoms match" from={18} />
        <Step num="2" text="Add the tops" from={40} />
        <Step num="3" text="Keep the bottom" from={62} />
      </div>

      <Interactive.Div
        name="Final equation"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: interpolate(frame, [96, 112], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [96, 120], [0.6, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        <Fraction top="1" bottom="2" size={118} color="#FFFFFF" />
        <Op size={112}>+</Op>
        <Fraction top="1" bottom="3" size={118} color="#FFFFFF" />
        <Op size={112}>=</Op>
        <Fraction top="5" bottom="6" size={118} color="#4ADE80" />
      </Interactive.Div>

      <Interactive.Div
        name="Handle"
        style={{
          position: 'absolute',
          bottom: 330,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 54,
          fontWeight: 800,
          letterSpacing: 2,
          color: '#FBBF24',
          opacity: interpolate(frame, [150, 168], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [150, 168], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        @Stfleurtechnologies
      </Interactive.Div>
    </AbsoluteFill>
  );
};
