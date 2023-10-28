import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import Twitter from "./TextCounter/Twitter";
import Password from "./PasswordMatch/Password";
import Alphanumeric from "./AlphanumericPassword/Alphanumeric";
import Disable from "./DisableSubmit/Disable";
import ShowHide from "./ShowPassword/ShowHide";
import AddCart from "./AddToCart/AddCart";
import SwitchTab from "./SwitchTabs/SwitchTab";
import Toast from "./Show-Toast/Toast";
import Todo from "./Todo-StrikeThrough/Todo";
import Home from "./Home/Home";
import Wrapper from "./Wrapper/Wrapper";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/counter"
        element={
          <Wrapper>
            <Counter />
          </Wrapper>
        }
      />
      <Route path="/twitter" element={<Twitter />} />
      <Route path="/password" element={<Password />} />
      <Route path="/alphanumeric" element={<Alphanumeric />} />
      <Route path="/disable" element={<Disable />} />
      <Route path="/showhide" element={<ShowHide />} />
      <Route path="/addcart" element={<AddCart />} />
      <Route path="/switchTab" element={<SwitchTab />} />
      <Route path="/toast" element={<Toast />} />
      <Route path="/strikeThrough" element={<Todo />} />
    </Routes>
  );
}

export default App;
