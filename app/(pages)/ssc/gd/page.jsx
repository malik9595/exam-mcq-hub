"use client";
import { useEffect, useState } from "react";
import { sscCglAllData } from "@/app/data/ssc/ssc-cgl";
import Header from "@/app/components/sscheader/Header";
import "./cgl.modules.css";
import { waitForScroll } from "@/app/config/waitforscroll";
import { getRandomItems } from "@/app/config/randommcq";
import { v4 as uuidv4 } from "uuid";
import ResultCard from "@/app/components/result/ResultCard";
export default function Home() {
  const [randomMcq, setRandomMcq] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const randomMcq = getRandomItems(sscCglAllData, 30);
    setRandomMcq(randomMcq);
  }, []);

  const handleOptionChange = (questionIndex, optionIndex) => {
    if (!submitted) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionIndex]: optionIndex,
      }));
    }
  };

  const handleSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    await waitForScroll();
    setSubmitted(true);
  };

  return (
    <div className="main-conatiner">
      <Header
        title={"SSC CGL (Staff Selection Commission Combined Graduate Level)"}
      />
      {/* <ResultCard submitted="true"/> */}
      {randomMcq.map((q, index) => (
        <div key={uuidv4()} style={{ marginBottom: "20px" }} className="group">
          <h4>
            {index + 1}. {q.question}
          </h4>

          {q.options.map((option, optionIndex) => {
            const isCorrect = optionIndex === q.correctIndex;
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
              <div key={optionIndex} className="test">
                <div className="group-item">
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
              </div>
            );
          })}
          {submitted && answers[index] !== q.correctIndex && (
            <p style={{ color: "#5CB338" }}>
              Answer: {q.options[q.correctIndex]}
            </p>
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
