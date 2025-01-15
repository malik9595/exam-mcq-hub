"use client";

import Header from "@/app/components/header/Header";
import ResultCard from "@/app/components/result/ResultCard";
import Question from "@/app/components/question/Question";
// import { mcqData } from "@/app/data/ssc";
import { useState } from "react";
import { waitForScroll } from "@/app/config/waitforscroll";
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

  const calculateResults = () => {
    if (!submitted) return {};

    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    mcqData.forEach((q, index) => {
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
      totalPossible: mcqData.length * 2,
    };
  };

  const handleSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    await waitForScroll();
    setSubmitted(true);
  };
  const retryFn = () => {
    alert("Retry Function");
    setAnswers({});
    setSubmitted(false);
  };
  const nextFn = () => {
    alert("Next Function");
  };
  const results = calculateResults();

  return (
    <div className="main-container">
      <Header />
      <ResultCard
        results={results}
        totalScore={results.totalScore}
        submitted={submitted}
        retryFn={retryFn}
        nextFn={nextFn}
      />
      {mcqData.map((q, index) => (
        <Question
          key={q.id}
          question={q}
          index={index}
          answers={answers}
          submitted={submitted}
          handleOptionChange={handleOptionChange}
        />
      ))}
      <button
        className="submitBtn"
        onClick={handleSubmit}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        disabled={submitted}
      >
        Submit
      </button>
    </div>
  );
}
