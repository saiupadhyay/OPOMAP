import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import "./TestPage.css";

/* ================= QUESTIONS DATA ================= */

const questionBank = {
  rivers: [
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
      answer: "Nile",
    },
    {
      question: "Which river flows through Egypt?",
      options: ["Amazon", "Nile", "Danube", "Volga"],
      answer: "Nile",
    },
  ],

  mountains: [
    {
      question: "Which is the highest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Everest", "Makalu"],
      answer: "Everest",
    },
    {
      question: "The Himalayas are located in which continent?",
      options: ["Africa", "Asia", "Europe", "South America"],
      answer: "Asia",
    },
  ],

  crops: [
    {
      question: "Which crop is known as a staple food of India?",
      options: ["Wheat", "Rice", "Maize", "Barley"],
      answer: "Rice",
    },
    {
      question: "Which crop requires maximum water?",
      options: ["Wheat", "Millets", "Rice", "Maize"],
      answer: "Rice",
    },
  ],
};

/* ================= COMPONENT ================= */

export default function TestPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const goBackToModules = () => {
    navigate("/app/module");
  };


  const module = searchParams.get("module"); // rivers | mountains | crops
  const mode = searchParams.get("mode"); // practice | exam

  const questions = questionBank[module] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowResult(false);
  };

  /* ================= UI ================= */

  return (
    <div className="mcq-container">
      <h1>
        {module?.toUpperCase()} –{" "}
        {mode === "exam" ? "Exam Mode" : "Practice Mode"}
      </h1>

      {mode === "exam" && (
        <p className="exam-warning">
          ⏱️ Exam Mode: No restart, answers shown only at the end
        </p>
      )}

      {showResult ? (
        <div className="result-box">
          <h2>Your Score</h2>
          <p>
            {score} / {questions.length}
          </p>

          <div className="result-actions">
            {mode === "practice" && (
              <button onClick={restartQuiz}>Restart Practice</button>
            )}

            <button className="back-btn" onClick={goBackToModules}>
              ← Back to Test
            </button>
          </div>

        </div>
      ) : (
        <div className="question-box">
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <p className="question-text">
            {questions[currentQuestion]?.question}
          </p>

          <div className="options">
            {questions[currentQuestion]?.options.map((option) => (
              <label
                key={option}
                className={`option ${
                  selectedOption === option ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                />
                {option}
              </label>
            ))}
          </div>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
