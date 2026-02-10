import ReviewCard from "../components/ReviewCard";

export default function FeedbackSection() {
    return (
      <section className="feedback-section">
        <div className="feedback-container">
          <div className="feedback-header">
            <h2 style={{ color: "#0f172a" }}> What our users say </h2>
            <p style={{ color: "#475569" }}>
              Over 1,000 candidates have already trusted OPOMAP
            </p>
          </div>

          <div className="feedback-grid">
            <ReviewCard
              name="Joan Garcia"
              role="Barcelona Firefighter Candidate"
              text="OPOMAP helped me memorize all of Catalonia's geography in less than a month. The practice mode is incredible!"
            />

            <ReviewCard
              name="Laura Martinez"
              role="Passed 2024"
              text="Thanks to the official questions and simulations I passed the exam on my first attempt. Totally recommended."
            />

            <ReviewCard
              name="Quim Pujol"
              role="Bombers Pro Academy"
              text="As a teacher, I recommend OPOMAP to all my students. The platform is complete and very effective."
            />
          </div>
        </div>
      </section>
    );
}