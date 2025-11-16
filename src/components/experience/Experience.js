import './Experience.css';
import ExperienceItem from './ExperienceItem';

function Experience() {
  const experiences = [
    {
      date: 'Summer 2025',
      company: 'Meta',
      role: 'Software Engineer Intern, Infrastructure',
      location: 'New York, NY'
    },
    {
      date: 'Summer 2024',
      company: 'Instagram',
      role: 'Software Engineer Intern, Full-stack',
      location: 'San Francisco, CA'
    },
    {
      date: 'Summer 2023',
      company: 'NASA',
      role: 'Software Engineer Intern, Machine Learning',
      location: 'Houston, TX'
    },
    {
      date: 'Fall 2022',
      company: 'NASA',
      role: 'Software Engineer Intern, AR/VR',
      location: 'Houston, TX'
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            date={exp.date}
            company={exp.company}
            role={exp.role}
            location={exp.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;

