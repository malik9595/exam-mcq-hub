"use client";

import Header from "@/app/components/header/Header";
import { useState } from "react";
import { currentEvent } from "@/app/data/upsc/Gs1/current-event";

function ResultCard({ answers, submitted }) {
  const calculateResults = () => {
    if (!submitted) return {};

    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    currentEvent .forEach((q, index) => {
      const userAnswer = answers[index];
      if (userAnswer === undefined) {
        unattemptedCount++;
      } else if (userAnswer === q.correct) {
        correctCount++;
        totalScore += 2;
      } else {
        incorrectCount++;
        totalScore -= 0.67;
      }
    });

    return {
      totalScore: totalScore.toFixed(2),
      correctCount,
      incorrectCount,
      unattemptedCount,
    };
  };

  const { totalScore, correctCount, incorrectCount, unattemptedCount } =
    calculateResults();

  return (
    <div
      className="result-card"
      style={{
        margin: "20px auto",
        padding: "20px",
        maxWidth: "400px",
        backgroundColor: "#f1f8ff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      {submitted && (
        <>
          <h3 style={{ color: "#1d3557", marginBottom: "10px" }}>
            {totalScore >= currentEvent .length ? "Excellent Work!" : "You need to practice more!"}
          </h3>
          <h2 style={{ margin: "10px 0", fontSize: "24px", color: "#333" }}>
            Your Score: <span style={{ fontWeight: "bold" }}>{totalScore}</span>{" "}
            / {currentEvent .length * 2}
          </h2>
          <hr style={{ margin: "20px 0", border: "0.5px solid #ddd" }} />
          <div style={{ textAlign: "left" }}>
            <p>
              <strong>Correct: </strong>
              <span style={{ color: "#2a9d8f" }}>
                {correctCount} | +{correctCount * 2} marks
              </span>
            </p>
            <p>
              <strong>Incorrect: </strong>
              <span style={{ color: "#e63946" }}>
                {incorrectCount} | {-(incorrectCount * 0.67).toFixed(2)} marks
              </span>
            </p>
            <p>
              <strong>Unattempted: </strong>
              <span style={{ color: "#6c757d" }}>
                {unattemptedCount} | 0 marks
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    if (!submitted) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionIndex]: optionIndex,
      }));
    }
  };

  const waitForScroll = () =>
    new Promise((resolve) => {
      const checkScroll = () =>
        window.scrollY === 0 ? resolve() : requestAnimationFrame(checkScroll);
      checkScroll();
    });

  const handleSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    await waitForScroll();
    setSubmitted(true);
  };

  return (
    <div className="main-container">
      <Header />
      {currentEvent .map((q, index) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <h4>
            {index + 1}. {q.question}
          </h4>
          {q.options.map((option, optionIndex) => {
            const isCorrect = optionIndex === q.correct;
            const isChosen = answers[index] === optionIndex;
            const optionStyle = submitted
              ? {
                  color: isChosen
                    ? isCorrect
                      ? "#5CB338"
                      : "#E63946"
                    : "inherit",
                }
              : {};

            return (
              <div key={optionIndex}>
                <label style={optionStyle}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={optionIndex}
                    checked={answers[index] === optionIndex}
                    disabled={submitted}
                    onChange={() => handleOptionChange(index, optionIndex)}
                  />
                  <span>{option}</span>
                </label>
              </div>
            );
          })}
          {submitted && answers[index] !== q.correct && (
            <p style={{ color: "#5CB338" }}>Answer: {q.options[q.correct]}</p>
          )}
        </div>
      ))}
      <button
        className="submitBtn"
        onClick={handleSubmit}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        disabled={submitted}
      >
        Submit
      </button>
      <ResultCard answers={answers} submitted={submitted} />
    </div>
  );
}
