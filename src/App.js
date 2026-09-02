import './App.css';
import './styles/sections.css';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Involvement from './components/Involvement/Involvement';
import Projects from './components/Projects/Projects';
import Background from './components/Background/Background';
import useTheme from './hooks/useTheme';
import { DARK_BACKGROUND, LIGHT_BACKGROUND } from './config/background';

const SECTIONS = [
  { key: 'header', delay: 870, render: () => <Header /> },
  { key: 'introduction', delay: 955, render: () => <Introduction /> },
  { key: 'experience', delay: 1050, render: () => <Experience /> },
  { key: 'involvement', delay: 1165, render: () => <Involvement /> },
  { key: 'projects', delay: 1295, render: () => <Projects /> },
  { key: 'footer', delay: 1435, render: () => <Footer /> },
];

function App() {
  const theme = useTheme();
  const backgroundProps = theme === 'dark' ? DARK_BACKGROUND : LIGHT_BACKGROUND;

  return (
    <div className="layout-wrapper">
      <Background {...backgroundProps} />
      <div className="container">
        {SECTIONS.map(({ key, delay, render }) => (
          <div key={key} className="stagger-item" style={{ '--content-delay': `${delay}ms` }}>
            {render()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
