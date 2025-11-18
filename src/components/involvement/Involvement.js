import './Involvement.css';
import InvolvementItem from './InvolvementItem';

function Involvement() {
  const involvements = [
    {
      date: '2023 - 2025',
      organization: 'Iowa State',
      role: 'Peer Mentor for SWE Freshman',
      location: 'Ames, IA'
    },
    {
      date: '2023',
      organization: 'Iowa State',
      role: 'Undergraduate Teaching Assistant',
      location: 'Ames, IA'
    },
    {
      date: '2022 - 2023',
      organization: 'Hack Club',
      role: 'Founder',
      location: 'Ames, IA'
    },
    {
      date: '2022',
      organization: 'DevsDoGood',
      role: 'Front End Developer',
      location: 'West Des Moines, IA'
    }
  ];

  return (
    <section>
      <h2 className="section-title">Involvement</h2>
      <p className="involvement-intro">
        I was a peer mentor helping incoming freshmen adapt to college and the SWE program, and also served   
        as an undergraduate teaching assistant for an object-oriented programming course. I also was one of the four 
        founders of the Hackathon Club and contributed as a front-end developer for DevsDoGood.
      </p>
      <div className="involvement-list">
        {involvements.map((inv, index) => (
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

