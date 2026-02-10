import "../Testboard.css";

export default function Profile() {
  return (
    <section className="profile-page">
      <div className="page-container">

        {/* User Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">👤</div>

            <div className="profile-details">
              <h2>Google User</h2>
              <p className="profile-email">user@gmail.com</p>

              <p className="profile-member">📅 Member since January 2025</p>

              <div className="profile-actions">
                <button className="profile-edit-btn">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-section">
          <h3>Statistics</h3>

          <div className="stats-grid">
            <div className="stat-box red">
              <div className="stat-header">
                🎯
                <span>Completed Tests</span>
              </div>
              <h2>42</h2>
            </div>

            <div className="stat-box orange">
              <div className="stat-header">
                🏆
                <span>Average Score</span>
              </div>
              <h2>87%</h2>
            </div>

            <div className="stat-box yellow">
              <div className="stat-header">
                🔥
                <span>Best Category</span>
              </div>
              <h2>Geography</h2>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="profile-section">
          <h3>Achievements</h3>

          <div className="achievements-grid">
            <div className="achievement active">
              🎯<p>Primer Test</p>
            </div>
            <div className="achievement active">
              🔟<p>10 Tests Completed</p>
            </div>
            <div className="achievement active">
              💯<p>Perfect Score</p>
            </div>

            <div className="achievement locked">
              📅<p>Active Weeks</p>
            </div>
            <div className="achievement active">
              🗺️<p>Master of Geography</p>
            </div>
            <div className="achievement locked">
              🔥<p>Focus Expert</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
