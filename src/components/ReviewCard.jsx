export default function ReviewCard({ name, role, text }) {
  return (
    <div className="review-card">
      {/* USER INFO */}
      <div className="review-user">
        <div className="avatar">👨‍🚒</div>

        <div className="review-user-info">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>

      {/* STARS */}
      <div className="review-stars">★★★★★</div>

      {/* QUOTE */}
      <p className="review-text">“{text}”</p>
    </div>
  );
}
