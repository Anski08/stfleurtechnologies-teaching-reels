import React from 'react';
import {PathStage} from './PathStage';
import {RED} from './theme';

/** 315 frames. Red first, then blue: 3/5 x 2/4 = 6/20. */
export const P3PathRed: React.FC = () => (
  <PathStage
    title="Path 1: red, then blue"
    accent={RED}
    steps={[
      {
        marbles: ['red', 'red', 'red', 'blue', 'blue'],
        ghosts: 0,
        emphasis: 'red',
        sentence: '3 of the 5 are red',
        top: 3,
        bottom: 5,
      },
      {
        marbles: ['red', 'red', 'blue', 'blue'],
        ghosts: 1,
        emphasis: 'blue',
        sentence: '2 of the 4 left are blue',
        top: 2,
        bottom: 4,
        flagDenominator: true,
      },
    ]}
    product={{top: 6, bottom: 20}}
  />
);
