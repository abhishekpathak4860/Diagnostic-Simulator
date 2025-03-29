import React from "react";

const QuestionCard = ({ question, handleAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button className="choice-btn" key={option._id} onClick={() => handleAnswer(option)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
