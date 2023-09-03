import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Quiz } from "./pages/Quiz";
import "./index.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz-category" element={<Categories />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};
