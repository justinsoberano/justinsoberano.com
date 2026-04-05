import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import TimelineItem, { TimelineList } from '../shared/TimelineItem';
import { shared } from '../../../styles.stylex';
import { EXPERIENCE } from '../../../data/profile';

const internshipsReveal = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(-8px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

const internshipsContentReveal = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(-4px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

const styles = stylex.create({
  sectionClosed: {
    paddingBottom: '14px',
    '@media (max-width: 768px)': {
      paddingBottom: '10px',
    },
  },
  subsection: {
    marginBottom: '22px',
    '@media (max-width: 768px)': {
      marginBottom: '16px',
    },
  },
  subsectionRevealed: {
    animationName: internshipsReveal,
    animationDuration: '340ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'both',
    '@media (prefers-reduced-motion: reduce)': {
      animationName: 'none',
    },
  },
  subsectionContent: {
    paddingLeft: '14px',
    borderLeft: '1px solid var(--section-border)',
    '@media (max-width: 768px)': {
      paddingLeft: '12px',
    },
  },
  subsectionContentRevealed: {
    animationName: internshipsContentReveal,
    animationDuration: '420ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'both',
    '@media (prefers-reduced-motion: reduce)': {
      animationName: 'none',
    },
  },
  subsectionTitle: {
    fontSize: '13px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--muted-text)',
    marginBottom: '12px',
    '@media (max-width: 768px)': {
      fontSize: '14px',
      marginBottom: '10px',
    },
  },
  toggleWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '8px',
    '@media (max-width: 768px)': {
      marginBottom: '6px',
    },
  },
  toggleButton: {
    fontFamily: 'inherit',
    fontSize: '13px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--muted-text)',
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
    whiteSpace: 'nowrap',
    ':hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
    },
    ':focus-visible': {
      outline: '2px solid var(--primary-text)',
      outlineOffset: '2px',
      borderRadius: '2px',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  intro: {
    marginBottom: '16px',
  },
  sectionTitle: {
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
});

function Experience() {
  const [showInternships, setShowInternships] = useState(false);

  return (
    <section {...stylex.props(shared.section, !showInternships && styles.sectionClosed)}>
      <h2 {...stylex.props(shared.sectionTitle, styles.sectionTitle)}>Experience</h2>
      <div>
        <div {...stylex.props(styles.subsection)}>
          <h3 {...stylex.props(styles.subsectionTitle)}>Full-Time</h3>
          <div {...stylex.props(styles.subsectionContent)}>
            <TimelineList>
              {EXPERIENCE.fullTime.map((exp, index) => (
                <TimelineItem
                  key={`full-time-${index}`}
                  date={exp.date}
                  name={exp.name}
                  role={exp.role}
                  location={exp.location}
                />
              ))}
            </TimelineList>
          </div>
        </div>
        {!showInternships && (
          <div {...stylex.props(styles.toggleWrap)}>
            <button
              type="button"
              {...stylex.props(styles.toggleButton)}
              onClick={() => setShowInternships(true)}
              aria-expanded={showInternships}
            >
              View Internships
            </button>
          </div>
        )}
        {showInternships && (
          <div {...stylex.props(styles.subsection, styles.subsectionRevealed)}>
            <h3 {...stylex.props(styles.subsectionTitle)}>Internships</h3>
            <div {...stylex.props(styles.subsectionContent, styles.subsectionContentRevealed)}>
              <p {...stylex.props(shared.sectionCopy, styles.intro)}>
                {EXPERIENCE.internshipsSummary}
              </p>
              <TimelineList>
                {EXPERIENCE.internships.map((exp, index) => (
                  <TimelineItem
                    key={`internship-${index}`}
                    date={exp.date}
                    name={exp.name}
                    role={exp.role}
                    location={exp.location}
                  />
                ))}
              </TimelineList>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
