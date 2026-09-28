# Providing Rapid Design Feedback for 3D Obstacle Course Games Using Constrained Solvability Queries

Project website for the paper by Zander Majercik, Sharon Zhang, William Wang, Tejan Karmali,
Fangjun Zhou, Yucheng Yuan, Jean-Peic Chou, Maneesh Agrawala and Kayvon Fatahalian
(Stanford University, Roblox).

## Layout

```
index.html                    the whole page
static/css/index.css          project styles (Bulma + nerfies base, project additions at the bottom)
static/js/index.js            navbar burger, carousel and slider init
static/images/                figures exported from the paper
static/images/obstacles/      carousel screenshots
```

## Figures

Images under `static/images/` are exported from the LaTeX sources with `pdftoppm`, e.g.

```bash
pdftoppm -png -r 200 -singlefile <paper>/figuresNew/teaserBigOne.pdf static/images/teaser
```

The paper sources are **not** part of this repository. Clone them alongside it if you need to
re-export a figure; `.gitignore` keeps the clone out of version control.

## Before publishing

Search the source for `TODO`. Outstanding:

- **`static/pdfs/supplement.pdf` is the anonymous review build** — it says
  "ANONYMOUS AUTHOR(S)", carries "SUBMISSION ID: 2451", and has review line numbers.
  Replace it with a camera-ready export before this goes public.
- **Code button** is a non-interactive "Code (coming soon)" span. Turn it back into an
  `<a href="...">` when the code is released.
- The BibTeX entry still has no venue/volume/DOI.
- Optional: a Google Analytics tag in `<head>`.

## Video

`static/videos/supplemental.mp4` is a web encode (H.264, `+faststart`, ~43 MB) of the
post-submission master. Regenerate with:

```bash
ffmpeg -i <master>.mov -c:v libx264 -crf 24 -preset medium -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 128k static/videos/supplemental-v2.mp4
```

Masters are gitignored (`*.mov`) — they exceed GitHub's 100 MB file limit.

**Bump the `-vN` suffix whenever you replace the video.** Browsers cache it aggressively;
reusing the filename means returning visitors keep seeing the old cut.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Credits

This website borrows its design and source code from the
[Nerfies](https://nerfies.github.io) project page
([source](https://github.com/nerfies/nerfies.github.io)), licensed under
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
