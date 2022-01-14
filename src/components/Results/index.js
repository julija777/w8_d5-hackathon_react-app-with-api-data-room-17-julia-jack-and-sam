import { Link } from "react-router-dom";
import Layout from "../Layout";
import decodeHTMLString from "../../utils/decodeHTMLString";

function Results({ score, questions, answers, getCorrectAnswer }) {
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
            {decodeHTMLString(question.question)}
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

export default Results;
