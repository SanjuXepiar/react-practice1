import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import Twitter from "./TextCounter/Twitter";
import Password from "./PasswordMatch/Password";
import Alphanumeric from "./AlphanumericPassword/Alphanumeric";
import Disable from "./DisableSubmit/Disable";
import ShowHide from "./ShowPassword/ShowHide";
import AddCart from "./AddToCart/AddCart";
import Cart from "./AddToCart/Cart";
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
          <Wrapper heading="Counter">
            <Counter />
          </Wrapper>
        }
      />
      <Route
        path="/twitter"
        element={
          <Wrapper heading="Twitter">
            <Twitter />
          </Wrapper>
        }
      />
      <Route
        path="/password"
        element={
          <Wrapper heading="Password-Match">
            <Password />
          </Wrapper>
        }
      />
      <Route
        path="/alphanumeric"
        element={
          <Wrapper heading="Alphanumeric-Password">
            <Alphanumeric />
          </Wrapper>
        }
      />
      <Route
        path="/disable"
        element={
          <Wrapper heading="Password-Disabled">
            <Disable />
          </Wrapper>
        }
      />
      <Route
        path="/showhide"
        element={
          <Wrapper heading="Password-Show & Hide">
            <ShowHide />
          </Wrapper>
        }
      />
      <Route
        path="/addcart"
        element={
          <Wrapper heading="Add to Cart">
            <AddCart />
          </Wrapper>
        }
      />
      <Route path="cart" element={<Cart />} />
      <Route
        path="/switchTab"
        element={
          <Wrapper heading="Switch-Tab">
            <SwitchTab />
          </Wrapper>
        }
      />
      <Route
        path="/toast"
        element={
          <Wrapper heading="Toast">
            <Toast />
          </Wrapper>
        }
      />
      <Route
        path="/strikeThrough"
        element={
          <Wrapper heading="Todo-List">
            <Todo />
          </Wrapper>
        }
      />
    </Routes>
  );
}

export default App;
