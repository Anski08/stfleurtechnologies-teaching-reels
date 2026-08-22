import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {body} from '../fonts';

export const S1Hook: React.FC = () => {
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
        name="Red flash"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F43F5E',
          opacity: interpolate(frame, [42, 47, 62], [0, 0.28, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.linear,
          }),
        }}
      />

      <Interactive.Div
        name="Kicker"
        style={{
          position: 'absolute',
          top: 250,
          fontFamily: body,
          fontSize: 46,
          fontWeight: 800,
          letterSpacing: 4,
          color: '#22D3EE',
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        WATCH THE MISTAKE
      </Interactive.Div>

      <Interactive.Div
        name="Wrong equation"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          scale: interpolate(frame, [2, 18], [0.6, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
          translate: interpolate(frame, [42, 46, 50, 54], ['0px 0px', '-14px 0px', '14px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.linear,
          }),
        }}
      >
        <Fraction top="1" bottom="2" size={150} color="#FFFFFF" />
        <Op size={135}>+</Op>
        <Fraction top="1" bottom="3" size={150} color="#FFFFFF" />

        <Interactive.Div
          name="Equals"
          style={{
            opacity: interpolate(frame, [20, 30], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Op size={135}>=</Op>
          <div style={{position: 'relative', display: 'flex', marginLeft: 26}}>
            <Fraction top="2" bottom="5" size={150} color="#FB7185" />

            <Interactive.Div
              name="X stroke one"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 250,
                height: 18,
                marginTop: -9,
                marginLeft: -125,
                borderRadius: 999,
                backgroundColor: '#F43F5E',
                rotate: '38deg',
                scale: interpolate(frame, [42, 52], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                  easing: Easing.spring({damping: 200}),
                }),
              }}
            />
            <Interactive.Div
              name="X stroke two"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 250,
                height: 18,
                marginTop: -9,
                marginLeft: -125,
                borderRadius: 999,
                backgroundColor: '#F43F5E',
                rotate: '-38deg',
                scale: interpolate(frame, [48, 58], [0, 1], {
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
          fontSize: 76,
          fontWeight: 800,
          color: '#FFFFFF',
          opacity: interpolate(frame, [62, 78], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [62, 78], ['0px 40px', '0px 0px'], {
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
