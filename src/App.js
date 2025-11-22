import './App.css';
import Header from './components/core/header/Header';
import Introduction from './components/core/introduction/Introduction';
import Experience from './components/core/experience/Experience';
import Footer from './components/core/footer/Footer';
import Involvement from './components/core/involvement/Involvement';
import Projects from './components/core/projects/Projects';

function App() {
  return (
    <div className="container">
      <Header />
      <Introduction />
      <Experience />
      <Involvement />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
