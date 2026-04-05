import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  footer: {
    textAlign: 'center',
  },
  signature: {
    maxWidth: '200px',
    height: 'auto',
    opacity: 0.8,
    filter: 'var(--signature-filter)',
    marginBottom: '8px',
    '@media (max-width: 768px)': {
      maxWidth: '150px',
    },
  },
  name: {
    fontSize: '12px',
    fontWeight: 300,
    color: 'var(--muted-text)',
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: '11px',
    },
  },
});

function Footer() {
  return (
    <footer {...stylex.props(styles.footer)}>
      <img src="/signature.png" alt="Signature" {...stylex.props(styles.signature)} />
      <p {...stylex.props(styles.name)}>Justin Soberano-Borbonio</p>
    </footer>
  );
}

export default Footer;
