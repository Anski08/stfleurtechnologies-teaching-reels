import React from 'react';
import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BarModel} from '../components/BarModel';
import {body, display} from '../fonts';

const Chip: React.FC<{value: string; from: number; accent: string; highlight: boolean}> = ({
  value,
  from,
  accent,
  highlight,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 128,
        height: 128,
        borderRadius: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: display,
        fontSize: 70,
        fontWeight: 600,
        color: highlight && frame > 112 ? '#4C1D95' : '#FFFFFF',
        backgroundColor: highlight && frame > 112 ? '#FDE047' : 'rgba(255,255,255,0.12)',
        border: `5px solid ${highlight && frame > 112 ? '#FDE047' : accent}`,
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

export const V2FindLcd: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundImage: 'linear-gradient(160deg, #6D28D9 0%, #2563EB 100%)',
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
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <span style={{color: '#FDE047'}}>STEP 1</span>
        <br />
        Count by 2s and 3s.
      </Interactive.Div>

      <Img
        name="Knife"
        src={staticFile('emoji/knife.svg')}
        style={{
          position: 'absolute',
          top: 490,
          right: 120,
          width: 170,
          height: 170,
          rotate: '18deg',
          scale: interpolate(frame, [8, 26], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
          }),
        }}
      />

      <div style={{display: 'flex', flexDirection: 'column', gap: 56, alignItems: 'flex-start'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <div style={{width: 104, fontFamily: body, fontSize: 52, fontWeight: 800, color: '#67E8F9'}}>
            2s
          </div>
          <Chip value="2" from={14} accent="#67E8F9" highlight={false} />
          <Chip value="4" from={24} accent="#67E8F9" highlight={false} />
          <Chip value="6" from={34} accent="#67E8F9" highlight />
          <Chip value="8" from={44} accent="#67E8F9" highlight={false} />
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <div style={{width: 104, fontFamily: body, fontSize: 52, fontWeight: 800, color: '#FDE047'}}>
            3s
          </div>
          <Chip value="3" from={62} accent="#FDE047" highlight={false} />
          <Chip value="6" from={74} accent="#FDE047" highlight />
          <Chip value="9" from={86} accent="#FDE047" highlight={false} />
        </div>

        <Interactive.Div
          name="Six piece bar"
          style={{
            opacity: interpolate(frame, [126, 142], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [126, 148], [0.8, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 200}),
            }),
          }}
        >
          <BarModel parts={6} filled={0} fill="#FDE047" height={112} />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Match callout"
        style={{
          position: 'absolute',
          bottom: 380,
          textAlign: 'center',
          fontFamily: body,
          fontSize: 72,
          fontWeight: 800,
          lineHeight: 1.2,
          color: '#FFFFFF',
          textShadow: '0 6px 24px rgba(0,0,0,0.25)',
          opacity: interpolate(frame, [150, 166], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Cut them both into <span style={{color: '#FDE047'}}>6</span>.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
