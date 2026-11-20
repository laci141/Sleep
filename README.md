# Sleep 2026

**Live: https://sleep-5dc.pages.dev/**

Magyar nyelvű leírás: [README.hu.md](README.hu.md)

## What it is

An interactive sleep-science explainer in 4 languages (hu, en, de, ro). The page is titled "Sleep 2026" and is organised as a mind map that links to these sections:

- Mind map
- Sleep cycle
- Circadian rhythm
- Brain cleaning
- Why it matters
- Better sleep
- Evening relaxation
- Tea, food, vitamins

## What is inside

- Animated hypnogram of one night's sleep stages
- Simulated EEG waves with a selectable time window
- Circadian curves (melatonin and cortisol) with a draggable time cursor
- Animated glymphatic "brain cleaning" model on a canvas, with an awake / asleep toggle
- Evidence-level badges and a source list that states what each source examined and how strong the evidence is
- 4-7-8 breathing, progressive muscle relaxation and a body scan
- Live-generated background sound (brown noise, rain, deep hum, waves) with volume controls and a sleep timer

## Honest notes

- The animations are illustrative models, not measurements. The page labels them as such ("Illustrative model").
- The page is educational content, not medical advice.

## Run locally

Open `index.html` in a browser (it works from `file://`), or serve the folder with any static server. There is no build step and no npm.

## Tech

- Single static page, vanilla JavaScript
- SVG and Canvas for the diagrams and animations
- Web Audio API for the background sound
- Language files in `lang/`
- Google Fonts is the only external request
- Hosted as a static site on Cloudflare Pages (the live URL is a pages.dev address)

## Project layout

```
index.html        the page (markup, styles, scripts)
lang/             hu.js, en.js, de.js, ro.js
README.md         this file
README.hu.md      Hungarian version
LICENSE           MIT license
```

## License

MIT, see [LICENSE](LICENSE).
