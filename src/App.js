import './App.css';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Involvement from './components/involvement/Involvement';
import Projects from './components/projects/Projects';

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
