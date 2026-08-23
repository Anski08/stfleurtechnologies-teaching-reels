import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Pace} from './pace';
import {P1Decode} from './scenes-prob/P1Decode';
import {P0Trap} from './scenes-prob/P0Trap';
import {P2Shrink} from './scenes-prob/P2Shrink';
import {P3PathRed} from './scenes-prob/P3PathRed';
import {P4PathBlue} from './scenes-prob/P4PathBlue';
import {P5Add} from './scenes-prob/P5Add';
import {P6Answer} from './scenes-prob/P6Answer';
import {TEAL} from './scenes-prob/theme';
import {PROB_TRANSITION} from './ProbabilityReel';

/**
 * Error-first cut. Same teaching, same order, but after the question has been
 * read it names the wrong answer out loud and then closes the loop on it.
 *
 * This is a controlled A/B against ProbabilityReel: identical opening scene,
 * identical final five scenes. The single variable is the 230-frame P0Trap
 * wedged between them, so any difference in retention or completion is
 * attributable to the hook and nothing else.
 *
 * P0Trap deliberately runs *after* P1Decode, not before it. An earlier version
 * opened cold on "most people miss this" and the viewer had no idea what "this"
 * was - a wrong answer is only interesting once you know the question.
 *
 * Durations 520+230+405+315+290+355+315 = 2430; six 36-frame transitions
 * overlap, so the composition is 2214 frames = 73.8s at 30fps. The hook costs
 * about 6.5s of runtime; that cost is the thing being tested.
 */
const SCENES = [
  {name: '1 Read the question', duration: 520, pace: 1, node: <P1Decode />},
  {name: '2 Hook: most people say 3/10', duration: 230, pace: 1, node: <P0Trap />},
  {name: '3 The bag shrinks', duration: 405, pace: 1, node: <P2Shrink />},
  {name: '4 Path 1 red first', duration: 315, pace: 1, node: <P3PathRed />},
  {name: '5 Path 2 blue first', duration: 290, pace: 1, node: <P4PathBlue />},
  {
    name: '6 Add the paths',
    duration: 355,
    pace: 1,
    node: (
      <P5Add
        callback={
          <>
            That <span style={{color: '#E11D48'}}>3/10</span> was Path 1 on its own.
            <br />
            <span style={{color: TEAL}}>3/5</span> counts both.
          </>
        }
      />
    ),
  },
  {name: '7 The answer', duration: 315, pace: 1, node: <P6Answer />},
];

const PRESENTATIONS = [
  fade(),
  slide({direction: 'from-right'}),
  fade(),
  fade(),
  fade(),
  slide({direction: 'from-right'}),
];

export const ProbabilityReelHook: React.FC = () => {
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
              timing={linearTiming({durationInFrames: PROB_TRANSITION})}
            />
          ) : null}
        </React.Fragment>
      ))}
    </TransitionSeries>
  );
};
