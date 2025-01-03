export default function ScoreDetails({ results }) {
    return (
      <div style={{ textAlign: "left" }}>
        <p>
          <strong>Correct: </strong>
          <span style={{ color: "#2a9d8f" }}>
            {results.correctCount} | +{results.correctCount * 2} marks
          </span>
        </p>
        <p>
          <strong>Incorrect: </strong>
          <span style={{ color: "#e63946" }}>
            {results.incorrectCount} | {-(results.incorrectCount * 0.67).toFixed(2)} marks
          </span>
        </p>
        <p>
          <strong>Unattempted: </strong>
          <span style={{ color: "#6c757d" }}>
            {results.unattemptedCount} | 0 marks
          </span>
        </p>
      </div>
    );
  }
  