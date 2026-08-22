import React from 'react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';
import {body, display} from '../fonts';

const Chip: React.FC<{
  value: string;
  from: number;
  accent: string;
  highlight: boolean;
}> = ({value, from, accent, highlight}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 148,
        height: 148,
        borderRadius: 34,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: display,
        fontSize: 80,
        fontWeight: 600,
        color: highlight && frame > 108 ? '#1E1B4B' : '#FFFFFF',
        backgroundColor: highlight && frame > 108 ? '#FBBF24' : 'rgba(255,255,255,0.08)',
        border: `5px solid ${highlight && frame > 108 ? '#FBBF24' : accent}`,
        opacity: interpolate(frame, [from, from + 10], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        scale: interpolate(frame, [from, from + 12], [0.5, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.spring({damping: 200}),
        }),
      }}
    >
      {value}
    </div>
  );
};

export const S3FindLcd: React.FC = () => {
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
        name="Step label"
        style={{
          position: 'absolute',
          top: 250,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 88,
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#FFFFFF',
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span style={{color: '#22D3EE'}}>STEP 1</span>
        <br />
        Count by 2s and 3s.
      </Interactive.Div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 70, alignItems: 'flex-start'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 26}}>
          <div
            style={{
              width: 118,
              fontFamily: body,
              fontSize: 52,
              fontWeight: 800,
              color: '#22D3EE',
            }}
          >
            2s
          </div>
          <Chip value="2" from={14} accent="#22D3EE" highlight={false} />
          <Chip value="4" from={24} accent="#22D3EE" highlight={false} />
          <Chip value="6" from={34} accent="#22D3EE" highlight />
          <Chip value="8" from={44} accent="#22D3EE" highlight={false} />
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 26}}>
          <div
            style={{
              width: 118,
              fontFamily: body,
              fontSize: 52,
              fontWeight: 800,
              color: '#FBBF24',
            }}
          >
            3s
          </div>
          <Chip value="3" from={60} accent="#FBBF24" highlight={false} />
          <Chip value="6" from={72} accent="#FBBF24" highlight />
          <Chip value="9" from={84} accent="#FBBF24" highlight={false} />
        </div>
      </div>

      <Interactive.Div
        name="Match callout"
        style={{
          position: 'absolute',
          bottom: 400,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 74,
          fontWeight: 800,
          lineHeight: 1.2,
          color: '#FFFFFF',
          opacity: interpolate(frame, [116, 132], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [116, 136], [0.7, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      >
        Both say <span style={{color: '#FBBF24'}}>6</span>.
        <br />
        That&apos;s our new bottom.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
