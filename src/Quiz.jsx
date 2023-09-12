import { useState } from "react";
import "./quiz.css";

const Quiz = ({ quizQuestion }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    rightAnswer: 0,
    wrongAnswer: 0,
  });
  const [displayResult, setDisplayResult] = useState(false);

  const { question, choices, correctAnswer } = quizQuestion[currentQuestion];

  const handleAnswer = (answer, index) => {
    setAnswerIndex(index);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            rightAnswer: prev.rightAnswer + 1,
          }
        : {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1,
          },
    );

    if (currentQuestion !== quizQuestion.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setDisplayResult(false);
    } else {
      setCurrentQuestion(0);
      setDisplayResult(true);
    }
  };

  return (
    <div className="wrapper">
      {!displayResult ? (
        <div className="box">
          <p className="question-count">
            <span className="count-top">{currentQuestion + 1}</span>
            <span>/{quizQuestion.length}</span>
          </p>

          <h1 className="question-title">{question}</h1>

          <ul className="answer-wrapper">
            {choices.map((choice, index) => (
              <li
                key={choice}
                className={
                  answerIndex === index ? "selected-answer" : "answer-list"
                }
                onClick={() => handleAnswer(choice, index)}
              >
                {choice}
              </li>
            ))}
          </ul>

          <div className="btn-wrapper">
            <button
              className="btn"
              onClick={handleNext}
              type="button"
              disabled={answerIndex === null}
            >
              {currentQuestion === quizQuestion.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result-wrapper">
          <h1 className="result-title">Result Board</h1>

          <div className="result-body">
            <p className="bodyone">
              Total Question: <span>{quizQuestion.length}</span>
            </p>
            <p className="bodytwo">
              Total Score: <span>{result.score}</span>
            </p>
            <p className="bodythree">
              Correct Answers: <span>{result.rightAnswer}</span>
            </p>
            <p className="bodyfour">
              Wrong Answers: <span>{result.wrongAnswer}</span>
            </p>
          </div>

          <div className="footer">
            {result.rightAnswer === quizQuestion.length ? (
              <span className="finish">Congratulations!!! ✨✨✨</span>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  setDisplayResult(false);
                  setCurrentQuestion(0);
                }}
                type="button"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
