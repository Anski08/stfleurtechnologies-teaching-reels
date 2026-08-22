import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {V2Hook} from './scenes-v2/V2Hook';
import {V2WhyWrong} from './scenes-v2/V2WhyWrong';
import {V2FindLcd} from './scenes-v2/V2FindLcd';
import {V2ConvertHalf} from './scenes-v2/V2ConvertHalf';
import {V2ConvertThird} from './scenes-v2/V2ConvertThird';
import {V2AddUp} from './scenes-v2/V2AddUp';
import {V2Recap} from './scenes-v2/V2Recap';

/**
 * Illustrated variant. Scene durations sum to 1290 frames; six 12-frame
 * transitions overlap, so the composition is 1218 frames (40.6s at 30fps) -
 * identical to v1 so the two can be compared beat for beat.
 */
export const FractionReelV2: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={120} name="1 Hook">
        <V2Hook />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={165} name="2 Why it is wrong">
        <V2WhyWrong />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={195} name="3 Find the LCD">
        <V2FindLcd />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={180} name="4 Convert one half">
        <V2ConvertHalf />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={165} name="5 Convert one third">
        <V2ConvertThird />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={210} name="6 Add them up">
        <V2AddUp />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={255} name="7 Recap and end card">
        <V2Recap />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
