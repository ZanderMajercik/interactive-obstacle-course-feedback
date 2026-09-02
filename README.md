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

Search the source for `TODO` — the following still need real URLs:

- Paper PDF, SIGGRAPH Asia, video and code buttons in the hero (currently `href="#"`)
- The supplemental video embed (the `Video` section is commented out)
- The BibTeX entry's venue/volume/DOI (the hero venue line is set to SIGGRAPH Asia 2026)
- Optional: a Google Analytics tag in `<head>`

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
