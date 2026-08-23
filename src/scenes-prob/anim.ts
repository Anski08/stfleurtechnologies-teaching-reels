import {Easing, interpolate} from 'remotion';
import {EASE} from './theme';

export const ease = Easing.bezier(...EASE);
export const drawEase = Easing.bezier(0.4, 0, 0.2, 1);

/** Fade-and-rise entrance: returns 0..1 over [from, to]. */
export const rise = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ease,
  });

/** Spring-ish scale pop from `start` to 1. */
export const pop = (frame: number, from: number, to: number, start = 0.6) =>
  interpolate(frame, [from, to], [start, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.spring({damping: 200}),
  });

/** Pen-stroke progress, linear-in-ease-out, for PenMark and pathLength shapes. */
export const stroke = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: drawEase,
  });

/** Straight numeric ramp with clamped ends. */
export const ramp = (frame: number, from: number, to: number, a: number, b: number) =>
  interpolate(frame, [from, to], [a, b], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ease,
  });
