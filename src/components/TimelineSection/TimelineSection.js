import { useState } from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import './TimelineSection.css';

function TimelineSection({ title, summary, items, groupLabel, expandable }) {
  const [expanded, setExpanded] = useState(false);
  const showToggle = expandable && !expanded;
  const showExpanded = expandable && expanded;

  return (
    <section className={`timeline-section${expandable && !expanded ? ' is-collapsed' : ''}`}>
      <h2 className="section-title">{title}</h2>

      {summary && <p className="section-copy timeline-summary">{summary}</p>}

      <div className="timeline-groups">
        <div className="timeline-subsection">
          {groupLabel && <h3 className="timeline-subsection-title">{groupLabel}</h3>}
          <div className="timeline-subsection-content">
            <ul className="timeline-list">
              {items.map(item => (
                <TimelineItem
                  key={`${item.name}-${item.role}-${item.date}`}
                  date={item.date}
                  name={item.name}
                  role={item.role}
                  location={item.location}
                />
              ))}
            </ul>
          </div>
        </div>

        {showToggle && (
          <div className="timeline-toggle-wrap">
            <button
              type="button"
              className="timeline-toggle-button"
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
            >
              {expandable.buttonLabel}
            </button>
          </div>
        )}

        {showExpanded && (
          <div className="timeline-subsection is-expanded">
            <h3 className="timeline-subsection-title">{expandable.title}</h3>
            <div className="timeline-subsection-content">
              {expandable.summary && <p className="section-copy timeline-summary">{expandable.summary}</p>}
              <ul className="timeline-list">
                {expandable.items.map(item => (
                  <TimelineItem
                    key={`${item.name}-${item.role}-${item.date}`}
                    date={item.date}
                    name={item.name}
                    role={item.role}
                    location={item.location}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TimelineSection;
