import { DAY_PHASES, DARK_BACKGROUND } from '../config/background';
import { getDayPalette, getLocalMinutes, resolveBackgroundSettings } from './dayPalette';

test('each local-clock landmark reaches its configured palette', () => {
  for (const phase of DAY_PHASES) {
    expect(getDayPalette(phase.minute, DAY_PHASES).colors).toEqual(phase.colors);
  }
});

test('colors blend between landmarks instead of switching abruptly', () => {
  const phases = [
    { name: 'Midnight', minute: 0, colors: ['#000000', '#ff0000', '#0000ff'] },
    { name: 'Noon', minute: 720, colors: ['#ffffff', '#0000ff', '#ff0000'] },
  ];
  expect(getDayPalette(360, phases).colors).toEqual(['#808080', '#800080', '#800080']);
  expect(getDayPalette(1080, phases).colors).toEqual(['#808080', '#800080', '#800080']);
});

test('the daily cycle stays continuous through midnight', () => {
  const midnight = DAY_PHASES[0].colors;
  expect(getDayPalette(1439.99, DAY_PHASES).colors).toEqual(midnight);
  expect(getDayPalette(1440, DAY_PHASES).colors).toEqual(midnight);
  expect(getDayPalette(0.01, DAY_PHASES).colors).toEqual(midnight);
  expect(getDayPalette(-1, DAY_PHASES)).toEqual(getDayPalette(1439, DAY_PHASES));
  expect(getDayPalette(2880 + 390, DAY_PHASES).colors).toEqual(DAY_PHASES[2].colors);
});

test('uses local hours and minutes, including fractional minutes for blending', () => {
  const localDate = new Date(2026, 8, 27, 6, 30, 30);
  expect(getLocalMinutes(localDate)).toBe(390.5);
});

test('automatic colors retain appearance settings and manual palettes stay fixed', () => {
  const preset = { ...DARK_BACKGROUND, glow: 2, brightness: 0.8 };
  const noon = resolveBackgroundSettings(preset, 720);
  expect(noon.colors).toEqual(DAY_PHASES.find(phase => phase.name === 'Noon').colors);
  expect(noon.glow).toBe(2);
  expect(noon.brightness).toBe(0.8);
  const manual = { ...preset, colorMode: 'manual', useCustomColors: false };
  expect(resolveBackgroundSettings(manual, 720)).toBe(manual);
  expect(resolveBackgroundSettings(manual, 0)).toBe(manual);
});
