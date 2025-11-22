import './Experience.css';
import ExperienceItem from './ExperienceItem';

function Experience() {
  const experiences = [
    {
      date: '2025',
      company: 'Meta',
      role: 'Software Engineer Intern, Infrastructure',
      location: 'New York, NY'
    },
    {
      date: '2024',
      company: 'Instagram',
      role: 'Software Engineer Intern, Full-stack',
      location: 'San Francisco, CA'
    },
    {
      date: '2023',
      company: 'NASA',
      role: 'Software Engineer Intern, ML',
      location: 'Houston, TX'
    },
    {
      date: '2022',
      company: 'NASA',
      role: 'Software Engineer Intern, AR/VR',
      location: 'Houston, TX'
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <p className="experience-intro">
        I have interned twice with NASA working on implementing AR and VR into astronaut 
        training simulations and as a machine learning intern helping integrate biometric 
        nano-models into astronaut spacesuits. I also interned with Instagram where I globally 
        launched Instagram Notes for mobile web users and worked with the Observability team 
        to develop an anomaly detection system for their A.I. Infrastructure.   
      </p>
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

