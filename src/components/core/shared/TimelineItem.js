import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  timelineList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    '@media (max-width: 768px)': {
      gap: '20px',
    },
  },
  timelineItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
    fontSize: '16px',
    lineHeight: 1.5,
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '4px',
      alignItems: 'stretch',
    },
  },
  timelineRow: {
    display: 'contents',
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
  },
  timelineDate: {
    fontWeight: 400,
    color: 'var(--muted-text)',
    width: '120px',
    flexShrink: 0,
    order: 1,
    '@media (max-width: 768px)': {
      width: 'auto',
      textAlign: 'right',
      order: 0,
    },
  },
  timelineName: {
    fontWeight: 600,
    color: 'var(--primary-text)',
    display: 'inline-block',
    width: '100px',
    order: 2,
    '@media (max-width: 768px)': {
      width: 'auto',
      order: 0,
    },
  },
  timelineRole: {
    fontWeight: 300,
    color: 'var(--primary-text)',
    flex: 1,
    order: 3,
    '@media (max-width: 768px)': {
      order: 0,
    },
  },
  timelineLocation: {
    fontWeight: 300,
    color: 'var(--muted-text)',
    textAlign: 'right',
    order: 4,
    '@media (max-width: 768px)': {
      order: 0,
    },
  },
});

export function TimelineList({ children }) {
  return <div {...stylex.props(styles.timelineList)}>{children}</div>;
}

function TimelineItem({ date, name, role, location }) {
  return (
    <div {...stylex.props(styles.timelineItem)}>
      <div {...stylex.props(styles.timelineRow)}>
        <span {...stylex.props(styles.timelineName)}>{name}</span>
        <span {...stylex.props(styles.timelineLocation)}>{location}</span>
      </div>
      <div {...stylex.props(styles.timelineRow)}>
        <span {...stylex.props(styles.timelineRole)}>{role}</span>
        <span {...stylex.props(styles.timelineDate)}>{date}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
