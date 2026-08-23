import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Pace} from './pace';
import {P1Decode} from './scenes-prob/P1Decode';
import {P2Shrink} from './scenes-prob/P2Shrink';
import {P3PathRed} from './scenes-prob/P3PathRed';
import {P4PathBlue} from './scenes-prob/P4PathBlue';
import {P5Add} from './scenes-prob/P5Add';
import {P6Answer} from './scenes-prob/P6Answer';

/**
 * Straight-teaching cut. Reads the question, decodes it, then works forward.
 *
 * Scene lengths are derived from narration word count at a uniform 2.6 words
 * per second, the rate that tested comfortable on the fraction reel, so no
 * scene feels rushed relative to its neighbours.
 *
 * Durations 520+405+315+290+355+315 = 2200; five 36-frame transitions overlap,
 * so the composition is 2020 frames = 67.3s at 30fps.
 *
 * Keep TRANSITION at 36. Page changes, not drawing speed, are what made the
 * earlier reel feel rushed - see the note in FractionReelV3VO.
 */
export const PROB_TRANSITION = 36;

const SCENES = [
  {name: '1 Read the question', duration: 520, pace: 1, node: <P1Decode />},
  {name: '2 The bag shrinks', duration: 405, pace: 1, node: <P2Shrink />},
  {name: '3 Path 1 red first', duration: 315, pace: 1, node: <P3PathRed />},
  {name: '4 Path 2 blue first', duration: 290, pace: 1, node: <P4PathBlue />},
  {name: '5 Add the paths', duration: 355, pace: 1, node: <P5Add />},
  {name: '6 The answer', duration: 315, pace: 1, node: <P6Answer />},
];

const PRESENTATIONS = [
  slide({direction: 'from-right'}),
  fade(),
  fade(),
  fade(),
  slide({direction: 'from-right'}),
];

export const ProbabilityReel: React.FC = () => {
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
