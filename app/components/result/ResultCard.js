import ScoreDetails from "./ScoreDetails";

export default function ResultCard({ results, totalScore, submitted, retryFn,nextFn }) {
  if (!submitted) return null;

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
      <h3 style={{ color: "#1d3557", marginBottom: "10px" }}>
        {totalScore >= results.totalPossible ? "Excellent Work!" : "You need to practice more!"}
      </h3>
      <h2 style={{ margin: "10px 0", fontSize: "24px", color: "#333" }}>
        Your Score: <span style={{ fontWeight: "bold" }}>{totalScore}</span> / {results.totalPossible}
      </h2>
      <hr style={{ margin: "20px 0", border: "0.5px solid #ddd" }} />
      <ScoreDetails results={results} />
      <button style={{padding:"5px 10px"}} onClick={()=>retryFn()}>Re Try</button>
      <button style={{padding:"5px 10px"}} onClick={nextFn}>Next</button>
    </div>
  );
}
