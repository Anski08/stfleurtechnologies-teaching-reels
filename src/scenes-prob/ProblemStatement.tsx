import React from 'react';
import {body} from '../fonts';
import {ramp, rise} from './anim';
import {BLUE, INK, RED} from './theme';

/**
 * The problem itself, stated in full before anything else happens.
 *
 * Both cuts open with this identical block. Nothing - not the hook, not the
 * wrong answer - appears before the student knows what is being asked. It also
 * keeps the A/B honest: the two cuts present the problem the same way, so the
 * only thing that varies is what follows it.
 *
 * Kept to three short lines that each fit on one row at 1080px wide. An earlier
 * wordier version wrapped to five lines and collided with the bag beneath it -
 * on a phone, a problem statement that needs five lines is one nobody reads.
 */
export const ProblemStatement: React.FC<{
  frame: number;
  /** Frame the first line starts on. Each later line follows 16 frames after. */
  from?: number;
  top?: number;
  fontSize?: number;
}> = ({frame, from = 0, top = 248, fontSize = 54}) => {
  const line = (i: number) => {
    const at = from + i * 16;
    return {
      opacity: rise(frame, at, at + 20),
      translate: `0px ${ramp(frame, at, at + 20, 18, 0)}px`,
    };
  };

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left: 76,
        right: 76,
        textAlign: 'center',
        fontFamily: body,
        fontSize,
        fontWeight: 800,
        color: INK,
        lineHeight: 1.3,
      }}
    >
      <div style={line(0)}>
        <span style={{color: RED}}>3 red</span> marbles,{' '}
        <span style={{color: BLUE}}>2 blue</span> marbles.
      </div>
      <div style={{...line(1), marginTop: 10}}>
        Take out 2 — <span style={{color: RED}}>no putting back.</span>
      </div>
      <div style={{...line(2), marginTop: 14}}>
        Chance of <span style={{color: RED}}>1 red</span> and{' '}
        <span style={{color: BLUE}}>1 blue</span>?
      </div>
    </div>
  );
};
