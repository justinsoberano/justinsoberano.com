const BASE_BACKGROUND = {
  animationType: '3drotate',
  timeScale: 0.2,
  height: 7.3,
  baseWidth: 9.7,
  scale: 3,
  colorFrequency: 2.2,
  bloom: 1.0,
  saturation: 2.0,
  pixelSize: 20,
};

export const DARK_BACKGROUND = {
  ...BASE_BACKGROUND,
  hueShift: 0,
  noise: 0,
  glow: 1.8,
};

export const LIGHT_BACKGROUND = {
  ...BASE_BACKGROUND,
  hueShift: 2.9,
  noise: 0.04,
  glow: 1.45,
};
