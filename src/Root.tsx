import React from 'react';
import {Composition, Folder} from 'remotion';
import {FractionReel} from './FractionReel';
import {FractionReelV2} from './FractionReelV2';
import {S1Hook} from './scenes/S1Hook';
import {S2WhyWrong} from './scenes/S2WhyWrong';
import {S3FindLcd} from './scenes/S3FindLcd';
import {S4ConvertHalf} from './scenes/S4ConvertHalf';
import {S5ConvertThird} from './scenes/S5ConvertThird';
import {S6AddUp} from './scenes/S6AddUp';
import {S7Recap} from './scenes/S7Recap';
import {V2Hook} from './scenes-v2/V2Hook';
import {V2WhyWrong} from './scenes-v2/V2WhyWrong';
import {V2FindLcd} from './scenes-v2/V2FindLcd';
import {V2ConvertHalf} from './scenes-v2/V2ConvertHalf';
import {V2ConvertThird} from './scenes-v2/V2ConvertThird';
import {V2AddUp} from './scenes-v2/V2AddUp';
import {V2Recap} from './scenes-v2/V2Recap';
import {FractionReelV3} from './FractionReelV3';
import {FractionReelV3VO} from './FractionReelV3VO';
import {V3ButterflyProof} from './scenes-v3/V3ButterflyProof';
import {V3Hook} from './scenes-v3/V3Hook';
import {V3MeetButterfly} from './scenes-v3/V3MeetButterfly';
import {V3BlueWing} from './scenes-v3/V3BlueWing';
import {V3RedWing} from './scenes-v3/V3RedWing';
import {V3Body} from './scenes-v3/V3Body';
import {V3Answer} from './scenes-v3/V3Answer';
import {V3Recap} from './scenes-v3/V3Recap';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FractionReel"
        component={FractionReel}
        durationInFrames={1218}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="FractionReelV2"
        component={FractionReelV2}
        durationInFrames={1218}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="FractionReelV3"
        component={FractionReelV3}
        durationInFrames={1218}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="FractionReelV3VO"
        component={FractionReelV3VO}
        durationInFrames={1799}
        fps={30}
        width={1080}
        height={1920}
      />

      <Folder name="Scenes">
        <Composition
          id="S1Hook"
          component={S1Hook}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="S2WhyWrong"
          component={S2WhyWrong}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="S3FindLcd"
          component={S3FindLcd}
          durationInFrames={195}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="S4ConvertHalf"
          component={S4ConvertHalf}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="S5ConvertThird"
          component={S5ConvertThird}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="S6AddUp"
          component={S6AddUp}
          durationInFrames={210}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="S7Recap"
          component={S7Recap}
          durationInFrames={255}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>

      <Folder name="Scenes-V2">
        <Composition
          id="V2Hook"
          component={V2Hook}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V2WhyWrong"
          component={V2WhyWrong}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V2FindLcd"
          component={V2FindLcd}
          durationInFrames={195}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V2ConvertHalf"
          component={V2ConvertHalf}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V2ConvertThird"
          component={V2ConvertThird}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V2AddUp"
          component={V2AddUp}
          durationInFrames={210}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V2Recap"
          component={V2Recap}
          durationInFrames={255}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>

      <Folder name="Scenes-V3">
        <Composition
          id="V3Hook"
          component={V3Hook}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3MeetButterfly"
          component={V3MeetButterfly}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3BlueWing"
          component={V3BlueWing}
          durationInFrames={195}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3RedWing"
          component={V3RedWing}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3Body"
          component={V3Body}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3Answer"
          component={V3Answer}
          durationInFrames={210}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3Recap"
          component={V3Recap}
          durationInFrames={255}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="V3ButterflyProof"
          component={V3ButterflyProof}
          durationInFrames={200}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
    </>
  );
};
