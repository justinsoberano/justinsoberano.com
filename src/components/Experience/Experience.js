import TimelineSection from '../TimelineSection/TimelineSection';
import { EXPERIENCE } from '../../data/profile';

function Experience() {
  return (
    <TimelineSection
      title="Experience"
      items={EXPERIENCE.fullTime}
      groupLabel="Full-Time"
      expandable={{
        buttonLabel: 'View Internships',
        title: 'Internships',
        summary: EXPERIENCE.internshipsSummary,
        items: EXPERIENCE.internships,
      }}
    />
  );
}

export default Experience;
