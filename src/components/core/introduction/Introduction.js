import * as stylex from '@stylexjs/stylex';
import { shared } from '../../../styles.stylex';
import { INTRO_PARAGRAPHS } from '../../../data/profile';

const styles = stylex.create({
  paragraph: {
    marginBottom: '16px',
  },
  paragraphLast: {
    marginBottom: 0,
  },
});

function Introduction() {
  return (
    <section {...stylex.props(shared.section)}>
      {INTRO_PARAGRAPHS.map((paragraph, index) => (
        <p key={index} {...stylex.props(shared.sectionCopy, styles.paragraph, index === INTRO_PARAGRAPHS.length - 1 && styles.paragraphLast)}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export default Introduction;
