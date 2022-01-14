import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div class="container">
      <main class="page">
        <h1>Click the button to get started!</h1>
        <div class="buttons">
          <Link to="/quiz">
            <button className="button">Start quiz</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
