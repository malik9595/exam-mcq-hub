export default function Question({
    question,
    index,
    answers,
    submitted,
    handleOptionChange,
  }) {
    return (
      <div key={question.id} style={{ marginBottom: "20px" }}>
        <h4>
          {index + 1}. {question.question}
        </h4>
        {question.options.map((option, optionIndex) => {
          const isCorrect = optionIndex === question.correct;
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
                  name={`question-${question.id}`}
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
        {submitted && answers[index] !== question.correct && (
          <p style={{ color: "#5CB338" }}>Answer: {question.options[question.correct]}</p>
        )}
      </div>
    );
  }
  