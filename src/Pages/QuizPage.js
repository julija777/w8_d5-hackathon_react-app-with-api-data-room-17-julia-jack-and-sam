import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Question from "../components/Question";
import Results from "../components/Results";

function QuizPage() {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const currentQuestionIndex = answers.length;
  const currentQuestion = questions?.[currentQuestionIndex];

  // Fetch questions on mount
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

  // Update score as answers state changes
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

  function addAnswer(answer) {
    setAnswers((oldAnswers) => [...oldAnswers, answer]);
  }

  if (!questions) {
    return <Layout title="Loading..." />;
  }

  if (currentQuestionIndex > questions.length - 1) {
    return (
      <Results
        score={score}
        questions={questions}
        answers={answers}
        getCorrectAnswer={getCorrectAnswer}
      />
    );
  }

  return (
    <Question
      question={currentQuestion}
      questionCount={questions.length}
      questionNumer={currentQuestionIndex + 1}
      addAnswer={addAnswer}
    />
  );
}

export default QuizPage;
