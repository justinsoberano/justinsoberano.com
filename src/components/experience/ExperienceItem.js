function ExperienceItem({ date, company, role, location }) {
  return (
    <div className="experience-item">
      <div className="experience-row-1">
        <span className="company-name">{company}</span>
        <span className="experience-location">{location}</span>
      </div>
      <div className="experience-row-2">
        <span className="experience-role">{role}</span>
        <span className="experience-date">{date}</span>
      </div>
    </div>
  );
}

export default ExperienceItem;

