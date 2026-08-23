import React from 'react';
import {PathStage} from './PathStage';
import {BLUE} from './theme';

/** 290 frames. Blue first, then red: 2/5 x 3/4 = 6/20. Same total, other order. */
export const P4PathBlue: React.FC = () => (
  <PathStage
    title="Path 2: blue, then red"
    accent={BLUE}
    steps={[
      {
        marbles: ['red', 'red', 'red', 'blue', 'blue'],
        ghosts: 0,
        emphasis: 'blue',
        sentence: '2 of the 5 are blue',
        top: 2,
        bottom: 5,
      },
      {
        marbles: ['red', 'red', 'red', 'blue'],
        ghosts: 1,
        emphasis: 'red',
        sentence: '3 of the 4 left are red',
        top: 3,
        bottom: 4,
        flagDenominator: true,
      },
    ]}
    product={{top: 6, bottom: 20}}
  />
);
