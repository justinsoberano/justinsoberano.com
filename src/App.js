import './App.css';
import Header from './components/core/header/Header';
import Introduction from './components/core/introduction/Introduction';
import Experience from './components/core/experience/Experience';
import Footer from './components/core/footer/Footer';
import Involvement from './components/core/involvement/Involvement';
import Projects from './components/core/projects/Projects';
import Prism from './components/misc/background/Prism';

function App() {
  return (
    <>
      <Prism
        animationType="3drotate"
        timeScale={0.2}
        height={7.3}
        baseWidth={9.7}
        scale={3}
        hueShift={0}
        colorFrequency={1}
        noise={0.2}
        glow={1}
      />
      <div className="container">
        <Header />
        <Introduction />
        <Experience />
        <Involvement />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
