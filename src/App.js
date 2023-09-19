import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./1.Counter/Counter";
function App() {
  return (
    <div className="App">
      <h1>The links given below leads to my projects</h1>
      <Link to="/counter">
        <h4>Counter</h4>
      </Link>

      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
