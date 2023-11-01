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
          <Wrapper>
            <Counter />{" "}
          </Wrapper>
        }
      />
      <Route
        path="/twitter"
        element={
          <Wrapper>
            <Twitter />
          </Wrapper>
        }
      />
      <Route
        path="/password"
        element={
          <Wrapper>
            <Password />
          </Wrapper>
        }
      />
      <Route
        path="/alphanumeric"
        element={
          <Wrapper>
            <Alphanumeric />
          </Wrapper>
        }
      />
      <Route
        path="/disable"
        element={
          <Wrapper>
            <Disable />
          </Wrapper>
        }
      />
      <Route
        path="/showhide"
        element={
          <Wrapper>
            <ShowHide />
          </Wrapper>
        }
      />
      <Route
        path="/addcart"
        element={
          <Wrapper title="Add to Cart">
            <AddCart />
          </Wrapper>
        }
      />
      <Route path="cart" element={<Cart />} />
      <Route
        path="/switchTab"
        element={
          <Wrapper>
            <SwitchTab />
          </Wrapper>
        }
      />
      <Route
        path="/toast"
        element={
          <Wrapper>
            <Toast />
          </Wrapper>
        }
      />
      <Route
        path="/strikeThrough"
        element={
          <Wrapper>
            <Todo />
          </Wrapper>
        }
      />
    </Routes>
  );
}

export default App;
