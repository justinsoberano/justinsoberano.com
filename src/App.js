import './App.css';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Introduction />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
