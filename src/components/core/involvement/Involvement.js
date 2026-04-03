import './Involvement.css';
import TimelineItem from '../shared/TimelineItem';
import { INVOLVEMENT } from '../../../data/profile';

function Involvement() {
  return (
    <section className="involvement-section">
      <h2 className="section-title">Involvement</h2>
      <p className="section-copy involvement-intro">
        {INVOLVEMENT.summary}
      </p>
      <div className="timeline-list">
        {INVOLVEMENT.items.map((inv, index) => (
          <TimelineItem
            key={index}
            date={inv.date}
            name={inv.name}
            role={inv.role}
            location={inv.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Involvement;

