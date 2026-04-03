import { useState } from 'react';
import './Experience.css';
import TimelineItem from '../shared/TimelineItem';
import { EXPERIENCE } from '../../../data/profile';

function Experience() {
  const [showInternships, setShowInternships] = useState(false);

  return (
    <section
      className={`experience-section${showInternships ? '' : ' internships-closed'}`}
    >
      <h2 className="section-title">Experience</h2>
      <div className="experience-groups">
        <div className="experience-subsection">
          <h3 className="experience-subsection-title">Full-Time</h3>
          <div className="experience-subsection-content">
            <div className="timeline-list">
              {EXPERIENCE.fullTime.map((exp, index) => (
                <TimelineItem
                  key={`full-time-${index}`}
                  date={exp.date}
                  name={exp.name}
                  role={exp.role}
                  location={exp.location}
                />
              ))}
            </div>
          </div>
        </div>
        {!showInternships && (
          <div className="experience-internships-toggle-wrap">
            <button
              type="button"
              className="experience-toggle-button"
              onClick={() => setShowInternships(true)}
              aria-expanded={showInternships}
            >
              View Internships
            </button>
          </div>
        )}
        {showInternships && (
          <div className="experience-subsection internships-expanded">
            <h3 className="experience-subsection-title">Internships</h3>
            <div className="experience-subsection-content">
              <p className="section-copy experience-intro">
                {EXPERIENCE.internshipsSummary}
              </p>
              <div className="timeline-list">
                {EXPERIENCE.internships.map((exp, index) => (
                  <TimelineItem
                    key={`internship-${index}`}
                    date={exp.date}
                    name={exp.name}
                    role={exp.role}
                    location={exp.location}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
