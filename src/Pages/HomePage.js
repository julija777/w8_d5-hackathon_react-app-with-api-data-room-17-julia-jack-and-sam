import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout title="Click the button to get started!">
      <div class="buttons">
        <Link to="/quiz">
          <button className="button">Start quiz</button>
        </Link>
      </div>
    </Layout>
  );
}

export default HomePage;
