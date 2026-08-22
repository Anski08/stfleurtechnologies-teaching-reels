import React from 'react';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {S1Hook} from './scenes/S1Hook';
import {S2WhyWrong} from './scenes/S2WhyWrong';
import {S3FindLcd} from './scenes/S3FindLcd';
import {S4ConvertHalf} from './scenes/S4ConvertHalf';
import {S5ConvertThird} from './scenes/S5ConvertThird';
import {S6AddUp} from './scenes/S6AddUp';
import {S7Recap} from './scenes/S7Recap';

/**
 * Scene durations sum to 1290 frames. Six 12-frame transitions overlap,
 * so the composition is 1290 - 72 = 1218 frames (40.6s at 30fps).
 */
export const FractionReel: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={120} name="1 Hook">
        <S1Hook />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={165} name="2 Why it is wrong">
        <S2WhyWrong />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={195} name="3 Find the LCD">
        <S3FindLcd />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={180} name="4 Convert one half">
        <S4ConvertHalf />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={165} name="5 Convert one third">
        <S5ConvertThird />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({direction: 'from-right'})}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={210} name="6 Add them up">
        <S6AddUp />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 12})}
      />

      <TransitionSeries.Sequence durationInFrames={255} name="7 Recap and end card">
        <S7Recap />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
