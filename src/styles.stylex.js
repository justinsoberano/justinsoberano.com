import * as stylex from '@stylexjs/stylex';

export const shared = stylex.create({
  section: {
    padding: '24px 0',
    borderBottom: '1px solid var(--section-border)',
    '@media (max-width: 768px)': {
      padding: '16px 0',
    },
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '16px',
    color: 'var(--muted-text)',
  },
  sectionCopy: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '24px',
  },
});
