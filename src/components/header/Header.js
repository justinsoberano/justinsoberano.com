import './Header.css';

function Header() {
  return (
    <header className="header">
      <p className="name-heading">justin soberano b.</p>
      <nav className="header-links">
        <a href="https://justinsoberano.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="header-link">Resume</a>
        <a href="https://github.com/justinsoberano" target="_blank" rel="noopener noreferrer" className="header-link">GitHub</a>
        <a href="https://linkedin.com/in/justinsoberano" target="_blank" rel="noopener noreferrer" className="header-link">LinkedIn</a>
      </nav>
    </header>
  );
}

export default Header;

