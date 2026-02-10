import CollabCard from "../components/CollabCard";

export default function PartnershipSection() {
    return (
      <section className="partnership-section">
        <div className="partnership-container">
          {/* HEADER */}
          <div className="partnership-header">
            <h2>We work with the best academies</h2>
            <p>Exclusive discounts for partner academy students</p>
          </div>

          <div className="partnership-grid">
            <CollabCard
              name="Academia Bombers BCN"
              city="Barcelona"
              studentCount="250+ students"
              promo="BOMBERSBC"
            />

            <CollabCard
              name="Oposicions Catalunya"
              city="Girona"
              studentCount="180+ students"
              promo="OPOCAT25"
            />

            <CollabCard
              name="Forma't Emergencies"
              city="Tarragona"
              studentCount="320+ students"
              promo="FORMATEMER"
            />

            <CollabCard
              name="Academia SPEIS"
              city="Lleida"
              studentCount="150+ students"
              promo="SPEISLLEI"
            />
          </div>

          <br />

          <div className="academy-discount">
            <div className="discount-left">
              <div className="discount-icon">🛡️</div>
              <div>
                <h3>Special academy discount</h3>
                <p>
                  Your students will only pay <strong>€6.66/month</strong>{" "}
                  instead of €9.99
                </p>
              </div>
            </div>

            <button className="discount-btn">Become a Partner →</button>
          </div>
        </div>
      </section>
    );
}

