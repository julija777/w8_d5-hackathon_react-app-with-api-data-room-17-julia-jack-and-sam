import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

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
      const question = questions[index];
      const correctAnswer = getCorrectAnswer(question);

      return correctAnswer === userAnswer ? acc + 1 : acc;
    };

    const newScore = answers.reduce(reducer, 0);
    setScore(newScore);
  }, [answers, questions]);

  function getCorrectAnswer(question) {
    const correctAnswerString = question.correct_answer;
    const correctAnswer = correctAnswerString === "True" ? true : false;
    return correctAnswer;
  }

  function decodeString(str) {
    const element = document.createElement("div");
    element.innerHTML = str;
    return element.textContent;
  }

  function addAnswer(answer) {
    setAnswers((oldAnswers) => [...oldAnswers, answer]);
  }

  if (!questions) {
    return <Layout title="Loading..." />;
  }

  if (currentQuestionIndex > questions.length - 1) {
    return (
      <Layout
        title={`
      ${score} of ${questions.length} correct!`}
      >
        <ol>
          {questions.map((question, index) => (
            <li
              className={
                getCorrectAnswer(question) === answers[index]
                  ? "correct"
                  : "incorrect"
              }
            >
              {decodeString(question.question)}
            </li>
          ))}
        </ol>
        <div class="buttons">
          <Link to="/">
            <button class="button">Back to home</button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`Question ${currentQuestionIndex + 1} of ${
        questions.length
      } : ${decodeString(currentQuestion.question)}`}
    >
      <div class="buttons">
        <button class="button" onClick={() => addAnswer(true)}>
          True
        </button>
        <button class="button" onClick={() => addAnswer(false)}>
          False
        </button>
      </div>
    </Layout>
  );
}

export default QuizPage;
