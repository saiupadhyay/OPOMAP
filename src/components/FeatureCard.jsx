export default function FeatureCard({ color, title, desc, icon }) {
  return (
    <div className={`feature-card ${color}`}>
      <div className="feature-bar">
        <span>{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
