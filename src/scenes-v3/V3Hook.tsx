import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {EASE, INK, RED} from './theme';

const ease = Easing.bezier(...EASE);

/** 120 frames. The mistake, stamped wrong, before the viewer can scroll. */
export const V3Hook: React.FC = () => {
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
        name="Kicker"
        style={{
          position: 'absolute',
          top: 250,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 62,
          fontWeight: 700,
          color: RED,
          opacity: rise(0, 12),
        }}
      >
        Almost everyone gets this wrong
      </Interactive.Div>

      <Interactive.Div
        name="Wrong equation"
        style={{
          position: 'absolute',
          top: 720,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          scale: interpolate(frame, [6, 24], [0.7, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
          translate: interpolate(
            frame,
            [64, 68, 72, 76],
            ['0px 0px', '-14px 0px', '14px 0px', '0px 0px'],
            {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.linear}
          ),
        }}
      >
        <Fraction top="1" bottom="2" size={140} color={INK} />
        <Op size={130} color={INK}>
          +
        </Op>
        <Fraction top="1" bottom="3" size={140} color={INK} />
        <Op size={130} color={INK}>
          =
        </Op>
        <div style={{position: 'relative', display: 'flex', opacity: rise(28, 40)}}>
          <Fraction top="2" bottom="5" size={140} color="#9CA3AF" />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: -150,
              marginLeft: -150,
            }}
          >
            <PenMark
              variant="cross"
              size={300}
              strokeWidth={20}
              color={RED}
              progress={interpolate(frame, [52, 78], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: Easing.bezier(0.4, 0, 0.2, 1),
              })}
            />
          </div>
        </div>
      </Interactive.Div>

      <Img
        name="Confused student"
        src={staticFile('illustrations/neutral-face-99-trim.png')}
        style={{
          position: 'absolute',
          bottom: 90,
          right: 60,
          height: 760,
          opacity: rise(80, 98),
          translate: interpolate(frame, [80, 98], ['50px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      />

      <Interactive.Div
        name="Promise"
        style={{
          position: 'absolute',
          bottom: 430,
          left: 90,
          width: 560,
          fontSize: 76,
          fontWeight: 800,
          color: INK,
          lineHeight: 1.15,
          opacity: rise(88, 106),
          translate: interpolate(frame, [88, 106], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      >
        Here&rsquo;s the
        <br />
        10-second fix.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
