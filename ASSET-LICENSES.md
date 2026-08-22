# Third-party assets

## Noto Emoji (`public/emoji/*.svg`)

Source: https://github.com/googlefonts/noto-emoji
Copyright: Google Inc.
License: SIL Open Font License 1.1 (https://scripts.sil.org/OFL)

Commercial use is permitted and attribution is not legally required.
This notice is retained as good practice.

No other third-party assets are used. All fraction diagrams, typography and
motion are drawn programmatically in this repository.

## Fonts

Fredoka and Nunito are loaded via @remotion/google-fonts.
Both are licensed under the SIL Open Font License 1.1.

## ManyPixels Illustrations (v3)

Source: https://www.manypixels.co/gallery - downloaded manually by the user.
License: ManyPixels free license. Commercial use permitted, no attribution required.

Files in `public/illustrations/`:

| File | Use |
| --- | --- |
| teacher-12.png / teacher-12-trim.png | Teacher at blackboard, scenes 2 and 7 |
| neutral-face-99-trim.png | Confused student, scene 1 |
| smiley-face-39-trim.png | Happy student, scene 6 |
| pizza-30.png | Decorative only - 8 slices, cannot model halves/thirds/sixths |

The `-trim` variants have the decorative background blob removed and are
tight-cropped. The blob shares the character's RGB but has alpha 61 versus the
character's 255, so it was removed by dropping near-blob pixels with alpha < 130.
All fraction geometry in the videos is code-drawn, never taken from stock art.
