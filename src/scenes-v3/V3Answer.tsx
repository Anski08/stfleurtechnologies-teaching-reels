import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile} from 'remotion';
import {Confetti} from '../components/Confetti';
import {Fraction} from '../components/Fraction';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {PieModel} from '../components/PieModel';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {BLUE, EASE, INK, RED, TEAL} from './theme';

const ease = Easing.bezier(...EASE);

/** 210 frames. The wings add, the body stays put, and the answer lands. */
export const V3Answer: React.FC = () => {
  const frame = usePacedFrame();

  const rise = (from: number, to: number) =>
    interpolate(frame, [from, to], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: ease,
    });

  const pop = (from: number, to: number) =>
    interpolate(frame, [from, to], [0.6, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.spring({damping: 200}),
    });

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />

      {frame > 100 ? (
        <Confetti
          progress={interpolate(frame, [100, 200], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.quad),
          })}
          count={38}
          originX={540}
          originY={760}
          spread={700}
        />
      ) : null}

      <Interactive.Div
        name="Title"
        style={{
          position: 'absolute',
          top: 250,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 84,
          fontWeight: 800,
          color: INK,
          opacity: rise(0, 14),
        }}
      >
        Wings on top, body below
      </Interactive.Div>

      <Interactive.Div
        name="Wing sum"
        style={{
          position: 'absolute',
          top: 430,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 92,
          fontWeight: 800,
          opacity: rise(16, 32),
          scale: pop(16, 40),
        }}
      >
        <span style={{color: BLUE}}>3</span>
        <span style={{color: INK}}> + </span>
        <span style={{color: RED}}>2</span>
        <span style={{color: INK}}> = 5</span>
      </Interactive.Div>

      <Interactive.Div
        name="Answer row"
        style={{
          position: 'absolute',
          top: 640,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 90,
          opacity: rise(48, 66),
          scale: pop(48, 76),
        }}
      >
        <Fraction top="5" bottom="6" size={190} color={TEAL} />
        <PieModel parts={6} filled={5} fill={TEAL} size={380} ink={INK} />
      </Interactive.Div>

      <div style={{position: 'absolute', top: 1080, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
        <PenMark
          variant="check"
          size={260}
          strokeWidth={22}
          color={TEAL}
          progress={interpolate(frame, [86, 116], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          })}
        />
      </div>

      <Img
        name="Happy student"
        src={staticFile('illustrations/smiley-face-39-trim.png')}
        style={{
          position: 'absolute',
          bottom: 70,
          right: 60,
          height: 700,
          opacity: rise(106, 126),
          translate: interpolate(frame, [106, 126], ['0px 60px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      />

      <Interactive.Div
        name="Payoff"
        style={{
          position: 'absolute',
          bottom: 430,
          left: 90,
          width: 560,
          fontSize: 80,
          fontWeight: 800,
          color: INK,
          lineHeight: 1.15,
          opacity: rise(120, 140),
          translate: interpolate(frame, [120, 140], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      >
        Not 2/5.
        <br />
        <span style={{color: TEAL}}>5/6.</span>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
