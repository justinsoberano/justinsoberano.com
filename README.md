# justinsoberano.com

Personal portfolio — React (Create React App) + WebGL background (`ogl`).

## Run

```bash
npm install
npm run dev    # same as npm start → http://localhost:3000
npm run build  # production build into build/
```

## Where things live

| Want to… | Look in |
|---|---|
| Change copy (intro, jobs, involvement) | `src/data/profile.js` |
| Change page order / entrance timing | `SECTIONS` in `src/App.js` |
| Change theme (light/dark) | `src/hooks/useTheme.js`, tokens in `src/index.css` |
| Tune the background | `src/config/background.js` (presets), `src/components/Background/` |
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
