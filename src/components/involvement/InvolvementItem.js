function InvolvementItem({ date, organization, role, location }) {
  return (
    <div className="involvement-item">
      <div className="involvement-row-1">
        <span className="organization-name">{organization}</span>
        <span className="involvement-location">{location}</span>
      </div>
      <div className="involvement-row-2">
        <span className="involvement-role">{role}</span>
        <span className="involvement-date">{date}</span>
      </div>
    </div>
  );
}

export default InvolvementItem;

