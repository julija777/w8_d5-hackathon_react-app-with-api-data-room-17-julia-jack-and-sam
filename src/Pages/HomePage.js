import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      home
      <Link to="/quiz">
        <button>Start quiz</button>
      </Link>
    </main>
  );
}

export default HomePage;
