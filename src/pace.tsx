import React, {createContext, useContext} from 'react';
import {useCurrentFrame} from 'remotion';

/**
 * Playback pace. 1 = the original silent-scroll timing. Values above 1 stretch
 * every animation in the subtree by that factor without touching a single
 * keyframe: scenes read their frame through usePacedFrame(), so dividing the
 * real frame by the pace slows strokes, entrances and holds together.
 *
 * Used to derive a voiceover-friendly cut from the same scene components.
 */
const PaceContext = createContext(1);

export const Pace: React.FC<{value: number; children: React.ReactNode}> = ({value, children}) => (
  <PaceContext.Provider value={value}>{children}</PaceContext.Provider>
);

export const usePacedFrame = () => useCurrentFrame() / useContext(PaceContext);
