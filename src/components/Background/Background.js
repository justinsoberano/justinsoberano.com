import { useEffect, useRef } from 'react';
import { Renderer, Triangle, Program, Mesh } from 'ogl';
import { VERTEX_SHADER, FRAGMENT_SHADER } from './shaders';
import { setMat3FromEuler, setMat3Identity } from './rotation';
import './Background.css';

const DEFAULT_OFFSET = { x: 0, y: 0 };
const DEFAULT_COLORS = ['#87e8ba', '#7195ff', '#f5b98a'];

function hexToRgb(hex) {
  return new Float32Array([1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16) / 255));
}

const Background = ({
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
  timeScale = 0.5,
  pixelSize = 1,
  saturation,
  useCustomColors = false,
  colors = DEFAULT_COLORS,
  paletteMix = 1,
  brightness = 1,
  contrast = 1,
}) => {
  const containerRef = useRef(null);
  const appearanceRef = useRef(null);
  const updateAppearanceRef = useRef(null);
  const [color1, color2, color3] = colors;

  // Update colors in place so the daily palette never restarts the animation.
  useEffect(() => {
    appearanceRef.current = {
      uGlow: Math.max(0, glow),
      uNoise: Math.max(0, noise),
      uSaturation: saturation != null ? Math.max(0, saturation) : transparent ? 1.9 : 1.4,
      uHueShift: hueShift,
      uColorFreq: Math.max(0, colorFrequency),
      uBloom: Math.max(0, bloom),
      uPixelSize: Math.max(1, pixelSize),
      uUseCustomColors: useCustomColors ? 1 : 0,
      uColor1: hexToRgb(color1),
      uColor2: hexToRgb(color2),
      uColor3: hexToRgb(color3),
      uPaletteMix: Math.max(0, Math.min(1, paletteMix)),
      uBrightness: Math.max(0, brightness),
      uContrast: Math.max(0, contrast),
    };
    updateAppearanceRef.current?.();
  }, [glow, noise, saturation, transparent, hueShift, colorFrequency, bloom, pixelSize, useCustomColors, color1, color2, color3, paletteMix, brightness, contrast]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const H = Math.max(0.001, height);
    const BW = Math.max(0.001, baseWidth);
    const BASE_HALF = BW * 0.5;
    const offX = offset?.x ?? 0;
    const offY = offset?.y ?? 0;
    const SCALE = Math.max(0.001, scale);
    const RSX = 1;
    const RSY = 1;
    const RSZ = 1;
    const TS = Math.max(0, timeScale || 1);
    const HOVSTR = Math.max(0, hoverStrength || 1);
    const INERT = Math.max(0, Math.min(1, inertia || 0.12));

    const dpr = 0.75;
    const renderer = new Renderer({
      dpr,
      alpha: transparent,
      antialias: false,
    });
    const gl = renderer.gl;
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.BLEND);

    Object.assign(gl.canvas.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      display: 'block',
      imageRendering: appearanceRef.current.uPixelSize > 1 ? 'pixelated' : 'auto',
    });
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const iResBuf = new Float32Array(2);
    const offsetPxBuf = new Float32Array(2);

    const program = new Program(gl, {
      vertex: VERTEX_SHADER,
      fragment: FRAGMENT_SHADER,
      uniforms: {
        iResolution: { value: iResBuf },
        iTime: { value: 0 },
        uHeight: { value: H },
        uBaseHalf: { value: BASE_HALF },
        uUseBaseWobble: { value: 1 },
        uRot: { value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]) },
        uOffsetPx: { value: offsetPxBuf },
        uScale: { value: SCALE },
        uCenterShift: { value: H * 0.25 },
        uInvBaseHalf: { value: 1 / BASE_HALF },
        uInvHeight: { value: 1 / H },
        uMinAxis: { value: Math.min(BASE_HALF, H) },
        uPxScale: {
          value: 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE),
        },
        uTimeScale: { value: TS },
        ...Object.fromEntries(Object.entries(appearanceRef.current).map(([name, value]) => [name, { value }])),
      },
    });
    const mesh = new Mesh(gl, { geometry, program });
    const drawFrame = () => {
      renderer.render({ scene: mesh });
    };

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h);
      iResBuf[0] = gl.drawingBufferWidth;
      iResBuf[1] = gl.drawingBufferHeight;
      offsetPxBuf[0] = offX * dpr;
      offsetPxBuf[1] = offY * dpr;
      program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE);
      drawFrame();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const rotBuf = new Float32Array(9);

    let raf = 0;
    const t0 = performance.now();
    const startRAF = () => {
      if (raf) return;
      raf = requestAnimationFrame(render);
    };
    const stopRAF = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const rnd = () => Math.random();
    const wX = (0.3 + rnd() * 0.6) * RSX;
    const wY = (0.2 + rnd() * 0.7) * RSY;
    const wZ = (0.1 + rnd() * 0.5) * RSZ;
    const phX = rnd() * Math.PI * 2;
    const phZ = rnd() * Math.PI * 2;

    let yaw = 0,
      pitch = 0,
      roll = 0;
    let targetYaw = 0,
      targetPitch = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const pointer = { x: 0, y: 0, inside: true };
    const onMove = e => {
      const ww = Math.max(1, window.innerWidth);
      const wh = Math.max(1, window.innerHeight);
      const cx = ww * 0.5;
      const cy = wh * 0.5;
      const nx = (e.clientX - cx) / (ww * 0.5);
      const ny = (e.clientY - cy) / (wh * 0.5);
      pointer.x = Math.max(-1, Math.min(1, nx));
      pointer.y = Math.max(-1, Math.min(1, ny));
      pointer.inside = true;
    };
    const onLeave = () => {
      pointer.inside = false;
    };
    const onBlur = () => {
      pointer.inside = false;
    };

    let onPointerMove = null;
    if (animationType === 'hover') {
      onPointerMove = e => {
        onMove(e);
        startRAF();
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('mouseleave', onLeave);
      window.addEventListener('blur', onBlur);
      program.uniforms.uUseBaseWobble.value = 0;
    } else if (animationType === '3drotate') {
      program.uniforms.uUseBaseWobble.value = 0;
    } else {
      program.uniforms.uUseBaseWobble.value = 1;
    }

    const render = t => {
      const time = (t - t0) * 0.001;
      program.uniforms.iTime.value = time;

      let continueRAF = true;

      if (animationType === 'hover') {
        const maxPitch = 0.6 * HOVSTR;
        const maxYaw = 0.6 * HOVSTR;
        targetYaw = (pointer.inside ? -pointer.x : 0) * maxYaw;
        targetPitch = (pointer.inside ? pointer.y : 0) * maxPitch;
        const prevYaw = yaw;
        const prevPitch = pitch;
        const prevRoll = roll;
        yaw = lerp(prevYaw, targetYaw, INERT);
        pitch = lerp(prevPitch, targetPitch, INERT);
        roll = lerp(prevRoll, 0, 0.1);
        program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);

        if (program.uniforms.uNoise.value < 1e-6) {
          const settled =
            Math.abs(yaw - targetYaw) < 1e-4 && Math.abs(pitch - targetPitch) < 1e-4 && Math.abs(roll) < 1e-4;
          if (settled) continueRAF = false;
        }
      } else if (animationType === '3drotate') {
        const tScaled = time * TS;
        yaw = tScaled * wY;
        pitch = Math.sin(tScaled * wX + phX) * 0.6;
        roll = Math.sin(tScaled * wZ + phZ) * 0.5;
        program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);
        if (TS < 1e-6) continueRAF = false;
      } else {
        program.uniforms.uRot.value = setMat3Identity(rotBuf);
        if (TS < 1e-6) continueRAF = false;
      }

      drawFrame();
      if (continueRAF) {
        raf = requestAnimationFrame(render);
      } else {
        raf = 0;
      }
    };

    updateAppearanceRef.current = () => {
      Object.entries(appearanceRef.current).forEach(([name, value]) => {
        program.uniforms[name].value = value;
      });
      gl.canvas.style.imageRendering = appearanceRef.current.uPixelSize > 1 ? 'pixelated' : 'auto';
      drawFrame();
      startRAF();
    };

    let io;
    if (suspendWhenOffscreen) {
      io = new IntersectionObserver(entries => {
        const vis = entries.some(e => e.isIntersecting);
        if (vis) startRAF();
        else stopRAF();
      });
      io.observe(container);
    }
    startRAF();

    return () => {
      updateAppearanceRef.current = null;
      stopRAF();
      ro.disconnect();
      if (animationType === 'hover') {
        if (onPointerMove) window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('mouseleave', onLeave);
        window.removeEventListener('blur', onBlur);
      }
      if (io) io.disconnect();
      if (gl.canvas.parentElement === container) container.removeChild(gl.canvas);
      geometry.remove();
      program.remove();
    };
  }, [
    height,
    baseWidth,
    animationType,
    offset?.x,
    offset?.y,
    scale,
    transparent,
    timeScale,
    hoverStrength,
    inertia,
    suspendWhenOffscreen,
  ]);

  return <div className="background-container" ref={containerRef} />;
};

export default Background;
