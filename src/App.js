import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import Twitter from "./TextCounter/Twitter";
import Password from "./PasswordMatch/Password";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
