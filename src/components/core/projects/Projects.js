import * as stylex from '@stylexjs/stylex';
import { shared } from '../../../styles.stylex';

const styles = stylex.create({
  link: {
    color: 'var(--primary-text)',
    textDecoration: 'underline',
    fontWeight: 600,
    transition: 'opacity 0.2s ease',
    ':hover': {
      opacity: 0.7,
    },
  },
});

function Projects() {
  return (
    <section {...stylex.props(shared.section)}>
      <h2 {...stylex.props(shared.sectionTitle)}>Projects</h2>
      <p {...stylex.props(shared.sectionCopy)}>
        My projects are kinda cringe but if you're interested in seeing them,
        you can check them out at{' '}
        <a
          href="https://old.justinsoberano.com"
          target="_blank"
          rel="noopener noreferrer"
          {...stylex.props(styles.link)}
        >
          my old portfolio
        </a>.
      </p>
    </section>
  );
}

export default Projects;
