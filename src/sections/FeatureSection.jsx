import FeatureCard from "../components/FeatureCard";

export default function FeaturesSection() {
    return (
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="feature-header">
            <h2 style={{ color: "#0f172a" }}>Everything you need to succeed</h2>
            <p style={{ color: "#475569" }}>
              A complete platform designed specifically for firefighter exams
              candidates.
            </p>
          </div>

          <br />
          <br />

          <div className="features-grid">
            <FeatureCard
              color="blue"
              title="Interactive Maps"
              desc="Learn geography with real and interactibve maps. Rivers, mountains, cities and more."
              icon="🗺"
            />

            <FeatureCard
              color="purple"
              title="Smart Practice Mode"
              desc="Immediate feedback and repetition until mastering each question. Build muscle memory."
              icon="🧠"
            />

            <FeatureCard
              color="red"
              title="Exam Simulations"
              desc="Practice with official firefighter exams questions. Simulate the real exam."
              icon="🎯"
            />

            <FeatureCard
              color="green"
              title="Progress Tracking"
              desc="Detailed performance statistics. Identify weak points and improve."
              icon="📈"
            />

            <FeatureCard
              color="orange"
              title="Updated Official Curriculum"
              desc="Questions based on official curriculum. Constant updates with new questions."
              icon="📖"
            />

            <FeatureCard
              color="yellow"
              title="Academy Collaboration"
              desc="Special discounts for partner academy students. Only €6.66/month."
              icon="👥"
            />
          </div>
        </div>
      </section>
    );
}