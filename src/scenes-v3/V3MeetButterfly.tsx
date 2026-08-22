import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile} from 'remotion';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {BLUE, EASE, INK, RED} from './theme';

const ease = Easing.bezier(...EASE);

/** 165 frames. Name the method and let the teacher introduce it. */
export const V3MeetButterfly: React.FC = () => {
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
          top: 260,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 96,
          fontWeight: 800,
          color: INK,
          opacity: rise(0, 16),
          scale: interpolate(frame, [0, 22], [0.82, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        The Butterfly Method
      </Interactive.Div>

      <div style={{position: 'absolute', top: 316, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
        <div style={{width: 760, height: 90, position: 'relative'}}>
          <svg width={760} height={90} viewBox="0 0 760 90">
            <path
              d="M 20 46 Q 380 92 740 40"
              fill="none"
              stroke={RED}
              strokeWidth={12}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={
                1 -
                interpolate(frame, [22, 50], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                  easing: Easing.bezier(0.4, 0, 0.2, 1),
                })
              }
            />
          </svg>
        </div>
      </div>

      <Interactive.Div
        name="Rule"
        style={{
          position: 'absolute',
          top: 520,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 60,
          fontWeight: 700,
          color: BLUE,
          opacity: rise(54, 72),
        }}
      >
        Different bottoms? No problem.
      </Interactive.Div>

      <Interactive.Div
        name="Steps"
        style={{
          position: 'absolute',
          top: 680,
          left: 130,
          right: 130,
          fontSize: 58,
          fontWeight: 700,
          color: INK,
          lineHeight: 1.8,
        }}
      >
        {['Cross-multiply one way', 'Then the other way', 'Multiply the bottoms'].map(
          (step, i) => (
            <div
              key={step}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 26,
                opacity: rise(78 + i * 20, 94 + i * 20),
                translate: interpolate(
                  frame,
                  [78 + i * 20, 94 + i * 20],
                  ['-40px 0px', '0px 0px'],
                  {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease}
                ),
              }}
            >
              <span style={{color: [BLUE, RED, '#0E9488'][i], fontSize: 66}}>{i + 1}.</span>
              {step}
            </div>
          )
        )}
      </Interactive.Div>

      <Img
        name="Teacher"
        src={staticFile('illustrations/teacher-12-trim.png')}
        style={{
          position: 'absolute',
          bottom: 40,
          left: 20,
          width: 700,
          opacity: rise(10, 30),
          translate: interpolate(frame, [10, 30], ['-60px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 520,
          right: 70,
        }}
      >
        <PenMark
          variant="arrow"
          size={230}
          strokeWidth={14}
          color={INK}
          progress={interpolate(frame, [138, 162], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          })}
        />
      </div>
    </AbsoluteFill>
  );
};
