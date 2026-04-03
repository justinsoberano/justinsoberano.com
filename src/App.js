import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/core/header/Header';
import Introduction from './components/core/introduction/Introduction';
import Experience from './components/core/experience/Experience';
import Footer from './components/core/footer/Footer';
import Involvement from './components/core/involvement/Involvement';
import Projects from './components/core/projects/Projects';
import Background from './components/misc/background/Background';

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

  return (
    <div className="layout-wrapper">
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
      <div className="container">
        <Header />
        <Introduction />
        <Experience />
        <Involvement />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
