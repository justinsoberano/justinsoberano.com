import './Experience.css';
import ExperienceItem from './ExperienceItem';
import { EXPERIENCE } from '../../../data/profile';

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-groups">
        <div className="experience-subsection">
          <h3 className="experience-subsection-title">Full-Time</h3>
          <div className="experience-subsection-content">
            <div className="experience-list">
              {EXPERIENCE.fullTime.map((exp, index) => (
                <ExperienceItem
                  key={`full-time-${index}`}
                  date={exp.date}
                  company={exp.company}
                  role={exp.role}
                  location={exp.location}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="experience-subsection">
          <h3 className="experience-subsection-title">Internships</h3>
          <div className="experience-subsection-content">
            <p className="section-copy experience-intro">
              {EXPERIENCE.internshipsSummary}
            </p>
            <div className="experience-list">
              {EXPERIENCE.internships.map((exp, index) => (
                <ExperienceItem
                  key={`internship-${index}`}
                  date={exp.date}
                  company={exp.company}
                  role={exp.role}
                  location={exp.location}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
