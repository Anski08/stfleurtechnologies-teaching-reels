import React from 'react';
import {V3Stage} from './V3Stage';
import {RED} from './theme';

/** 180 frames. Red wing: top of the second fraction x bottom of the first. */
export const V3RedWing: React.FC = () => (
  <V3Stage
    stroke="red"
    title="Now the red wing"
    titleColor={RED}
    caption={'1 \u00D7 2 = 2'}
    captionColor={RED}
    drawFrom={30}
    drawTo={100}
  />
);
