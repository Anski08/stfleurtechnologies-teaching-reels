import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {Fraction} from '../components/Fraction';
import {body} from '../fonts';

export const S2WhyWrong: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1E1B4B',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      <Interactive.Div
        name="Headline"
        style={{
          position: 'absolute',
          top: 300,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 92,
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#FFFFFF',
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 14], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Never add the
        <br />
        <span style={{color: '#FBBF24'}}>bottom numbers.</span>
      </Interactive.Div>

      <Interactive.Div
        name="Denominator meaning"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 90,
          opacity: interpolate(frame, [26, 42], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [26, 46], [0.82, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28}}>
          <Fraction top="1" bottom="2" size={150} color="#FFFFFF" bottomColor="#22D3EE" />
          <div style={{fontFamily: body, fontSize: 48, fontWeight: 700, color: '#22D3EE'}}>
            big pieces
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28}}>
          <Fraction top="1" bottom="3" size={150} color="#FFFFFF" bottomColor="#FBBF24" />
          <div style={{fontFamily: body, fontSize: 48, fontWeight: 700, color: '#FBBF24'}}>
            small pieces
          </div>
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Rule line"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 62,
          fontWeight: 800,
          lineHeight: 1.25,
          color: '#FFFFFF',
          maxWidth: 860,
          opacity: interpolate(frame, [82, 98], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [82, 98], ['0px 36px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Different sizes can&apos;t be added.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
