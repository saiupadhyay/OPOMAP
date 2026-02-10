export default function ContactSection() {
    return (
      <section className="contact-section">
        <div className="contact-container">
          {/* HEADER */}
          <div className="contact-header">
            <h2>Are you an academy? Partner with us</h2>
            <p>
              Offer the best to your students and manage their promotional codes
            </p>
          </div>

          {/* FORM */}
          <div className="contact-form-card">
            <form className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Contact Name *</label>
                  <input type="text" placeholder="John Aulia" />
                </div>

                <div className="form-group">
                  <label>Contact Email *</label>
                  <input type="text" placeholder="john@abc.com" />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" placeholder="0123 456 789" />
                </div>

                <div className="form-group">
                  <label>Academy name*</label>
                  <input type="text" placeholder="Academia Bombers BCN" />
                </div>
              </div>

              <div className="form-group full">
                <label>Message</label>
                <textarea placeholder="Tell us about your academy" />
              </div>

              {/* Info BOX */}
              <div className="form-info">
                <h4>What the partnership includes</h4>
                <ul>
                  <li>Personalized promotional codes for your academy</li>
                  <li>Management panel to see code usage</li>
                  <li>33% discount for all your students</li>
                  <li>Promotional materials and technical support</li>
                </ul>
              </div>

              {/* Button */}
              <button className="submit-btn">✉️ Send Request</button>
            </form>
          </div>

          {/* Contact */}
          <div className="direct-contact">
            <p>Or contact us directly:</p>

            <div className="contact-links">
              <a href="mailto:academias@opomap.com" className="contact-link">
                ✉️ academias@opomap.com
              </a>

              <a href="tel:+91600123456" className="contact-link">
                📞 +91 600 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}