import { useNavigate } from "react-router-dom";
import "./TestModule.css";

export default function TestModule() {
  const navigate = useNavigate();

  const goToTest = (module, mode) => {
    navigate(`/app/test?module=${module}&mode=${mode}`);
  };

  return (
    <section className="test-module">
      <h1>🌍 Geography & Navigation</h1>
      <p className="subtitle">Select training module and mode</p>

      {/* ========== RIVERS ========== */}
      <div className="module-card">
        <h3>🌊 Rivers</h3>

        {/* <button className="learn-btn">Learn the Map</button> */}

        <h4>Game Mode</h4>

        <div className="mode-card">
          <p className="mode-title">📍 Where is it?</p>
          <p className="mode-desc">Find the river on the map</p>

          <div className="mode-actions">
            <button
              className="practice-btn"
              onClick={() => goToTest("rivers", "practice")}
            >
              Practice
            </button>
            <button
              className="exam-btn"
              onClick={() => goToTest("rivers", "exam")}
            >
              Exam
            </button>
          </div>
        </div>
      </div>

      {/* ========== MOUNTAINS ========== */}
      <div className="module-card">
        <h3>⛰️ Mountains</h3>

        {/* <button className="learn-btn">Learn the Map</button> */}

        <h4>Game Mode</h4>

        <div className="mode-card">
          <p className="mode-title">📍 Where is it?</p>
          <p className="mode-desc">Identify the mountain range</p>

          <div className="mode-actions">
            <button
              className="practice-btn"
              onClick={() => goToTest("mountains", "practice")}
            >
              Practice
            </button>
            <button
              className="exam-btn"
              onClick={() => goToTest("mountains", "exam")}
            >
              Exam
            </button>
          </div>
        </div>
      </div>

      {/* ========== CROPS ========== */}
      <div className="module-card">
        <h3>🌾 Crops</h3>

        {/* <button className="learn-btn">Learn the Map</button> */}

        <h4>Game Mode</h4>

        <div className="mode-card">
          <p className="mode-title">📍 Where is it?</p>
          <p className="mode-desc">Find where the crop is grown</p>

          <div className="mode-actions">
            <button
              className="practice-btn"
              onClick={() => goToTest("crops", "practice")}
            >
              Practice
            </button>
            <button
              className="exam-btn"
              onClick={() => goToTest("crops", "exam")}
            >
              Exam
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
