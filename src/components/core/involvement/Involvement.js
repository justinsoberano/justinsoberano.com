import * as stylex from '@stylexjs/stylex';
import TimelineItem, { TimelineList } from '../shared/TimelineItem';
import { shared } from '../../../styles.stylex';
import { INVOLVEMENT } from '../../../data/profile';

const styles = stylex.create({
  intro: {
    marginBottom: '16px',
  },
  sectionTitle: {
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
});

function Involvement() {
  return (
    <section {...stylex.props(shared.section)}>
      <h2 {...stylex.props(shared.sectionTitle, styles.sectionTitle)}>Involvement</h2>
      <p {...stylex.props(shared.sectionCopy, styles.intro)}>
        {INVOLVEMENT.summary}
      </p>
      <TimelineList>
        {INVOLVEMENT.items.map((inv, index) => (
          <TimelineItem
            key={index}
            date={inv.date}
            name={inv.name}
            role={inv.role}
            location={inv.location}
          />
        ))}
      </TimelineList>
    </section>
  );
}

export default Involvement;
