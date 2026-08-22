import {loadFont as loadFredoka} from '@remotion/google-fonts/Fredoka';
import {loadFont as loadNunito} from '@remotion/google-fonts/Nunito';

export const display = loadFredoka('normal', {
  weights: ['500', '600', '700'],
  subsets: ['latin'],
}).fontFamily;

export const body = loadNunito('normal', {
  weights: ['600', '700', '800'],
  subsets: ['latin'],
}).fontFamily;
