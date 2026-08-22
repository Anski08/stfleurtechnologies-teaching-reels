import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BarModel} from '../components/BarModel';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const V2AddUp: React.FC = () => {
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
        <span style={{color: '#FDE047'}}>STEP 3</span>
        <br />
        Slide them together.
      </Interactive.Div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 42}}>
        <Interactive.Div
          name="Three sixths bar"
          style={{
            opacity: interpolate(frame, [6, 20], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <BarModel parts={6} filled={3} fill="#22D3EE" height={112} />
        </Interactive.Div>

        <Interactive.Div
          name="Two sixths bar"
          style={{
            opacity: interpolate(frame, [24, 38], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <BarModel parts={6} filled={2} fill="#FDE047" height={112} />
        </Interactive.Div>

        <Interactive.Div
          name="Combined bar"
          style={{
            opacity: interpolate(frame, [58, 74], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [58, 82], [0.78, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <BarModel parts={6} filled={5} fill="#34D399" height={132} />
        </Interactive.Div>

        <Interactive.Div
          name="Equation"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: interpolate(frame, [96, 110], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [96, 120], [0.65, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <Fraction top="3" bottom="6" size={112} color="#FFFFFF" topColor="#67E8F9" />
          <Op size={106}>+</Op>
          <Fraction top="2" bottom="6" size={112} color="#FFFFFF" topColor="#FDE047" />
          <Op size={106}>=</Op>
          <Fraction top="5" bottom="6" size={112} color="#FFFFFF" topColor="#34D399" />
        </Interactive.Div>
      </div>

      <Img
        name="Party popper"
        src={staticFile('emoji/party.svg')}
        style={{
          position: 'absolute',
          bottom: 395,
          left: 140,
          width: 175,
          height: 175,
          rotate: '-14deg',
          scale: interpolate(frame, [122, 140], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      />

      <Img
        name="Check mark"
        src={staticFile('emoji/check.svg')}
        style={{
          position: 'absolute',
          bottom: 395,
          right: 140,
          width: 175,
          height: 175,
          rotate: '12deg',
          scale: interpolate(frame, [130, 148], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      />

      <Interactive.Div
        name="Keep bottom rule"
        style={{
          position: 'absolute',
          bottom: 300,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 66,
          fontWeight: 800,
          lineHeight: 1.25,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [150, 166], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Still sixths. Always.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
