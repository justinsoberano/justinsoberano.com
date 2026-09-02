import './TimelineItem.css';

function TimelineItem({ date, name, role, location }) {
  return (
    <li className="timeline-item">
      <span className="timeline-date">{date}</span>
      <span className="timeline-name">{name}</span>
      <span className="timeline-role">{role}</span>
      <span className="timeline-location">{location}</span>
    </li>
  );
}

export default TimelineItem;
