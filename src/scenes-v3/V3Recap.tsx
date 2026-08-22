import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile} from 'remotion';
import {PaperBackground} from '../components/PaperBackground';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {AMBER, BLUE, EASE, INK, MUTED, RED, TEAL} from './theme';

const ease = Easing.bezier(...EASE);

const STEPS = [
  {color: BLUE, label: 'Blue wing', math: '1 \u00D7 3 = 3'},
  {color: RED, label: 'Red wing', math: '1 \u00D7 2 = 2'},
  {color: TEAL, label: 'Body', math: '2 \u00D7 3 = 6'},
];

/** 255 frames. Recap, the honest caveat, and the end card. */
export const V3Recap: React.FC = () => {
  const frame = usePacedFrame();

  const rise = (from: number, to: number) =>
    interpolate(frame, [from, to], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: ease,
    });

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />
      <Interactive.Div
        name="Title"
        style={{
          position: 'absolute',
          top: 240,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 88,
          fontWeight: 800,
          color: INK,
          opacity: rise(0, 14),
          scale: interpolate(frame, [0, 22], [0.85, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        Three moves. That&rsquo;s it.
      </Interactive.Div>
      <div style={{position: 'absolute', top: 400, left: 110, right: 110}}>
        {STEPS.map((step, i) => (
          <div
            key={step.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 34,
              marginBottom: 34,
              opacity: rise(20 + i * 22, 38 + i * 22),
              translate: interpolate(frame, [20 + i * 22, 38 + i * 22], ['-50px 0px', '0px 0px'], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: ease,
              }),
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 48,
                backgroundColor: step.color,
                color: '#FFFFFF',
                fontSize: 56,
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
            <div>
              <div style={{fontSize: 42, fontWeight: 700, color: MUTED}}>{step.label}</div>
              <div style={{fontSize: 62, fontWeight: 800, color: step.color}}>{step.math}</div>
            </div>
          </div>
        ))}
      </div>
      <Interactive.Div
        name="Result line"
        style={{
          position: 'absolute',
          top: 920,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 86,
          fontWeight: 800,
          color: TEAL,
          opacity: rise(96, 114),
        }}
      >
        1/2 + 1/3 = 5/6
      </Interactive.Div>
      <Interactive.Div
        name="Caveat"
        style={{
          position: 'absolute',
          top: 1060,
          left: 100,
          right: 100,
          padding: '32px 40px',
          borderRadius: 28,
          border: `5px solid ${AMBER}`,
          backgroundColor: 'rgba(245, 158, 11, 0.10)',
          fontSize: 44,
          fontWeight: 700,
          color: INK,
          lineHeight: 1.35,
          textAlign: 'center',
          opacity: rise(126, 148),
          translate: interpolate(frame, [126, 148], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      >
        Fast for a quiz &mdash; but always check if it simplifies.
        <br />
        <span style={{color: MUTED, fontSize: 40}}>1/4 + 1/6 &rarr; 10/24 &rarr; 5/12</span>
      </Interactive.Div>
      <Img
        name="Teacher"
        src={staticFile('illustrations/teacher-12-trim.png')}
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          width: 400,
          opacity: rise(160, 182),
          translate: interpolate(frame, [160, 182], ['-50px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      />
      <Interactive.Div
        name="End card"
        style={{
          position: 'absolute',
          bottom: 400,
          left: 400,
          right: 70,
          textAlign: 'right',
          opacity: rise(186, 208),
          translate: "30.1px 93.2px"
        }}
      >
        <div style={{fontSize: 52, fontWeight: 800, color: INK, lineHeight: 1.2}}>
          Save this before
          <br />
          your next test.
        </div>
        <div style={{marginTop: 22, fontSize: 46, fontWeight: 700, color: BLUE}}>
          @Stfleurtechnologies
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
