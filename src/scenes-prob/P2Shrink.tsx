import React from 'react';
import {AbsoluteFill, Interactive} from 'remotion';
import {BAG_BOTTOM_ROW_Y, BAG_LAST_SLOT_X, MarbleBag, MarbleColour, MarbleDot} from '../components/Marble';
import {PaperBackground} from '../components/PaperBackground';
import {PenMark} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {pop, ramp, rise, stroke} from './anim';
import {INK, MUTED, RED} from './theme';
import {QuestionBanner} from './QuestionText';

const ALL: MarbleColour[] = ['red', 'red', 'red', 'blue', 'blue'];

// Bag placement. Scale is 320/400 = 0.8 against the component's 400x470 viewBox.
const BAG_LEFT = 380;
const BAG_TOP = 330;
const BAG_W = 320;
const S = BAG_W / 400;

const MARBLE = 64;
// The fifth slot in the bag's five-marble layout, in screen coordinates.
const START_X = BAG_LEFT + BAG_LAST_SLOT_X * S - MARBLE / 2;
const START_Y = BAG_TOP + BAG_BOTTOM_ROW_Y * S - MARBLE / 2;
// Clear of the mouth, before it falls.
const APEX_X = 508;
const APEX_Y = 300;
// Centre of the tray.
const REST_X = 508;
const REST_Y = 1028;

const LIFT_END = 0.36;

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;

/**
 * 405 frames. THE scene. A student who misses this gets every later step wrong,
 * so it does exactly one thing and does it slowly.
 *
 * The marble physically leaves: it lifts out of the mouth, arcs over, and drops
 * into the tray. Only once it has landed does the count change - the old 5 is
 * struck through in red pen and 4 written beside it. The student watches the
 * denominator change as an event, instead of meeting a different number later.
 */
export const P2Shrink: React.FC = () => {
  const frame = usePacedFrame();

  const t = Math.max(0, Math.min(1, (frame - 90) / 62));

  let x: number;
  let y: number;
  if (t <= LIFT_END) {
    // Out of the bag, decelerating.
    const u = t / LIFT_END;
    const e = 1 - (1 - u) * (1 - u);
    x = lerp(START_X, APEX_X, e);
    y = lerp(START_Y, APEX_Y, e);
  } else {
    // Falling into the tray, accelerating.
    const u = (t - LIFT_END) / (1 - LIFT_END);
    x = APEX_X;
    y = lerp(APEX_Y, REST_Y, Math.pow(u, 1.7));
  }

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
          fontSize: 80,
          fontWeight: 800,
          color: INK,
          opacity: rise(frame, 0, 16),
          translate: `0px ${ramp(frame, 0, 16, 24, 0)}px`,
        }}
      >
        Watch the bag.
      </Interactive.Div>

      {/* The fifth marble vanishes from the bag the instant the loose one appears. */}
      <div style={{position: 'absolute', left: BAG_LEFT, top: BAG_TOP, opacity: rise(frame, 8, 26)}}>
        <MarbleBag marbles={ALL} width={BAG_W} fadeFrom={frame >= 90 ? 4 : undefined} fadeOpacity={0} />
      </div>

      {frame >= 90 && frame < 152 ? (
        <MarbleDot size={MARBLE} colour="blue" style={{position: 'absolute', left: x, top: y}} />
      ) : null}

      {/* Count badge: 5 struck out, 4 written in. */}
      <div
        style={{
          position: 'absolute',
          top: 726,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: rise(frame, 34, 54),
        }}
      >
        <div style={{fontSize: 34, fontWeight: 800, color: MUTED, letterSpacing: 3}}>IN THE BAG</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 118, marginTop: 2}}>
          <div style={{position: 'relative'}}>
            <span style={{fontSize: 124, fontWeight: 800, color: INK, lineHeight: 1.05}}>5</span>
            <div style={{position: 'absolute', left: -42, top: -26, pointerEvents: 'none'}}>
              <PenMark variant="cross" size={166} strokeWidth={13} color={RED} progress={stroke(frame, 170, 202)} />
            </div>
          </div>
          <span
            style={{
              fontSize: 124,
              fontWeight: 800,
              color: RED,
              lineHeight: 1.05,
              opacity: rise(frame, 200, 218),
              scale: String(pop(frame, 200, 236, 0.5)),
            }}
          >
            4
          </span>
        </div>
      </div>

      {/* Tray. */}
      <div style={{position: 'absolute', top: 940, left: 300, opacity: rise(frame, 60, 82)}}>
        <svg width={480} height={220} viewBox="0 0 480 220" style={{overflow: 'visible'}}>
          <path
            d="M 30 40 L 450 40 L 410 190 Q 240 214 70 190 Z"
            fill="#FFFFFF"
            fillOpacity={0.65}
            stroke={INK}
            strokeWidth={7}
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: 226,
            left: 0,
            width: 480,
            textAlign: 'center',
            fontSize: 34,
            fontWeight: 800,
            color: MUTED,
            letterSpacing: 3,
          }}
        >
          ALREADY PICKED
        </div>
      </div>

      {frame >= 152 ? (
        <MarbleDot size={MARBLE} colour="blue" style={{position: 'absolute', left: REST_X, top: REST_Y}} />
      ) : null}

      <Interactive.Div
        name="Payoff"
        style={{
          position: 'absolute',
          top: 1268,
          left: 80,
          right: 80,
          textAlign: 'center',
          fontSize: 64,
          fontWeight: 800,
          color: INK,
          lineHeight: 1.26,
          opacity: rise(frame, 248, 272),
          translate: `0px ${ramp(frame, 248, 272, 26, 0)}px`,
        }}
      >
        It is <span style={{color: RED}}>gone.</span> So the second pick
        <br />
        comes out of <span style={{color: RED}}>4</span>, not 5.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
