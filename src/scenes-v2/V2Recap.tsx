import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BarModel} from '../components/BarModel';
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
        gap: 32,
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
          width: 88,
          height: 88,
          borderRadius: 999,
          backgroundColor: '#FDE047',
          color: '#4C1D95',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: display,
          fontSize: 50,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div style={{fontFamily: body, fontSize: 58, fontWeight: 800, color: '#FFFFFF'}}>{text}</div>
    </div>
  );
};

export const V2Recap: React.FC = () => {
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
      <Img
        name="Nerd face"
        src={staticFile('emoji/nerd.svg')}
        style={{
          position: 'absolute',
          top: 215,
          width: 180,
          height: 180,
          scale: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      />

      <Interactive.Div
        name="Recap headline"
        style={{
          position: 'absolute',
          top: 410,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 82,
          fontWeight: 800,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [10, 24], [0, 1], {
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
          gap: 38,
          marginBottom: 70,
        }}
      >
        <Step num="1" text="Make the bottoms match" from={26} />
        <Step num="2" text="Add the tops" from={48} />
        <Step num="3" text="Keep the bottom" from={70} />
      </div>

      <Interactive.Div
        name="Answer bar"
        style={{
          marginBottom: 40,
          opacity: interpolate(frame, [98, 114], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <BarModel parts={6} filled={5} fill="#34D399" height={104} />
      </Interactive.Div>

      <Interactive.Div
        name="Final equation"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: interpolate(frame, [112, 128], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [112, 136], [0.6, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        <Fraction top="1" bottom="2" size={112} color="#FFFFFF" />
        <Op size={106}>+</Op>
        <Fraction top="1" bottom="3" size={112} color="#FFFFFF" />
        <Op size={106}>=</Op>
        <Fraction top="5" bottom="6" size={112} color="#34D399" />
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
          color: '#FDE047',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [156, 174], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [156, 174], ['0px 30px', '0px 0px'], {
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
