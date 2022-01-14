import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizPage() {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const currentQuestionIndex = answers.length;
  const currentQuestion = questions?.[currentQuestionIndex];

  useEffect(() => {
    async function updateQuestions() {
      const result = await fetch(
        "https://opentdb.com/api.php?amount=10&type=boolean"
      );
      const data = await result.json();

      setQuestions(data.results);
    }

    updateQuestions();
  }, []);

  useEffect(() => {
    const reducer = (acc, userAnswer, index) => {
      const correctAnswerString = questions[index].correct_answer;
      const correctAnswer = correctAnswerString === "True" ? true : false;

      return correctAnswer === userAnswer ? acc + 1 : acc;
    };

    const newScore = answers.reduce(reducer, 0);
    setScore(newScore);
  }, [answers]);

  function decodeString(str) {
    const element = document.createElement("div");
    element.innerHTML = str;
    return element.textContent;
  }

  function addAnswer(answer) {
    setAnswers((oldAnswers) => [...oldAnswers, answer]);
  }

  if (!questions) {
    return <main>...loading!</main>;
  }

  if (currentQuestionIndex > questions.length - 1) {
    // score with conditional message
    // correct and incorrect answers

    return (
      <main>
        <h2>
          {score} of {questions.length} correct!
        </h2>
        <ol>{questions.map( => {
        
        })} </ol>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h2>
        Question {currentQuestionIndex + 1} of {questions.length}:{" "}
        {decodeString(currentQuestion.question)}
      </h2>
      <button onClick={() => addAnswer(true)}>True</button>
      <button onClick={() => addAnswer(false)}>False</button>
    </main>
  )
}

export default QuizPage;
