import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {V3Hook} from './scenes-v3/V3Hook';
import {V3MeetButterfly} from './scenes-v3/V3MeetButterfly';
import {V3BlueWing} from './scenes-v3/V3BlueWing';
import {V3RedWing} from './scenes-v3/V3RedWing';
import {V3Body} from './scenes-v3/V3Body';
import {V3Answer} from './scenes-v3/V3Answer';
import {V3Recap} from './scenes-v3/V3Recap';

/**
 * Butterfly-method variant on notebook paper. Scene durations sum to 1290
 * frames; six 12-frame transitions overlap, so the composition is 1218 frames
 * (40.6s at 30fps) - the same length as v1 and v2 for beat-for-beat comparison.
 *
 * The three wing scenes cut with a fade rather than a slide so the butterfly
 * diagram appears to stay pinned to the page while strokes accumulate on it.
 */
export const FractionReelV3: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={120} name="1 Hook">
        <V3Hook />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={165} name="2 Meet the butterfly">
        <V3MeetButterfly />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={195} name="3 Blue wing">
        <V3BlueWing />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={180} name="4 Red wing">
        <V3RedWing />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={165} name="5 Body">
        <V3Body />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={210} name="6 The answer">
        <V3Answer />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={255} name="7 Recap and end card">
        <V3Recap />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
