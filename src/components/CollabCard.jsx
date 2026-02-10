export default function CollabCard({ name, city, studentCount, promo }) {
  return (
    <div className="collab-card">
      {/* TOP ROW */}
      <div className="collab-top">
        <div className="collab-icon">🏢</div>
        <span className="verified-badge">Verified</span>
      </div>

      {/* CONTENT */}
      <h3 className="collab-name">{name}</h3>
      <p className="collab-city">{city}</p>

      {/* META INFO */}
      <div className="collab-meta">
        <div className="meta-item">
          👥 <span>{studentCount}</span>
        </div>

        <div className="promo-code">{promo}</div>
      </div>
    </div>
  );
}
