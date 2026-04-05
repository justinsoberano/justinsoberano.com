import * as stylex from '@stylexjs/stylex';
import { useEffect, useState } from 'react';
import Header from './components/core/header/Header';
import Introduction from './components/core/introduction/Introduction';
import Experience from './components/core/experience/Experience';
import Footer from './components/core/footer/Footer';
import Involvement from './components/core/involvement/Involvement';
import Projects from './components/core/projects/Projects';
import Background from './components/misc/background/Background';

const panelShadowLift = stylex.keyframes({
  from: { boxShadow: 'none' },
  to: { boxShadow: '-28px 0 48px var(--panel-lift-shadow), 28px 0 48px var(--panel-lift-shadow)' },
});

const panelSurfaceReveal = stylex.keyframes({
  from: {
    backgroundColor: 'var(--panel-start-bg)',
    borderLeftColor: 'var(--panel-start-bg)',
    borderRightColor: 'var(--panel-start-bg)',
    backdropFilter: 'blur(0px)',
  },
  to: {
    backgroundColor: 'var(--container-bg)',
    borderLeftColor: 'var(--container-border)',
    borderRightColor: 'var(--container-border)',
    backdropFilter: 'blur(24px)',
  },
});

const contentFadeIn = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)', filter: 'blur(4px)' },
  to: { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
});

const DELAYS = ['870ms', '955ms', '1050ms', '1165ms', '1295ms', '1435ms'];

const styles = stylex.create({
  layoutWrapper: {
    position: 'relative',
    maxWidth: '768px',
    width: '100%',
    minHeight: '100vh',
  },
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    paddingTop: '64px',
    paddingBottom: '64px',
    paddingLeft: '32px',
    paddingRight: '32px',
    borderLeft: '1px solid var(--panel-start-bg)',
    borderRight: '1px solid var(--panel-start-bg)',
    backgroundColor: 'var(--panel-start-bg)',
    zIndex: 1,
    boxShadow: 'none',
    animationName: `${panelShadowLift}, ${panelSurfaceReveal}`,
    animationDuration: '700ms, 1800ms',
    animationTimingFunction: 'ease-out, cubic-bezier(0.2, 0.65, 0.25, 1)',
    animationDelay: '520ms, 1770ms',
    animationFillMode: 'both, both',
    '@media (max-width: 768px)': {
      paddingTop: '32px',
      paddingBottom: '32px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderLeft: 'none',
      borderRight: 'none',
    },
    '@media (prefers-reduced-motion: reduce)': {
      animationName: 'none',
    },
  },
  child: {
    opacity: 0,
    transform: 'translateY(10px)',
    filter: 'blur(4px)',
    animationName: contentFadeIn,
    animationDuration: '760ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'both',
    '@media (prefers-reduced-motion: reduce)': {
      animationName: 'none',
      opacity: 1,
      transform: 'none',
      filter: 'none',
    },
  },
});

const getPreferredTheme = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = event => {
      setTheme(event.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#121212' : '#f5f7fb');
    }
  }, [theme]);

  const sections = [
    <Header key="header" />,
    <Introduction key="introduction" />,
    <Experience key="experience" />,
    <Involvement key="involvement" />,
    <Projects key="projects" />,
    <Footer key="footer" />,
  ];

  return (
    <div {...stylex.props(styles.layoutWrapper)}>
      <Background
        animationType="3drotate"
        timeScale={0.2}
        height={7.3}
        baseWidth={9.7}
        scale={3}
        hueShift={theme === 'dark' ? 0 : 2.9}
        colorFrequency={1}
        noise={theme === 'dark' ? 0 : 0.04}
        glow={theme === 'dark' ? 1.75 : 1.2}
      />
      <div {...stylex.props(styles.container)}>
        {sections.map((section, i) => (
          <div
            key={section.key}
            {...stylex.props(styles.child)}
            style={{ '--content-delay': DELAYS[i], animationDelay: DELAYS[i] }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
