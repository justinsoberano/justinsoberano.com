import './App.css';
import Header from './components/core/header/Header';
import Introduction from './components/core/introduction/Introduction';
import Experience from './components/core/experience/Experience';
import Footer from './components/core/footer/Footer';
import Involvement from './components/core/involvement/Involvement';
import Projects from './components/core/projects/Projects';
import Background from './components/misc/background/Background';

function App() {
  return (
    <div className="layout-wrapper">
      <Background
        animationType="3drotate"
        timeScale={0.2}
        height={7.3}
        baseWidth={9.7}
        scale={3}
        hueShift={0}
        colorFrequency={1}
        noise={0}
        glow={1.75}
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
