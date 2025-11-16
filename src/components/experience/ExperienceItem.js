function ExperienceItem({ date, company, role, location }) {
  return (
    <div className="experience-item">
      <span className="experience-date">{date}</span>
      <span className="experience-details">
        <span className="company-name">{company}</span> {role}
      </span>
      <span className="experience-location">{location}</span>
    </div>
  );
}

export default ExperienceItem;

