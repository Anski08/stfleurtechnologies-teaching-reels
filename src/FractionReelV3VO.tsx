import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Pace} from './pace';
import {V3Hook} from './scenes-v3/V3Hook';
import {V3MeetButterfly} from './scenes-v3/V3MeetButterfly';
import {V3BlueWing} from './scenes-v3/V3BlueWing';
import {V3RedWing} from './scenes-v3/V3RedWing';
import {V3Body} from './scenes-v3/V3Body';
import {V3Answer} from './scenes-v3/V3Answer';
import {V3Recap} from './scenes-v3/V3Recap';

/**
 * Voiceover cut of v3. Same seven scenes, same components - only the pace, the
 * sequence lengths and the transition length change.
 *
 * Two independent dials, and they fix different complaints:
 *   `pace`       - how slowly the pen draws inside a scene.
 *   TRANSITION   - how slowly one page gives way to the next.
 *
 * The first pass slowed the drawing (pace ~1.9) and it read as sluggish. The
 * real problem was the page changes, so drawing is back near native speed
 * (1.06-1.43) and the transition is 36 frames - three times the 12 of the fast
 * cut. Each scene still ends on a still hold for the narrator to land on.
 *
 * Durations 240+285+320+240+220+300+410 = 2015; six 36-frame transitions
 * overlap, so the composition is 1799 frames = 60.0s at 30fps.
 */
const TRANSITION = 36;

const SCENES = [
  {name: '1 Hook', duration: 240, pace: 1.36, node: <V3Hook />},
  {name: '2 Meet the butterfly', duration: 285, pace: 1.06, node: <V3MeetButterfly />},
  {name: '3 Blue wing', duration: 320, pace: 1.43, node: <V3BlueWing />},
  {name: '4 Red wing', duration: 240, pace: 1.16, node: <V3RedWing />},
  {name: '5 Body', duration: 220, pace: 1.14, node: <V3Body />},
  {name: '6 The answer', duration: 300, pace: 1.29, node: <V3Answer />},
  {name: '7 Recap and end card', duration: 410, pace: 1.28, node: <V3Recap />},
];

const PRESENTATIONS = [
  slide({direction: 'from-right'}),
  fade(),
  fade(),
  fade(),
  fade(),
  slide({direction: 'from-right'}),
];

export const FractionReelV3VO: React.FC = () => {
  return (
    <TransitionSeries>
      {SCENES.map((scene, i) => (
        <React.Fragment key={scene.name}>
          <TransitionSeries.Sequence durationInFrames={scene.duration} name={scene.name}>
            <Pace value={scene.pace}>{scene.node}</Pace>
          </TransitionSeries.Sequence>
          {i < PRESENTATIONS.length ? (
            <TransitionSeries.Transition
              presentation={PRESENTATIONS[i]}
              timing={linearTiming({durationInFrames: TRANSITION})}
            />
          ) : null}
        </React.Fragment>
      ))}
    </TransitionSeries>
  );
};
