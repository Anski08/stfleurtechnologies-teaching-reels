import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {ButterflyDiagram} from '../components/ButterflyDiagram';
import {PaperBackground} from '../components/PaperBackground';
import {body, display} from '../fonts';

/**
 * Proof of concept for v3: hand-drawn pen strokes over notebook paper,
 * with the ManyPixels teacher illustration anchoring the scene.
 */
export const V3ButterflyProof: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{fontFamily: display}}>
      <PaperBackground />

      <Interactive.Div
        name="Title"
        style={{
          position: 'absolute',
          top: 120,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 74,
          fontWeight: 800,
          color: '#1F2937',
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        The Butterfly Method
      </Interactive.Div>

      <div
        style={{
          position: 'absolute',
          top: 560,
          left: 100,
          width: 880,
          height: 620,
        }}
      >
        <ButterflyDiagram
          blueProgress={interpolate(frame, [24, 60], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          })}
          redProgress={interpolate(frame, [70, 106], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          })}
          baseProgress={interpolate(frame, [118, 150], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          })}
          showBlueResult={frame > 62}
          showRedResult={frame > 108}
          showBaseResult={frame > 152}
        />
      </div>

      <Img
        name="Teacher"
        src={staticFile('illustrations/teacher-12.png')}
        style={{
          position: 'absolute',
          bottom: 60,
          left: -40,
          width: 620,
          height: 620,
          opacity: interpolate(frame, [6, 24], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [6, 24], ['-60px 0px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Answer"
        style={{
          position: 'absolute',
          bottom: 300,
          right: 110,
          fontFamily: body,
          fontSize: 92,
          fontWeight: 800,
          color: '#0E9488',
          opacity: interpolate(frame, [162, 178], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [162, 184], [0.6, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        = 5/6
      </Interactive.Div>
    </AbsoluteFill>
  );
};
