import React from 'react';
import {AbsoluteFill, Interactive} from 'remotion';
import {Fraction} from '../components/Fraction';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {pop, ramp, rise, stroke} from './anim';
import {INK, MUTED, RED} from './theme';
import {QuestionBanner} from './QuestionText';

/**
 * 230 frames. Hook cut only.
 *
 * Runs after the question has been read and decoded, never before - naming a
 * wrong answer to a problem the viewer has not seen yet asks them to care about
 * nothing.
 *
 * 3/10 is not a random distractor. It is exactly 3/5 x 2/4: the answer you get
 * by doing the arithmetic correctly and stopping one path early. Putting that
 * specific mistake on screen gives the next four scenes something to resolve.
 */
export const P0Trap: React.FC = () => {
  const frame = usePacedFrame();

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />
      <QuestionBanner opacity={rise(frame, 0, 18)} />

      <Interactive.Div
        name="Setup"
        style={{
          position: 'absolute',
          top: 300,
          left: 76,
          right: 76,
          textAlign: 'center',
          fontSize: 66,
          fontWeight: 800,
          color: INK,
          lineHeight: 1.24,
          opacity: rise(frame, 6, 30),
          translate: `0px ${ramp(frame, 6, 30, 22, 0)}px`,
        }}
      >
        Here is where nearly
        <br />
        everyone slips.
      </Interactive.Div>

      <div
        style={{
          position: 'absolute',
          top: 570,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          opacity: rise(frame, 44, 68),
        }}
      >
        <div style={{fontSize: 34, fontWeight: 800, color: MUTED, letterSpacing: 3}}>
          MOST PEOPLE ANSWER
        </div>
        <div style={{position: 'relative', scale: String(pop(frame, 44, 86, 0.66))}}>
          <Fraction top={3} bottom={10} size={116} color={INK} />
          <div style={{position: 'absolute', top: -22, left: -66, pointerEvents: 'none'}}>
            <PenMark variant="cross" size={300} strokeWidth={17} color={RED} progress={stroke(frame, 104, 148)} />
          </div>
        </div>
      </div>

      <Interactive.Div
        name="Kicker"
        style={{
          position: 'absolute',
          top: 1080,
          left: 76,
          right: 76,
          textAlign: 'center',
          fontSize: 60,
          fontWeight: 800,
          color: INK,
          lineHeight: 1.26,
          opacity: rise(frame, 158, 186),
          translate: `0px ${ramp(frame, 158, 186, 24, 0)}px`,
        }}
      >
        That is only <span style={{color: RED}}>half</span>
        <br />
        the answer.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
