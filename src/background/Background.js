import { useRef } from 'react';
import { useBackgroundScene } from './useBackgroundScene';
import './Background.css';

const DEFAULT_OFFSET = { x: 0, y: 0 };

function Background({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1,
  offset = DEFAULT_OFFSET,
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5
}) {
  const containerRef = useRef(null);

  useBackgroundScene(containerRef, {
    height,
    baseWidth,
    animationType,
    glow,
    offsetX: offset?.x ?? 0,
    offsetY: offset?.y ?? 0,
    noise,
    transparent,
    scale,
    hueShift,
    colorFrequency,
    hoverStrength,
    inertia,
    bloom,
    suspendWhenOffscreen,
    timeScale
  });

  return <div className="background-container" ref={containerRef} />;
}

export default Background;
