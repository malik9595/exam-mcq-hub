// pages/index.js
"use client";

import SscNav from "@/app/components/mcqnav/Mcqnav";
import Result from "@/app/components/result/ResultCard";
import { mcqData } from "@/app/data/ssc";
import { useState } from "react";

export default function Home() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const result = {};
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
    <div className="main-conatiner">
      <SscNav />
      <Result />
      {mcqData.map((q, index) => (
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
                  // fontWeight: isCorrect ? "bold" : "normal",
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
      {/* {submitted && (
        <div className="result">
          score:{" "}
          {mcqData.filter((q, index) => answers[index] === q.correct).length} /{" "}
          {mcqData.length}
        </div>
      )} */}
    </div>
  );
}
