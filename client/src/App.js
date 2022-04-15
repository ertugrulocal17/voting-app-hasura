import { Routes, Route, Link } from "react-router-dom";
import Questions from "./pages/Questions";
import NewQuestion from "./pages/New";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Questions</Link>
        <Link to="new">New Question</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="new" element={<NewQuestion />} />
      </Routes>
    </div>
  );
}

export default App;
