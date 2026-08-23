import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile} from 'remotion';
import {Confetti} from '../components/Confetti';
import {Fraction} from '../components/Fraction';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {pop, ramp, rise, stroke} from './anim';
import {BLUE, INK, MUTED, RED, TEAL} from './theme';
import {QuestionBanner} from './QuestionText';

/**
 * 315 frames. The answer, then the two mistakes this problem is built to catch.
 * Both reminders are stated as the thing to *do*, not the thing to avoid -
 * students retain a rule better than a warning.
 */
export const P6Answer: React.FC = () => {
  const frame = usePacedFrame();

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />
      <QuestionBanner />

      {frame > 62 ? (
        <Confetti
          progress={interpolate(frame, [62, 176], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.quad),
          })}
          count={40}
          originX={540}
          originY={560}
          spread={700}
        />
      ) : null}

      <Interactive.Div
        name="Label"
        style={{
          position: 'absolute',
          top: 244,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 800,
          color: MUTED,
          letterSpacing: 4,
          opacity: rise(frame, 0, 16),
        }}
      >
        THE ANSWER
      </Interactive.Div>

      <div
        style={{
          position: 'absolute',
          top: 330,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 70,
          opacity: rise(frame, 10, 32),
          scale: String(pop(frame, 10, 52, 0.66)),
        }}
      >
        <Fraction top={3} bottom={5} size={186} color={TEAL} />
        <PenMark variant="check" size={230} strokeWidth={21} color={TEAL} progress={stroke(frame, 44, 78)} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 792,
          left: 90,
          right: 90,
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 26,
            alignItems: 'flex-start',
            opacity: rise(frame, 96, 120),
            translate: `0px ${ramp(frame, 96, 120, 24, 0)}px`,
          }}
        >
          <span style={{fontSize: 60, fontWeight: 800, color: RED, lineHeight: 1.1}}>1</span>
          <span style={{fontSize: 54, fontWeight: 800, color: INK, lineHeight: 1.24}}>
            No putting back? The bag shrinks. Second pick is out of <span style={{color: RED}}>4</span>.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 26,
            alignItems: 'flex-start',
            opacity: rise(frame, 138, 162),
            translate: `0px ${ramp(frame, 138, 162, 24, 0)}px`,
          }}
        >
          <span style={{fontSize: 60, fontWeight: 800, color: BLUE, lineHeight: 1.1}}>2</span>
          <span style={{fontSize: 54, fontWeight: 800, color: INK, lineHeight: 1.24}}>
            Two colors, <span style={{color: BLUE}}>two orders.</span> Work out both and add them.
          </span>
        </div>
      </div>

      <Img
        name="Happy student"
        src={staticFile('illustrations/smiley-face-39-trim.png')}
        style={{
          position: 'absolute',
          bottom: 24,
          right: 44,
          height: 470,
          opacity: rise(frame, 176, 200),
          translate: `0px ${ramp(frame, 176, 200, 50, 0)}px`,
        }}
      />

      <Interactive.Div
        name="Handle"
        style={{
          position: 'absolute',
          top: 1200,
          left: 90,
          width: 620,
          fontSize: 46,
          fontWeight: 800,
          color: MUTED,
          opacity: rise(frame, 208, 232),
        }}
      >
        @Stfleurtechnologies
      </Interactive.Div>
    </AbsoluteFill>
  );
};
