import './Involvement.css';
import InvolvementItem from './InvolvementItem';
import { INVOLVEMENT } from '../../../data/profile';

function Involvement() {
  return (
    <section className="involvement-section">
      <h2 className="section-title">Involvement</h2>
      <p className="section-copy involvement-intro">
        {INVOLVEMENT.summary}
      </p>
      <div className="involvement-list">
        {INVOLVEMENT.items.map((inv, index) => (
          <InvolvementItem
            key={index}
            date={inv.date}
            organization={inv.organization}
            role={inv.role}
            location={inv.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Involvement;

