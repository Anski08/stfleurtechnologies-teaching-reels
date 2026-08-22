import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const V2Hook: React.FC = () => {
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
        name="Pizza"
        src={staticFile('emoji/pizza.svg')}
        style={{
          position: 'absolute',
          top: 230,
          width: 230,
          height: 230,
          rotate: interpolate(frame, [0, 26], ['-16deg', '0deg'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
          scale: interpolate(frame, [0, 22], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      />

      <Interactive.Div
        name="Wrong equation"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          scale: interpolate(frame, [10, 26], [0.6, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
          translate: interpolate(
            frame,
            [46, 50, 54, 58],
            ['0px 0px', '-16px 0px', '16px 0px', '0px 0px'],
            {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.linear,
            }
          ),
        }}
      >
        <Fraction top="1" bottom="2" size={150} color="#FFFFFF" />
        <Op size={135}>+</Op>
        <Fraction top="1" bottom="3" size={150} color="#FFFFFF" />

        <Interactive.Div
          name="Wrong answer"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: interpolate(frame, [24, 34], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <Op size={135}>=</Op>
          <div style={{position: 'relative', display: 'flex', marginLeft: 26}}>
            <Fraction top="2" bottom="5" size={150} color="#FCA5A5" />
            <Img
              name="Cross stamp"
              src={staticFile('emoji/cross.svg')}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 250,
                height: 250,
                marginTop: -125,
                marginLeft: -125,
                rotate: '-12deg',
                scale: interpolate(frame, [46, 60], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                  easing: Easing.spring({damping: 200}),
                }),
              }}
            />
          </div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Punchline"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 78,
          fontWeight: 800,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [64, 80], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [64, 80], ['0px 40px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Almost everyone
        <br />
        does this.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
