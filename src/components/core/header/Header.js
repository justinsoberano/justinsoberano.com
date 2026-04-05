import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    '@media (max-width: 768px)': {
      marginBottom: '20px',
      alignItems: 'flex-start',
      gap: '16px',
    },
  },
  nameHeading: {
    fontSize: '24px',
    fontWeight: 600,
    margin: 0,
    display: 'flex',
    alignItems: 'baseline',
    lineHeight: 1.1,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.05,
      gap: '12px',
    },
  },
  nameLine: {
    marginLeft: 0,
  },
  nameLineSecond: {
    marginLeft: '0.24ch',
    '@media (max-width: 768px)': {
      marginLeft: 0,
    },
  },
  nameEasterEgg: {
    display: 'inline-grid',
    alignItems: 'baseline',
    whiteSpace: 'nowrap',
    width: '2.2ch',
    overflow: 'hidden',
    marginLeft: '0.2ch',
    transition: 'width 280ms cubic-bezier(0.2, 0.8, 0.25, 1), margin-left 260ms cubic-bezier(0.2, 0.8, 0.25, 1)',
    ':hover': {
      width: '9ch',
      marginLeft: 0,
    },
    '@media (max-width: 768px)': {
      marginLeft: 0,
    },
  },
  nameShort: {
    gridArea: '1 / 1',
    opacity: 1,
    transition: 'opacity 180ms ease',
  },
  nameLong: {
    gridArea: '1 / 1',
    opacity: 0,
    transition: 'opacity 220ms ease',
  },
  headerLinks: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '16px',
    },
  },
  headerLink: {
    fontSize: '16px',
    fontWeight: 400,
    color: 'var(--primary-text)',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

function Header() {
  return (
    <header {...stylex.props(styles.header)}>
      <p {...stylex.props(styles.nameHeading)}>
        <span {...stylex.props(styles.nameLine)}>justin</span>
        <span {...stylex.props(styles.nameLine, styles.nameLineSecond)}>soberano</span>
        <span
          {...stylex.props(styles.nameEasterEgg)}
          aria-hidden="true"
          onMouseEnter={e => {
            e.currentTarget.querySelector('[data-short]').style.opacity = '0';
            e.currentTarget.querySelector('[data-long]').style.opacity = '1';
          }}
          onMouseLeave={e => {
            e.currentTarget.querySelector('[data-short]').style.opacity = '1';
            e.currentTarget.querySelector('[data-long]').style.opacity = '0';
          }}
        >
          <span {...stylex.props(styles.nameShort)} data-short> b.</span>
          <span {...stylex.props(styles.nameLong)} data-long>-borbonio</span>
        </span>
      </p>
      <nav {...stylex.props(styles.headerLinks)}>
        <a href="https://data.justinsoberano.com/files/resume.pdf" target="_blank" rel="noopener noreferrer" {...stylex.props(styles.headerLink)}>Resume</a>
        <a href="https://github.com/justinsoberano" target="_blank" rel="noopener noreferrer" {...stylex.props(styles.headerLink)}>GitHub</a>
        <a href="https://linkedin.com/in/justinsoberano" target="_blank" rel="noopener noreferrer" {...stylex.props(styles.headerLink)}>LinkedIn</a>
      </nav>
    </header>
  );
}

export default Header;
