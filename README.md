# Victory Azogor — GitHub Pages website

This site is built for GitHub Pages with Jekyll. You can publish poems by adding Markdown files to `_poems/`. No external CMS or paid service is required.

## Publish a poem from GitHub (including your phone)

1. Open your repository: `victoryazogor.github.io`.
2. Open the `_poems` folder.
3. Choose **Add file → Create new file**.
4. Name the file with a simple slug, for example `dear-time-keep-this-for-her.md`.
5. Paste this structure and replace the sample content:

```markdown
---
layout: poem
title: "Dear Time, Keep This for HER"
date: 2026-11-22
category: Poetry
excerpt: "A letter folded into the quiet hours."
---

I think I've exhausted my lines.

Well, that's a lie.

And I'm not good at telling lies.

I'd rather lie next to you...
```

6. Commit the new file to the `main` branch.
7. GitHub Pages will rebuild the site. The poem appears automatically at `/poems/dear-time-keep-this-for-her/`.

Use a unique filename for every poem. Keep blank lines between stanzas. Markdown line breaks inside a stanza can be made by ending each line with two spaces, or by writing each line as its own paragraph if you prefer extra spacing.

## Turn on poetry background music

The player is already included only on the Poems library and individual poem pages. Add your own licensed/owned instrumental audio file to:

`assets/audio/poetry-soundtrack.mp3`

The audio file is not included because you have not supplied a soundtrack. The player will work once that file is added. Visitors must press Play on mobile browsers; autoplay with sound is commonly blocked. Playback position and play state are remembered within the browsing session, but a full page navigation may briefly interrupt audio and some browsers may require another tap.

## Deploy to GitHub Pages

1. Upload the contents of this folder to the root of your repository (not the ZIP folder itself).
2. In GitHub, open **Settings → Pages**.
3. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. Wait for the Pages deployment to finish.

The configured site URL is `https://victoryazogor.github.io`.

## Replace the photos

- `assets/images/hero-studio.png` — homepage hero image.
- `assets/images/victory-portrait.png` — About portrait.

Replace these files with your own images using the same filenames, or update their paths in `index.md`.
