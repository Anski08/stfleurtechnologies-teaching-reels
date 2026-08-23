import React from 'react';
import {body} from '../fonts';
import {AMBER, BLUE, INK, RED, TEAL} from './theme';

/**
 * The problem exactly as a worksheet or test would word it, plus the machinery
 * to highlight it phrase by phrase.
 *
 * Showing the formal wording matters more than it looks. A student who has only
 * ever seen "no putting back" will not recognise "without replacement" on a
 * test, and that phrase is the entire trigger for the denominator dropping from
 * 5 to 4. Decoding the sentence is the transferable skill; the arithmetic is
 * the easy part.
 *
 * Highlights are painted as a background gradient that wipes left to right
 * rather than as an overlaid pen stroke, because the target phrases sit inside
 * reflowing text and can wrap across lines. box-decoration-break: clone keeps
 * the marker looking right when they do.
 */
export type HighlightKey = 'red' | 'blue' | 'want' | 'twice' | 'norep';

const COLOUR: Record<HighlightKey, {ink: string; wash: string}> = {
  red: {ink: RED, wash: 'rgba(225, 29, 72, 0.20)'},
  blue: {ink: BLUE, wash: 'rgba(37, 99, 235, 0.20)'},
  want: {ink: TEAL, wash: 'rgba(14, 148, 136, 0.22)'},
  twice: {ink: '#B45309', wash: 'rgba(245, 158, 11, 0.34)'},
  norep: {ink: RED, wash: 'rgba(225, 29, 72, 0.32)'},
};

type Segment = {text: string; key?: HighlightKey};

export const QUESTION: Segment[] = [
  {text: 'Given a bag containing '},
  {text: '3 red marbles', key: 'red'},
  {text: ' and '},
  {text: '2 blue marbles', key: 'blue'},
  {text: ', what is the probability of selecting '},
  {text: '1 red marble and 1 blue marble', key: 'want'},
  {text: ' when '},
  {text: 'drawing twice', key: 'twice'},
  {text: ' '},
  {text: 'without replacement', key: 'norep'},
  {text: '?'},
];

export const QuestionText: React.FC<{
  /** 0..1 per phrase. 0 leaves the phrase as plain body text. */
  progress: Partial<Record<HighlightKey, number>>;
  fontSize?: number;
  lineHeight?: number;
}> = ({progress, fontSize = 42, lineHeight = 1.42}) => (
  <div
    style={{
      fontFamily: body,
      fontSize,
      lineHeight,
      fontWeight: 700,
      color: INK,
      textAlign: 'center',
    }}
  >
    {QUESTION.map((seg, i) => {
      if (!seg.key) {
        return <span key={i}>{seg.text}</span>;
      }

      const p = Math.min(1, Math.max(0, progress[seg.key] ?? 0));
      const {ink, wash} = COLOUR[seg.key];

      return (
        <span
          key={i}
          style={{
            backgroundImage: `linear-gradient(${wash}, ${wash})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 86%',
            backgroundSize: `${p * 100}% 52%`,
            // Without this the marker only paints the first line of a wrap.
            WebkitBoxDecorationBreak: 'clone',
            boxDecorationBreak: 'clone',
            color: p > 0.45 ? ink : INK,
            fontWeight: p > 0.45 ? 800 : 700,
            padding: '0 2px',
          }}
        >
          {seg.text}
        </span>
      );
    })}
  </div>
);

/**
 * The condensed question, carried at the top of every scene after the decode.
 *
 * This is what persists rather than the full sentence: at a size anyone can
 * read on a phone the original would occupy roughly 300px of every frame, and
 * shrinking it to fit would make it decoration instead of a reference. Keeping
 * the condensed line visible also rewards the work of condensing it.
 */
export const QuestionBanner: React.FC<{opacity?: number}> = ({opacity = 1}) => (
  <div
    style={{
      position: 'absolute',
      top: 118,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      opacity,
      pointerEvents: 'none',
    }}
  >
    <div
      style={{
        fontFamily: body,
        fontSize: 31,
        fontWeight: 800,
        letterSpacing: 0.4,
        color: INK,
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
        border: '3px solid rgba(31, 41, 55, 0.16)',
        borderRadius: 999,
        padding: '11px 30px',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{color: RED}}>3 red</span>
      <span style={{color: '#9CA3AF'}}> · </span>
      <span style={{color: BLUE}}>2 blue</span>
      <span style={{color: '#9CA3AF'}}> · </span>
      <span style={{color: AMBER}}>pick 2</span>
      <span style={{color: '#9CA3AF'}}> · </span>
      <span style={{color: RED}}>no putting back</span>
    </div>
  </div>
);
