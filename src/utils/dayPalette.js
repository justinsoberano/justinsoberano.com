export const MINUTES_PER_DAY = 24 * 60;

export function getLocalMinutes(date = new Date()) {
  return date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60;
}

function blendHexColors(from, to, amount) {
  const channels = [1, 3, 5].map(start => {
    const a = parseInt(from.slice(start, start + 2), 16);
    const b = parseInt(to.slice(start, start + 2), 16);
    return Math.round(a + (b - a) * amount).toString(16).padStart(2, '0');
  });
  return `#${channels.join('')}`;
}

export function getDayPalette(minutes, phases) {
  const minute = ((minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  const nextIndex = phases.findIndex(phase => phase.minute > minute);
  const from = phases[nextIndex === -1 ? phases.length - 1 : nextIndex - 1];
  const to = phases[nextIndex === -1 ? 0 : nextIndex];
  const end = nextIndex === -1 ? MINUTES_PER_DAY : to.minute;
  const progress = (minute - from.minute) / (end - from.minute);
  // Ease into each landmark and continue smoothly from night into midnight.
  const blend = progress * progress * (3 - 2 * progress);

  return {
    from,
    to,
    progress,
    colors: from.colors.map((color, index) => blendHexColors(color, to.colors[index], blend)),
  };
}

export function resolveBackgroundSettings(settings, minutes) {
  if (settings.colorMode !== 'time') return settings;
  return {
    ...settings,
    useCustomColors: true,
    colors: getDayPalette(minutes, settings.dayPhases).colors,
  };
}
