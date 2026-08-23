import React from 'react';
import {AbsoluteFill, Interactive} from 'remotion';
import {Fraction, Op} from '../components/Fraction';
import {MarbleColour, MarbleStrip} from '../components/Marble';
import {PaperBackground} from '../components/PaperBackground';
import {PenEllipse} from '../components/PenMark';
import {body} from '../fonts';
import {usePacedFrame} from '../pace';
import {pop, ramp, rise, stroke} from './anim';
import {INK, MUTED, RED} from './theme';
import {QuestionBanner} from './QuestionText';

export type PathStep = {
  /** Marbles still available at this point. */
  marbles: MarbleColour[];
  /** Dashed circles for marbles already removed. */
  ghosts: number;
  emphasis: MarbleColour;
  sentence: React.ReactNode;
  top: number;
  bottom: number;
  /** Draw the denominator in red - used on the second pick, where it changed. */
  flagDenominator?: boolean;
};

/**
 * Shared layout for the two path scenes. They are the same lesson twice with
 * the colours swapped, so they share one component; only the data differs.
 *
 * Each pick shows the marbles actually available at that moment, which is what
 * keeps 2/4 from looking arbitrary - the strip has four marbles in it.
 */
export const PathStage: React.FC<{
  title: string;
  accent: string;
  steps: [PathStep, PathStep];
  product: {top: number; bottom: number};
}> = ({title, accent, steps, product}) => {
  const frame = usePacedFrame();

  const renderStep = (step: PathStep, index: number, at: number) => (
    <div
      style={{
        position: 'absolute',
        top: index === 0 ? 376 : 640,
        left: 90,
        right: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: rise(frame, at, at + 20),
        translate: `0px ${ramp(frame, at, at + 20, 22, 0)}px`,
      }}
    >
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <div style={{fontSize: 32, fontWeight: 800, color: MUTED, letterSpacing: 3}}>
          {index === 0 ? 'FIRST PICK' : 'SECOND PICK'}
        </div>
        <MarbleStrip
          marbles={step.marbles}
          ghosts={step.ghosts}
          emphasis={step.emphasis}
          r={24}
          gap={16}
        />
        <div style={{fontSize: 44, fontWeight: 800, color: INK}}>{step.sentence}</div>
      </div>

      <div style={{scale: String(pop(frame, at + 10, at + 40, 0.7))}}>
        <Fraction
          top={step.top}
          bottom={step.bottom}
          size={96}
          color={INK}
          topColor={step.emphasis === 'red' ? RED : '#2563EB'}
          bottomColor={step.flagDenominator ? RED : INK}
        />
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{fontFamily: body}}>
      <PaperBackground />
      <QuestionBanner />

      <Interactive.Div
        name="Title"
        style={{
          position: 'absolute',
          top: 244,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 76,
          fontWeight: 800,
          color: accent,
          opacity: rise(frame, 0, 16),
          translate: `0px ${ramp(frame, 0, 16, 22, 0)}px`,
        }}
      >
        {title}
      </Interactive.Div>

      {renderStep(steps[0], 0, 20)}
      {renderStep(steps[1], 1, 96)}

      {/* Multiply the two picks together. */}
      <div
        style={{
          position: 'absolute',
          top: 940,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
          opacity: rise(frame, 176, 198),
          scale: String(pop(frame, 176, 214, 0.8)),
        }}
      >
        <Fraction top={steps[0].top} bottom={steps[0].bottom} size={104} color={INK} />
        <Op size={116} color={MUTED}>
          &times;
        </Op>
        <Fraction
          top={steps[1].top}
          bottom={steps[1].bottom}
          size={104}
          color={INK}
          bottomColor={RED}
        />
        <Op size={116} color={MUTED}>
          =
        </Op>
        {/* Lasso is a child of the result, so it can never drift onto the
            neighbouring operator the way a separately-positioned mark did. */}
        <div style={{position: 'relative'}}>
          <Fraction top={product.top} bottom={product.bottom} size={104} color={accent} />
          <div style={{position: 'absolute', top: -34, left: -46, pointerEvents: 'none'}}>
            <PenEllipse
              width={232}
              height={330}
              strokeWidth={10}
              color={accent}
              progress={stroke(frame, 214, 254)}
            />
          </div>
        </div>
      </div>

      <Interactive.Div
        name="Reminder"
        style={{
          position: 'absolute',
          top: 1310,
          left: 90,
          right: 90,
          textAlign: 'center',
          fontSize: 46,
          fontWeight: 700,
          color: MUTED,
          opacity: rise(frame, 236, 258),
        }}
      >
        The dashed circle is the marble that already left.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
