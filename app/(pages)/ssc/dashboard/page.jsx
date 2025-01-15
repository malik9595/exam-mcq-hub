"use client";
import Link from "next/link";
import "./dashboard.modules.css";
import { useState } from "react";

const page = () => {

  const [selectedExam, setSelectedExam] = useState('')
  const linkChange = (id) => {
    setSelectedExam(()=>`/ssc/${id}`);
    console.log(selectedExam);
  };

  return (
    <div>
      <div className="quiz-container">
        <div className="header">
          <img src="/logo.png" alt="" height="60px" width="60px" />
          <span>
            <strong>Exam MCQ Hub</strong>
          </span>
        </div>
        <br />

        <div className="options">
          <div className="option" onClick={() => linkChange("cgl")}>
            <label htmlFor="mcqs">SSC CHL Practice MCQs or PYQs</label>
            <input type="radio" id="mcqs" name="step" value="mcqs" />
          </div>
          <div className="option" onClick={() => linkChange("chsl")}>
            <label htmlFor="learn">Learn a topic or concept</label>
            <input type="radio" id="learn" name="step" value="learn" />
          </div>
          <div className="option" onClick={() => linkChange("gd")}>
            <label htmlFor="mains">Detailed Mains Answer Evaluation</label>
            <input type="radio" id="mains" name="step" value="mains" />
          </div>
          <div className="option" onClick={() => linkChange("mts")}>
            <label htmlFor="mains">Detailed Mains Answer Evaluation</label>
            <input type="radio" id="mains" name="step" value="mains" />
          </div>
        </div>
        <Link href={selectedExam}>
          <button className="save-btn" id="saveBtn">
            Start Now Its Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
