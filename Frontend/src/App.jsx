import { useEffect, useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [solution, setSolution] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    fetch("https://diagnostic-simulator.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.MyData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAnswer = (option) => {
    setAnswers([...answers, { question: questions[currentIndex].question, answer: option.text }]);

    if (option.text === "No") {
      setSolution(questions[currentIndex].solution);
    } else {
      setSolution(null);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const startDiagnosis = () => {
    setLoading(true);
    setTimeout(() => {
      setShowQuestions(true);
    }, 2000); 
  };

  return (
    <div className="app-container">
      <h1 className="company-name"><span className="company-firstletter">I</span>nnate Gamma Private Limited</h1>
      {!showQuestions ? (
        <div className="home-page">
          <h2><span className="span">W</span>elcome to the Network Diagnostic Simulator</h2>
          <p>Identify and troubleshoot network issues efficiently.</p>
          <button className="start-btn" onClick={startDiagnosis} disabled={loading}>
            {loading ? "Starting..." : "Start Diagnosis"}
          </button>
        </div>
      ) : (
        <>
          <h1 className="heading">Network Diagnostic Simulator</h1>

          {questions.length === 0 ? (
            <p>Loading questions...</p>
          ) : solution ? (
            <div className="solution">
              <h2>Solution:</h2>
              <p>{solution}</p>
            </div>
          ) : currentIndex < questions.length ? (
            <QuestionCard question={questions[currentIndex]} handleAnswer={handleAnswer} />
          ) : (
            <div className="solution">
              <h2>Diagnosis Complete</h2>
              <ul>
                {answers.map((ans, index) => (
                  <li key={index}>
                    <strong>{ans.question}</strong> - {ans.answer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
