/**
 * Renders the reel gallery from videos.json.
 *
 * Playback source, in priority order:
 *   1. YouTube embed, when `youtubeId` is set - preferred, since embed
 *      watch time counts toward the channel.
 *   2. The MP4 attached to the GitHub Release, streamed directly.
 *
 * Adding a video is a JSON edit; no markup changes required.
 */

const RELEASE_BASE = (repo, tag) =>
  `https://github.com/${repo}/releases/download/${tag}/`;

const el = (tag, props = {}, ...kids) => {
  const node = Object.assign(document.createElement(tag), props);
  kids.flat().forEach((k) => node.append(k));
  return node;
};

const lightbox = document.getElementById('lightbox');
const lightboxInner = document.getElementById('lightboxInner');
let lastFocused = null;

function openPlayer(video, downloadUrl) {
  lastFocused = document.activeElement;
  lightboxInner.replaceChildren(
    video.youtubeId
      ? el('iframe', {
          src: `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`,
          allow: 'accelerometer; autoplay; encrypted-media; picture-in-picture',
          allowFullscreen: true,
          title: video.title,
        })
      : el('video', {
          src: downloadUrl,
          controls: true,
          autoplay: true,
          playsInline: true,
          preload: 'metadata',
          poster: video.poster,
        })
  );
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('lightboxClose').focus();
}

function closePlayer() {
  lightbox.hidden = true;
  lightboxInner.replaceChildren();
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.getElementById('lightboxClose').addEventListener('click', closePlayer);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closePlayer();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closePlayer();
});

function card(video, base) {
  const downloadUrl = base + video.file;

  const thumb = el(
    'div',
    {className: 'thumb'},
    el('img', {
      src: video.poster,
      alt: `${video.title} - ${video.subtitle}`,
      loading: 'lazy',
      width: 1080,
      height: 1920,
    }),
    el('div', {className: 'play'}, el('span')),
    video.featured ? el('div', {className: 'badge'}, 'Latest') : '',
    el('div', {className: 'duration'}, video.duration)
  );

  const button = el(
    'button',
    {className: `reel${video.featured ? ' is-featured' : ''}`, type: 'button'},
    thumb,
    el(
      'h3',
      {},
      video.title,
      el('br'),
      el('span', {className: 'sub'}, video.subtitle)
    ),
    el(
      'div',
      {className: 'meta'},
      el('span', {className: 'tag'}, video.topic),
      el('span', {className: 'tag grade'}, video.grade)
    ),
    el('p', {}, video.blurb)
  );

  button.addEventListener('click', () => openPlayer(video, downloadUrl));

  return el(
    'div',
    {style: 'display:flex;flex-direction:column;gap:.75rem'},
    button,
    el(
      'a',
      {className: 'dl', href: downloadUrl, download: '', rel: 'noopener'},
      'Download MP4'
    )
  );
}

async function init() {
  const res = await fetch('videos.json');
  const data = await res.json();
  const base = RELEASE_BASE(data.repo, data.releaseTag);

  document.title = `${data.brand} - Teaching Reels`;
  document.querySelectorAll('[data-brand], [data-brand-footer]').forEach((n) => {
    n.textContent = data.brand;
  });
  document.querySelector('[data-tagline]').textContent = data.tagline;
  document.querySelector('[data-handle]').textContent = data.handle;

  const repoUrl = `https://github.com/${data.repo}`;
  document.querySelector('[data-repo-link]').href = repoUrl;
  document.querySelectorAll('[data-releases-link]').forEach((n) => {
    n.href = `${repoUrl}/releases`;
  });

  const grid = document.getElementById('grid');
  grid.replaceChildren(...data.videos.map((v) => card(v, base)));
}

init().catch((err) => {
  console.error(err);
  document.getElementById('grid').textContent =
    'Could not load the reel catalogue.';
});
