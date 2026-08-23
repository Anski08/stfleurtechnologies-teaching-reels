import React from 'react';
import {AbsoluteFill} from 'remotion';
import {MarbleBag, MarbleColour} from '../components/Marble';
import {PaperBackground} from '../components/PaperBackground';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {pop, ramp, rise} from './anim';
import {AMBER, BLUE, INK, MUTED, RED, TEAL} from './theme';
import {QuestionText} from './QuestionText';

const ALL: MarbleColour[] = ['red', 'red', 'red', 'blue', 'blue'];

/**
 * 520 frames. Opening scene for both cuts: read the question, then take it
 * apart.
 *
 * The question is shown in full, formal wording and never leaves the frame
 * while it is being decoded. Phrases light up one at a time and each one drops
 * a plain-English line underneath, so the student watches a wall of text turn
 * into four things they can actually use.
 *
 * "without replacement" gets the slowest highlight and the strongest colour on
 * purpose - it is the only phrase in the sentence that changes the arithmetic.
 */
export const P1Decode: React.FC = () => {
  const frame = usePacedFrame();

  const marbles = Math.max(0, Math.min(5, Math.ceil((frame - 160) / 22)));

  const plain = (at: number, accent: string, text: React.ReactNode) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 16,
        opacity: rise(frame, at, at + 24),
        translate: `0px ${ramp(frame, at, at + 24, 18, 0)}px`,
      }}
    >
      <span style={{fontSize: 40, color: accent, fontWeight: 800}}>&rarr;</span>
      <span style={{fontSize: 46, fontWeight: 800, color: INK}}>{text}</span>
    </div>
  );

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />

      <div
        style={{
          position: 'absolute',
          top: 196,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 32,
          fontWeight: 800,
          color: MUTED,
          letterSpacing: 4,
          opacity: rise(frame, 0, 22),
        }}
      >
        THE QUESTION
      </div>

      <div
        style={{
          position: 'absolute',
          top: 256,
          left: 70,
          right: 70,
          opacity: rise(frame, 14, 50),
        }}
      >
        <QuestionText
          fontSize={42}
          progress={{
            red: ramp(frame, 96, 124, 0, 1),
            blue: ramp(frame, 128, 156, 0, 1),
            want: ramp(frame, 250, 278, 0, 1),
            twice: ramp(frame, 288, 314, 0, 1),
            // Slowest wipe in the scene. This is the phrase the whole video
            // exists to explain.
            norep: ramp(frame, 360, 398, 0, 1),
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 546,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 800,
          color: MUTED,
          letterSpacing: 4,
          opacity: rise(frame, 186, 210),
        }}
      >
        IN PLAIN WORDS
      </div>

      <div
        style={{
          position: 'absolute',
          top: 606,
          left: 172,
          right: 80,
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
        }}
      >
        {plain(200, TEAL, <>5 marbles in the bag</>)}
        {plain(322, AMBER, <>Pick 2, one after the other</>)}
        {plain(
          406,
          RED,
          <>
            The first one <span style={{color: RED}}>does not go back</span>
          </>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 350,
          top: 900,
          opacity: rise(frame, 150, 182),
          scale: String(pop(frame, 150, 194, 0.76)),
        }}
      >
        <MarbleBag marbles={ALL} width={380} fadeFrom={marbles} fadeOpacity={0} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 1408,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 48,
          fontWeight: 800,
          opacity: rise(frame, 262, 286),
        }}
      >
        <span style={{color: RED}}>3 red</span>
        <span style={{color: MUTED}}> + </span>
        <span style={{color: BLUE}}>2 blue</span>
        <span style={{color: MUTED}}> = </span>
        <span style={{color: INK}}>5</span>
      </div>
    </AbsoluteFill>
  );
};
