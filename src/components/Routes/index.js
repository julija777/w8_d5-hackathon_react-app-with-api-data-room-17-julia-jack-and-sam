import { Routes as Switch, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import QuizPage from "../../Pages/QuizPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Switch>
  );
}

export default Routes;
