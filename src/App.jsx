import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import TestboardLayout from "./layouts/TestboardLayout";


import TestHome from "./pages/testboard/TestHome";
import Profile from "./pages/testboard/Profile";
import Subscription from "./pages/testboard/Subscription";
import TestPage from "./pages/testboard/TestPage";
import TestModule from "./pages/testboard/TestModule";

export default function App() {
  return (
    <Routes>
      {/* No navbar */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />

      {/* with Navbar */}
      <Route path="/app" element={<TestboardLayout />}>
        <Route index element={<TestHome />} />
        <Route path="module" element={<TestModule />} />
        <Route path="test" element={<TestPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
      </Route>
    </Routes>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

function FeatureCard({ color, title, desc, icon }) {
  return (
    <div className={`feature-card ${color}`}>
      <div className="feature-bar">
        <span>{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function ReviewCard({ name, role, text }) {
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

function CollabCard({ name, city, studentCount, promo }) {
  return (
    <div className="collab-card">
      {/* TOP ROW */}
      <div className="collab-top">
        <div className="collab-icon">🏢</div>
        <span className="verified-badge">Verified</span>
      </div>

      {/* CONTENT */}
      <h3 className="collab-name">{name}</h3>
      <p className="collab-city">{city}</p>

      {/* META INFO */}
      <div className="collab-meta">
        <div className="meta-item">
          👥 <span>{studentCount}</span>
        </div>

        <div className="promo-code">{promo}</div>
      </div>
    </div>
  );
}
