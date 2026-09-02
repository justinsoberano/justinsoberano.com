import TimelineSection from '../TimelineSection/TimelineSection';
import { INVOLVEMENT } from '../../data/profile';

function Involvement() {
  return (
    <TimelineSection
      title="Involvement"
      summary={INVOLVEMENT.summary}
      items={INVOLVEMENT.items}
    />
  );
}

export default Involvement;
