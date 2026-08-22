import React from 'react';
import {V3Stage} from './V3Stage';
import {BLUE} from './theme';

/** 195 frames. Blue wing: top of the first fraction x bottom of the second. */
export const V3BlueWing: React.FC = () => (
  <V3Stage
    stroke="blue"
    title="Blue wing first"
    titleColor={BLUE}
    caption={'1 \u00D7 3 = 3'}
    captionColor={BLUE}
    drawFrom={40}
    drawTo={110}
  />
);
