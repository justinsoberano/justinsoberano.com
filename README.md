# justinsoberano.com

Personal portfolio — React (Create React App) + WebGL background (`ogl`).

## Run

```bash
npm install
npm run dev    # same as npm start → http://localhost:3000
npm run build  # production build into build/
```

## Time-of-day background

The background follows each visitor's local clock, blending between midnight,
dawn, sunrise, morning, noon, golden hour, sunset, dusk, and night palettes.
These are approximate clock times, not astronomical sunrise/sunset calculations;
no location access or network lookup is needed. The cycle wraps smoothly through
midnight and refreshes while the page is open, including after sleep or a timezone
change. The visitor's light/dark preference still controls the page theme.

The phase times and colors live in `DAY_PHASES` in `src/config/background.js`;
each theme's `dayPhases` can also be customized separately.

Tune saturation, pixel size, palette blend, and other shader settings in
`DARK_BACKGROUND` and `LIGHT_BACKGROUND` in the same file. Both development and
production use these presets directly. Palette updates preserve the animation.

## Where things live

| Want to… | Look in |
|---|---|
| Change copy (intro, jobs, involvement) | `src/data/profile.js` |
| Change page order / entrance timing | `SECTIONS` in `src/App.js` |
| Change theme (light/dark) | `src/hooks/useTheme.js`, tokens in `src/index.css` |
| Tune the background | `src/config/background.js` (presets), `src/components/Background/` |
| Change time-of-day colors or times | `DAY_PHASES` in `src/config/background.js` |
| Add a content section | New folder in `src/components/`, shared styles in `src/styles/sections.css` |
| SEO / link previews | `public/index.html` (keep job title in sync with `profile.js`) |

## Structure

```
src/
  App.js                # layout order + stagger delays
  index.css             # theme tokens (light :root, dark [data-theme='dark]')
  styles/sections.css   # shared section/title/copy + 768px breakpoint
  data/profile.js       # all site copy
  hooks/useTheme.js     # OS theme detection + <html data-theme> sync
  config/background.js  # WebGL presets per theme
  components/
    Header/ Introduction/ Experience/ Involvement/ Projects/ Footer/
    TimelineSection/    # generic Experience/Involvement renderer
    TimelineItem/       # one row (grid: date | name | role | location)
    Background/         # lifecycle (Background.js), GLSL (shaders.js), math (rotation.js)
```

Conventions: one folder per component (`Name.js` + `Name.css`), mobile
breakpoint `768px` everywhere, `TimelineEntry = { date, name, role, location }`.
