import React from 'react';
import {V3Stage} from './V3Stage';
import {TEAL} from './theme';

/** 165 frames. The body of the butterfly: the two bottoms multiplied. */
export const V3Body: React.FC = () => (
  <V3Stage
    stroke="base"
    title="The body: bottoms"
    titleColor={TEAL}
    caption={'2 \u00D7 3 = 6'}
    captionColor={TEAL}
    drawFrom={26}
    drawTo={92}
  />
);
