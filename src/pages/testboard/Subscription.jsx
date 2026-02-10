import "../Testboard.css";

export default function Subscription() {
  return (
    <section className="subscription-page">
      <div className="subscription-container">
        
        {/* Header */}
        <div className="subscription-header">
          <h1>Subscription Plans</h1>
          <p>Choose the plan that best suits your needs</p>
        </div>

        {/* Academy Offer */}
        <div className="academy-box">
          <div className="academy-left">
            <span className="academy-icon">👥</span>
            <div>
              <h4>
                Comes with Academy <span className="discount">-33% OFF</span>
              </h4>
              <p>
                If you belong to a collabarating academy, you can access the
                Monthly plan for only <b>6.66€/mes</b>
              </p>
            </div>
          </div>

          <div className="academy-actions">
            <button className="btn-primary">yes, I have a code</button>
            <button className="btn-secondary">No</button>
          </div>
        </div>

        {/* Plans */}
        <div className="plans-grid">
          {/* Free */}
          <div className="plan-card">
            <div className="plan-icon">🛡️</div>
            <h3>Free of charge</h3>
            <h2>
              0€ <span>/ always</span>
            </h2>
            <p className="plan-subtext">Perfect to start with</p>

            <ul>
              <li>Limited access to questions</li>
              <li>Basic practice mode</li>
              <li>Basic geography</li>
              <li>No premium upgrades</li>
            </ul>

            <button className="btn-disabled">Current Plan</button>
          </div>

          {/* Monthly */}
          <div className="plan-card popular">
            <span className="badge-popular">Popular</span>
            <div className="plan-icon">⚡</div>
            <h3>Monthly</h3>
            <h2>
              9.99€ <span>/ month</span>
            </h2>
            <p className="plan-subtext">Maximum Flexibility</p>

            <ul>
              <li>Unlimitedaccess to all questions</li>
              <li>Advanced practice and exam mode</li>
              <li>All geography modules</li>
              <li>Official exam questions</li>
              <li>Constant Update</li>
              <li>Detailed Statistics</li>
            </ul>

            <button className="btn-primary full">Subscribe</button>
          </div>

          {/* Yearly */}
          <div className="plan-card">
            <span className="badge-save">Save 20%</span>
            <div className="plan-icon">👑</div>
            <h3>Anual</h3>
            <h2>
              95.88€ <span>/ any</span>
            </h2>
            <p className="plan-subtext">Best Value</p>

            <ul>
              <li>All of the Monthly plan</li>
              <li>Save -$24/yr</li>
              <li>Real exam simulations</li>
              <li>Priority Support</li>
              <li>Downloadable certificates</li>
              <li>Early access to new Features </li>
            </ul>

            <button className="btn-dark full">Subscribe</button>
          </div>
        </div>

        {/* Features */}
        <div className="features-grid">
          <div className="feature-card">
            ⚡ <h4>Flexible Cancellation</h4>
            <p>Unsubscribe anytime</p>
          </div>
          <div className="feature-card">
            🧩 <h4>Constant updates</h4>
            <p>New questions every week</p>
          </div>
          <div className="feature-card">
            👥 <h4>Dedicated Support</h4>
            <p>Expert team always available</p>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="question-section">
          <h2>Frequently Asked Questions</h2>

          <div className="questions-grid">
            <div className="questions-asked">
              <h4>How does the promo code work?</h4>
              <p>
                If you belong to a collaborating academy, you can enter your
                code to access the monthly plan with a 33% discount.
              </p>
            </div>

            <div className="questions-asked">
              <h4>What happens and I cancel?</h4>
              <p>
                You can cancel anytime. You'll keep access untill the end of
                your current billing period.
              </p>
            </div>

            <div className="questions-asked">
              <h4>Can i change my plan later?</h4>
              <p>
                yes, you can switch between plans at any time from your profile
                page.
              </p>
            </div>

            <div className="questions-asked">
              <h4>Is the annual plam discounted?</h4>
              <p>
                Yes. The annual plam has a discount of approximately 20%
                compared to paying monthly for 12 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
