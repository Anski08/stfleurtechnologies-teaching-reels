import React from 'react';
import {AbsoluteFill, Interactive} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {pop, ramp, rise, stroke} from './anim';
import {BLUE, INK, MUTED, RED, TEAL} from './theme';
import {QuestionBanner} from './QuestionText';

/**
 * 355 frames. Both orders end at the same answer, so they get added, and the
 * result is simplified.
 *
 * `callback` is the one line that differs between the two cuts: the hook cut
 * uses it to close the loop on the 3/10 the video opened with.
 */
export const P5Add: React.FC<{callback?: React.ReactNode}> = ({callback}) => {
  const frame = usePacedFrame();

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />
      <QuestionBanner />

      <Interactive.Div
        name="Title"
        style={{
          position: 'absolute',
          top: 244,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 78,
          fontWeight: 800,
          color: INK,
          opacity: rise(frame, 0, 16),
          translate: `0px ${ramp(frame, 0, 16, 22, 0)}px`,
        }}
      >
        Both orders count.
      </Interactive.Div>

      <Interactive.Div
        name="Why"
        style={{
          position: 'absolute',
          top: 366,
          left: 90,
          right: 90,
          textAlign: 'center',
          fontSize: 50,
          fontWeight: 700,
          color: MUTED,
          lineHeight: 1.24,
          opacity: rise(frame, 24, 46),
        }}
      >
        The question never said which color
        <br />
        comes out first — so add both paths.
      </Interactive.Div>

      {/* 6/20 + 6/20 = 12/20 */}
      <div
        style={{
          position: 'absolute',
          top: 530,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <div style={{opacity: rise(frame, 60, 84), scale: String(pop(frame, 60, 96, 0.7))}}>
          <Fraction top={6} bottom={20} size={100} color={RED} />
        </div>
        <div style={{opacity: rise(frame, 100, 118)}}>
          <Op size={88} color={MUTED}>
            +
          </Op>
        </div>
        <div style={{opacity: rise(frame, 100, 124), scale: String(pop(frame, 100, 136, 0.7))}}>
          <Fraction top={6} bottom={20} size={100} color={BLUE} />
        </div>
        <div style={{opacity: rise(frame, 146, 164)}}>
          <Op size={88} color={MUTED}>
            =
          </Op>
        </div>
        <div style={{opacity: rise(frame, 146, 170), scale: String(pop(frame, 146, 182, 0.7))}}>
          <Fraction top={12} bottom={20} size={100} color={INK} />
        </div>
      </div>

      {/* Simplify by 4. */}
      <div
        style={{
          position: 'absolute',
          top: 900,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          opacity: rise(frame, 198, 220),
        }}
      >
        <Fraction top={12} bottom={20} size={104} color={INK} />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
          <div style={{fontSize: 40, fontWeight: 800, color: TEAL}}>&divide; 4</div>
          <PenMark variant="arrow" size={150} strokeWidth={11} color={TEAL} progress={stroke(frame, 214, 246)} />
        </div>
        <div style={{opacity: rise(frame, 252, 274), scale: String(pop(frame, 252, 292, 0.6))}}>
          <Fraction top={3} bottom={5} size={132} color={TEAL} />
        </div>
      </div>

      <Interactive.Div
        name="Callback"
        style={{
          position: 'absolute',
          top: 1300,
          left: 80,
          right: 80,
          textAlign: 'center',
          fontSize: 50,
          fontWeight: 800,
          color: INK,
          lineHeight: 1.24,
          opacity: rise(frame, 292, 316),
          translate: `0px ${ramp(frame, 292, 316, 22, 0)}px`,
        }}
      >
        {callback ?? (
          <>
            Twelve twentieths and three fifths
            <br />
            are the <span style={{color: TEAL}}>same amount.</span>
          </>
        )}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
