import './Introduction.css';
import { INTRO_PARAGRAPHS } from '../../../data/profile';

function Introduction() {
  return (
    <section>
      {INTRO_PARAGRAPHS.map((paragraph, index) => (
        <p key={index} className="section-copy introduction">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export default Introduction;
