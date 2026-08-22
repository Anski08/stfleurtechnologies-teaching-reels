import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BarModel} from '../components/BarModel';
import {body} from '../fonts';

export const V2WhyWrong: React.FC = () => {
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
        name="Headline"
        style={{
          position: 'absolute',
          top: 250,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 90,
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 14], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Never add the
        <br />
        <span style={{color: '#FDE047'}}>bottom numbers.</span>
      </Interactive.Div>

      <Img
        name="Thinking face"
        src={staticFile('emoji/thinking.svg')}
        style={{
          position: 'absolute',
          top: 495,
          right: 120,
          width: 175,
          height: 175,
          scale: interpolate(frame, [16, 34], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      />

      <div style={{display: 'flex', flexDirection: 'column', gap: 70, alignItems: 'center'}}>
        <Interactive.Div
          name="One half row"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22,
            opacity: interpolate(frame, [24, 40], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [24, 40], ['-50px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <BarModel parts={2} filled={1} fill="#22D3EE" />
          <div style={{fontFamily: body, fontSize: 54, fontWeight: 800, color: '#22D3EE'}}>
            one half &mdash; big pieces
          </div>
        </Interactive.Div>

        <Interactive.Div
          name="One third row"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 22,
            opacity: interpolate(frame, [50, 66], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [50, 66], ['50px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <BarModel parts={3} filled={1} fill="#FDE047" />
          <div style={{fontFamily: body, fontSize: 54, fontWeight: 800, color: '#FDE047'}}>
            one third &mdash; smaller
          </div>
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Rule line"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.25,
          color: '#FFFFFF',
          maxWidth: 880,
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [88, 104], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        You can&apos;t add different sizes.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
