import Layout from "../Layout";
import decodeHTMLString from "../../utils/decodeHTMLString";

function Question({ question, questionNumber, questionCount, addAnswer }) {
  const decodedQuestion = decodeHTMLString(question.question);

  return (
    <Layout
      title={`Question ${questionNumber} of ${questionCount} : ${decodedQuestion}`}
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

export default Question;
