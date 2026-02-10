import "../Testboard.css"
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="testboard-home">
      {/* HEADER */}
      <div className="home-header">
        <div className="truck">🚒</div>
        <h1>OPOMAP</h1>
        <p>Choose a category to start training</p>
      </div>

      {/* CATEGORY CARDS */}
      <div className="category-list">
        {/* Card 1 */}
        <div className="category-card">
          <div className="icon red">🗺️</div>

          <h3>Geography and Navigation</h3>
          <p>Master locations, routes and geograpical knowledge</p>

          <button className="dark-btn" onClick={() => navigate("/app/module")}>
            Start Test
          </button>
        </div>

        {/* Card 2 */}
        <div className="category-card">
          <div className="icon orange">🧪</div>

          <h3>Official questions</h3>
          <p>Official questions for the firefighter competitions</p>

          <button className="dark-btn" onClick={() => navigate("/app/module")}>
            Start Test
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="home-cta">
        <div className="emoji">👩‍🚒</div>
        <h3>Stay prepared</h3>
        <p>Complete training modules to improve your skills</p>
      </div>
    </section>
  );
}
 