import './styles/layout.css';
import Header from './sections/Header';
import Introduction from './sections/Introduction';
import Experience from './sections/Experience';
import Involvement from './sections/Involvement';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import Background from './background/Background';
import { useTheme } from './hooks/useTheme';

function App() {
  const theme = useTheme();

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
