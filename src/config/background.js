// Local-clock landmarks, rather than location-specific astronomical events.
// Keep these in ascending order, starting at midnight.
export const DAY_PHASES = [
  { name: 'Midnight', minute: 0, colors: ['#263477', '#3b469b', '#594086'] },
  { name: 'Dawn', minute: 300, colors: ['#7869ba', '#bd88b2', '#939bdb'] },
  { name: 'Sunrise', minute: 390, colors: ['#ff8566', '#ffc47b', '#ed9ba4'] },
  { name: 'Morning', minute: 540, colors: ['#6ac7d7', '#90dccc', '#bce2c0'] },
  { name: 'Noon', minute: 720, colors: ['#57c4ed', '#80dded', '#a3d8ff'] },
  { name: 'Golden hour', minute: 990, colors: ['#efb44e', '#ffd081', '#e8975c'] },
  { name: 'Sunset', minute: 1110, colors: ['#ec6d57', '#f19a68', '#ca6689'] },
  { name: 'Dusk', minute: 1200, colors: ['#7960ae', '#b579ab', '#7580bd'] },
  { name: 'Night', minute: 1320, colors: ['#324b91', '#4a5aab', '#775baf'] },
];

const BASE_BACKGROUND = {
  animationType: '3drotate',
  timeScale: 0.2,
  height: 7.3,
  baseWidth: 9.7,
  scale: 3,
  colorFrequency: 2.2,
  bloom: 1.0,
  saturation: 1.35,
  pixelSize: 20,
  colorMode: 'time',
  dayPhases: DAY_PHASES,
  useCustomColors: true,
  colors: ['#87e8ba', '#7195ff', '#f5b98a'],
  paletteMix: 1,
  brightness: 1,
  contrast: 1,
};

export const DARK_BACKGROUND = {
  ...BASE_BACKGROUND,
  saturation: 2,
  pixelSize: 25,
  paletteMix: 0.7,
  hueShift: 0,
  noise: 0,
  glow: 1.8,
};

export const LIGHT_BACKGROUND = {
  ...BASE_BACKGROUND,
  hueShift: 0,
  noise: 0.04,
  glow: 1.45,
};
