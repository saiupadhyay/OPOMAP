import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  
  return (
    <section className="signin-page">
      <h3 onClick={() => navigate("/")}>
         ⬅️Back
      </h3>
      <div className="signin-card">
        {/* Logo */}
        <div className="car">
          🚒 <span>OPOMAP</span>
        </div>

        {/* Tagline */}
        <p className="tagline">Signin to continue training</p>

        {/* Form */}
        <form className="signin-form">
          <label> Email</label>
          <input type="email" placeholder="name@example.com" />

          <label> password </label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="▪️▪️▪️▪️▪️▪️"
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="forgot">Forgot your password?</div>

          <button type="submit" className="signin-btn">
            Start Session
          </button>
        </form>

        <div className="divider">
          <span>------------- Or continue with ------------- </span>
        </div>

        {/* Social buttons */}
        <div className="social-buttons">
          <button className="social-btn" onClick={() => navigate("/app")}>
            G&nbsp; Google
          </button>

          <button className="social-btn" onClick={() => navigate("/app")}>
            🍎&nbsp; Apple
          </button>
        </div>

      </div>
    </section>
  );
}
