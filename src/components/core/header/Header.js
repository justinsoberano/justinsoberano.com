import './Header.css';

function Header() {
  return (
    <header className="header">
      <p className="name-heading">
        <span className="name-line">justin</span>
        <span className="name-line">soberano</span>
        <span className="name-easter-egg" aria-hidden="true">
          <span className="name-short"> b.</span>
          <span className="name-long">-borbonio</span>
        </span>
      </p>
      <nav className="header-links">
        <a href="https://data.justinsoberano.com/files/resume.pdf" target="_blank" rel="noopener noreferrer" className="header-link">Resume</a>
        <a href="https://github.com/justinsoberano" target="_blank" rel="noopener noreferrer" className="header-link">GitHub</a>
        <a href="https://linkedin.com/in/justinsoberano" target="_blank" rel="noopener noreferrer" className="header-link">LinkedIn</a>
      </nav>
    </header>
  );
}

export default Header;
