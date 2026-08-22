import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate} from 'remotion';
import {ButterflyDiagram} from '../components/ButterflyDiagram';
import {PaperBackground} from '../components/PaperBackground';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {EASE, INK, MUTED} from './theme';

const ease = Easing.bezier(...EASE);
const draw = Easing.bezier(0.4, 0, 0.2, 1);

/**
 * Shared stage for the three "draw a wing" scenes. Each scene passes the frame
 * window in which its own stroke is drawn; earlier strokes are handed in as
 * already-complete so the diagram accumulates across the cut.
 */
export const V3Stage: React.FC<{
  title: string;
  titleColor: string;
  caption: string;
  captionColor: string;
  /** Frame window [start, end] during which this scene's stroke is drawn. */
  drawFrom: number;
  drawTo: number;
  /** Which stroke this scene draws. Earlier ones render at 1, later at 0. */
  stroke: 'blue' | 'red' | 'base';
}> = ({title, titleColor, caption, captionColor, drawFrom, drawTo, stroke}) => {
  const frame = usePacedFrame();

  const progress = interpolate(frame, [drawFrom, drawTo], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: draw,
  });

  const order: Array<'blue' | 'red' | 'base'> = ['blue', 'red', 'base'];
  const index = order.indexOf(stroke);
  const valueOf = (s: 'blue' | 'red' | 'base') => {
    const i = order.indexOf(s);
    if (i < index) return 1;
    if (i > index) return 0;
    return progress;
  };

  const done = frame > drawTo + 2;

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />

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
          color: titleColor,
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
          translate: interpolate(frame, [0, 14], ['0px 24px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      >
        {title}
      </Interactive.Div>

      <div style={{position: 'absolute', top: 620, left: 100, width: 880, height: 620}}>
        <ButterflyDiagram
          blueProgress={valueOf('blue')}
          redProgress={valueOf('red')}
          baseProgress={valueOf('base')}
          showBlueResult={index > 0 || done}
          showRedResult={index > 1 || (index === 1 && done)}
          showBaseResult={index === 2 && done}
        />
      </div>

      <Interactive.Div
        name="Caption"
        style={{
          position: 'absolute',
          bottom: 430,
          left: 90,
          right: 90,
          textAlign: 'center',
          fontSize: 92,
          fontWeight: 800,
          color: captionColor,
          opacity: interpolate(frame, [drawTo, drawTo + 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
          scale: interpolate(frame, [drawTo, drawTo + 20], [0.7, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        {caption}
      </Interactive.Div>

      <Interactive.Div
        name="Step counter"
        style={{
          position: 'absolute',
          bottom: 320,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 44,
          fontWeight: 700,
          color: MUTED,
          opacity: interpolate(frame, [drawTo + 10, drawTo + 24], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ease,
          }),
        }}
      >
        Step {index + 1} of 3
      </Interactive.Div>

      <Interactive.Div
        name="Problem label"
        style={{
          position: 'absolute',
          top: 400,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 46,
          fontWeight: 700,
          color: INK,
          opacity: 0.55,
        }}
      >
        1/2 + 1/3 = ?
      </Interactive.Div>
    </AbsoluteFill>
  );
};
