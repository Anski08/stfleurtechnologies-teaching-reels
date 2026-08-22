# Voiceover script - Butterfly Method (v3 VO cut)

**Video:** `out/fraction-reel-v3-voiceover.mp4`
**Length:** 60.0s | 1799 frames @ 30fps | 1080x1920
**Audience:** 4th-5th grade
**Delivery:** warm and clear, ~2.6 words/sec. Every scene is sized to the same
2.6 w/s, so no section is tighter than another. Land each number on the beat
where its bubble pops. Each scene ends on a still hold, and the page change
itself takes a full 1.2s - carry your line through that dissolve.

---

## Scene timings

| # | Scene | In | Out | Air | Words |
|---|-------|-----|-----|-----|-------|
| 1 | Hook | 0:00.0 | 0:08.0 | 8.0s | 21 |
| 2 | Meet the butterfly | 0:06.8 | 0:16.3 | 9.5s | 25 |
| 3 | Blue wing | 0:15.1 | 0:25.8 | 10.7s | 28 |
| 4 | Red wing | 0:24.6 | 0:32.6 | 8.0s | 21 |
| 5 | Body | 0:31.4 | 0:38.7 | 7.3s | 19 |
| 6 | The answer | 0:37.5 | 0:47.5 | 10.0s | 26 |
| 7 | Recap + end card | 0:46.3 | 1:00.0 | 13.7s | 36 |

Scene "in" times overlap the previous "out" by 1.2s - that is the 36-frame page
transition. Talk straight through it; the overlap exists so a cut never lands in
the middle of a word.

---

## Script

### 1. Hook - 0:00 to 0:08

> One half plus one third.
> Lots of people say two fifths.
> **(0:02.4 - the red X draws itself)** ...but that's not right.
> Here's the ten-second fix.

*Beat notes:* the X draws from 0:02.4 to 0:03.5. Let "that's not right" land
across it. The confused student slides in at 0:03.6, and "Here's the ten-second
fix" appears on screen at 0:04.0 - say it there, then hold to the page turn.

### 2. Meet the butterfly - 0:06.8 to 0:16.3

> It's called the Butterfly Method.
> Different bottom numbers? No problem.
> Three moves. Cross-multiply one way.
> Then the other way.
> Then multiply the bottoms.

*Beat notes:* the red underline sweeps under the title 0:07.6 to 0:08.6. The
three steps slide in at 0:09.6, 0:10.3 and 0:11.0 - say each one as it lands.

### 3. Blue wing - 0:15.1 to 0:25.8

> Start with the blue wing.
> Circle the one on the left... and the three on the right.
> **(hold while the ellipse draws)**
> One times three is three.
> That's your first wing number.

*Beat notes:* the ellipse draws 0:17.0 to 0:20.3 - the shot people rewatch.
The blue "3" bubble pops at 0:20.4; say "is three" right on it. Caption lands
0:21.0, then you hold to the page turn.

### 4. Red wing - 0:24.6 to 0:32.6

> Now the red wing - going the other way.
> One times two... is two.
> Second wing done.

*Beat notes:* stroke draws 0:25.8 to 0:28.5, red "2" bubble pops at 0:28.5.

### 5. Body - 0:31.4 to 0:38.7

> Last one: the body.
> Multiply the two bottom numbers.
> Two times three is six.

*Beat notes:* the teal arc sweeps under both denominators 0:32.4 to 0:34.9, and
the "6" bubble drops at 0:35.0.

### 6. The answer - 0:37.5 to 0:47.5

> Now add your wings. Three plus two is five.
> Five goes on top. Six goes on the bottom.
> Five sixths.
> **(confetti + check mark)** Not two fifths. Five sixths.

*Beat notes:* "3 + 2 = 5" appears 0:38.2. The fraction and the pie land 0:39.6.
The green check draws 0:41.2 to 0:42.5 and confetti fires at 0:41.8. The cheering
student arrives 0:42.1 and the payoff text at 0:42.7 - let the last line sit over
the celebration.

### 7. Recap + end card - 0:46.3 to 1:00.0

> Three moves. Blue wing. Red wing. Body.
> One half plus one third equals five sixths.
> It's fast for a quiz - but always check whether your answer can simplify.
> Save this before your next test.

*Beat notes:* the three numbered rows appear at 0:47.2, 0:48.1 and 0:49.0 - one
per name. The result line lands 0:50.4. The amber caveat box fades in 0:51.7;
slow down there, it is the one line teachers will judge you on. End card 0:54.2,
then a 5s hold to the end.

---

## Recording notes

- Record dry at 48kHz mono, then mix under the video. The MP4 already carries a
  silent AAC track, so replacing the audio will not change the container.
- Leave 0.5s of room tone at the head and tail.
- If a line runs long, the fix is the `duration` value for that scene in
  `src/FractionReelV3VO.tsx` - bump it and re-render. The `pace` value controls
  how fast the drawing happens; `duration` controls how long the still hold is.
  Change `duration` first; only touch `pace` if the strokes themselves feel off.
- Remember to update `durationInFrames` on the `FractionReelV3VO` composition in
  `src/Root.tsx` if you change any scene duration:
  `total = sum(durations) - 20 * 6`.
