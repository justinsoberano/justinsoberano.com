import './TimelineItem.css';

function TimelineItem({ date, name, role, location }) {
  return (
    <div className="timeline-item">
      <div className="timeline-row">
        <span className="timeline-name">{name}</span>
        <span className="timeline-location">{location}</span>
      </div>
      <div className="timeline-row">
        <span className="timeline-role">{role}</span>
        <span className="timeline-date">{date}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
