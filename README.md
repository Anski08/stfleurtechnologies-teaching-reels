# EduLab Studio &mdash; Teaching Reels

Short-form math explainers for 4th&ndash;5th grade, generated programmatically with
[Remotion](https://remotion.dev). Every frame is React, so the videos are
diffable, reviewable, and re-renderable forever.

**Site:** https://anski08.github.io/stfleurtechnologies-teaching-reels/
**Downloads:** [Releases](../../releases) &middot; **Channel:** @Stfleurtechnologies

---

## Why this exists

A single video is a dead end. A *pipeline* that produces videos is an asset.
Change one constant and re-render the whole back catalogue; fix a typo in a
shared component and every video inherits the fix.

The current topic is **adding fractions with unlike denominators**, shipped in
four cuts so the same lesson can be A/B tested.

## The catalogue

| Cut | Length | Approach |
| --- | --- | --- |
| `FractionReel` | 40.6s | LCD method, code-drawn, deep indigo |
| `FractionReelV2` | 40.6s | LCD method with exact bar models + emoji |
| `FractionReelV3` | 40.7s | Butterfly method, animated pen on notebook paper |
| `FractionReelV3VO` | 60.0s | Butterfly method, paced for voiceover |

All are 1080&times;1920 at 30fps &mdash; vertical, for Shorts / Reels / TikTok.

## Core principle: the maths is never stock art

Every fraction model is **computed, not drawn by hand or imported**.
`PieModel` derives wedge angles from the part count, so thirds are exactly
120&deg;. `BarModel` derives widths the same way. That is the whole reason a
half and three sixths line up pixel-perfectly on screen &mdash; which is the
single most convincing frame in the v2 cut.

Illustrations are used only for character, prop, and emotional beats. If an
asset would have to represent a quantity, it gets code-drawn instead.

## Quick start

```bash
npm install
npm run studio          # interactive editor at localhost:3000
npm run render          # render the default composition
npx remotion render FractionReelV3VO out/vo.mp4
npx remotion still V3BlueWing out/frame.png --frame=130
```

### Requirements

- Node 20+
- Chrome is downloaded automatically by Remotion on first render

### Version pins &mdash; do not loosen these

Two pins in `package.json` are load-bearing:

- **Remotion is pinned to exact `4.0.509`.** The npm `latest` tag currently
  resolves to a `4.1.0-alpha`, which is missing APIs this project uses.
- **TypeScript is pinned to `~5.9.3`.** TypeScript 7 (the Go port) removes
  `ts.sys` / `ts.readConfigFile`, which `@remotion/bundler` calls directly.
  Upgrading produces `Cannot read properties of undefined (reading 'readFile')`
  at bundle time.

## Project layout

```
src/
  Root.tsx                  composition registry - every video is declared here
  FractionReel.tsx          v1  (LCD, code-drawn)
  FractionReelV2.tsx        v2  (LCD, illustrated)
  FractionReelV3.tsx        v3  (butterfly, fast cut)
  FractionReelV3VO.tsx      v3  (butterfly, voiceover cut)
  pace.tsx                  playback-pace context (see below)
  fonts.ts                  Google Font loading
  components/               shared, reusable across every video
    ButterflyDiagram.tsx    cross-multiplication loops + result bubbles
    BarModel.tsx            exact area model
    PieModel.tsx            exact circular wedges
    PenMark.tsx             hand-drawn check / cross / arrow / underline
    PaperBackground.tsx     ruled notebook paper
    Confetti.tsx            deterministic seeded particle burst
    Fraction.tsx            stacked fraction + operator
  scenes/, scenes-v2/, scenes-v3/
public/                     illustrations + emoji (see ASSET-LICENSES.md)
site/                       the GitHub Pages gallery
.github/workflows/          render + deploy automation
```

## Two techniques worth stealing

### Self-drawing strokes

Any SVG shape animates as if hand-drawn, with no path measuring:

```tsx
<ellipse
  pathLength={1}
  strokeDasharray={1}
  strokeDashoffset={1 - progress}
/>
```

Setting `pathLength={1}` normalises the path, so `progress` from 0&rarr;1 maps
directly onto how much has been drawn. Works on ellipses, paths, arrows and
underlines alike. `PenMark` extends this to multi-stroke marks by giving each
sub-path its own slice of the progress range so they draw in sequence.

### Retiming without touching keyframes

`pace.tsx` provides a React context that scenes read through `usePacedFrame()`.
Wrapping a scene in `<Pace value={1.4}>` stretches every animation inside it by
1.4&times; &mdash; no keyframe edits. This is how the 60s voiceover cut is
derived from the same components as the 40s cut.

Two independent dials, and they fix different problems:

| Dial | Controls |
| --- | --- |
| `pace` | how slowly the pen draws *inside* a scene |
| `TRANSITION` | how slowly one page gives way to the next |

Video that feels "too fast" is usually the second one, not the first.

## Timing architecture

Scene durations sum, then transitions overlap:

```
composition length = sum(scene durations) - (transition length x transition count)
```

If you change any scene duration you **must** update `durationInFrames` on that
composition in `src/Root.tsx`, or the last scene will be clipped.

## Voiceover

`VOICEOVER-SCRIPT.md` carries the narration for the 60s cut with per-scene
timecodes, word counts, and beat notes marking the exact second each stroke
starts and each bubble pops. Scene durations there are derived from word count,
so every scene lands at a uniform 2.6 words/sec.

## Automation

- **`.github/workflows/render.yml`** &mdash; renders all four compositions on
  a Linux runner. Manual trigger only (`workflow_dispatch`); it exists to prove
  the project still builds from a clean checkout, and uploads the MP4s as a
  build artifact.
- **`.github/workflows/pages.yml`** &mdash; deploys `site/` to GitHub Pages.

Every video exists as **two copies**, and they are not interchangeable:

| Copy | Location | Served as | Used for |
| --- | --- | --- | --- |
| Playback | `site/videos/*.mp4` (committed) | `video/mp4` | `<video>` in the gallery |
| Distribution | Release assets (not committed) | `application/octet-stream` + `attachment` | the Download MP4 link |

**A Release asset cannot be played in a `<video>` tag.** GitHub serves release
downloads with `Content-Type: application/octet-stream`,
`Content-Disposition: attachment` and `X-Content-Type-Options: nosniff`. The
nosniff header forbids the browser from guessing a better type, and
octet-stream is not playable, so the element fails silently or the browser
downloads the file instead. That is correct behaviour for a download link and
useless for playback.

This project shipped that bug once. The check that missed it was a range
request returning `206 Partial Content`, which was read as "streaming works."
**A 206 only proves the server supports range requests.** It says nothing about
whether the MIME type is playable. Verify playback by loading the page in a
real browser and asserting `video.readyState >= 3` and that `currentTime`
advances &mdash; not by reading response headers.

The playback copies cost ~36 MB against a 1 GB Pages limit. Replace them on
re-render rather than accumulating variants.

**Publish release assets from a local render, not from CI.**
`softprops/action-gh-release` deletes every existing asset before re-uploading;
one failed upload leaves the release incomplete. That happened on `v1.0.0` and
silently dropped `fraction-reel-v3.mp4`. Upload explicitly instead:

```bash
gh release upload v1.1.0 out/fraction-reel-v3.mp4 --clobber
```

Note that `releaseTag` in `site/videos.json` is global &mdash; bumping it means
**every** video's download link points at the new tag, so that release must
carry all of them.

## Adding a new video

1. Build scenes in `src/scenes-vN/`, reusing `components/`.
2. Compose them in `src/FractionReelVN.tsx` with a `TransitionSeries`.
3. Register the composition in `src/Root.tsx`.
4. Add an entry to `site/videos.json` and render a poster into `site/posters/`.
5. Render locally (`npm run render`), then place **both** copies:
   - `cp out/<file>.mp4 site/videos/` and commit it &mdash; this is what plays.
   - `gh release upload <tag> out/<file>.mp4 --clobber` &mdash; this is what downloads.

## Licence

Source code: MIT (see `LICENSE`).
Illustrations and emoji: third-party, see `ASSET-LICENSES.md`.
