import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="blogs" element={<HomePage />} />
          <Route path="contact" element={<QuizPage />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
