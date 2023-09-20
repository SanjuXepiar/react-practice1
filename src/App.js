import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import Twitter from "./TextCounter/Twitter";
import Password from "./PasswordMatch/Password";
import Alphanumeric from "./AlphanumericPassword/Alphanumeric";
import Disable from "./DisableSubmit/Disable";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/password" element={<Password />} />
        <Route path="/alphanumeric" element={<Alphanumeric />} />
        <Route path="/disable" element={<Disable />} />
      </Routes>
    </div>
  );
}

export default App;
