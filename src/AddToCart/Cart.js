import React from "react";
import "./AddCart.css";
import { useCartContext } from "./CartContext";
const Cart = () => {
  const { cart, removeItem } = useCartContext();
  return (
    <section style={{ minHeight: "100vh" }}>
      <h1 style={{ color: "blue", textAlign: "center" }}>Cart</h1>
      <p style={{ color: "#020189", fontSize: "1.2rem", textAlign: "center" }}>
        Total items selected : {cart.length}
      </p>
      <div className="cartList">
        {cart.map((items) => {
          let { img, name, id, price, quantity } = items;
          return (
            <div className="contents" key={id}>
              <div className="contents-img">
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: "6rem",
                    height: "6rem",
                  }}
                />
              </div>
              <div className="contents-desc">
                <p style={{ margin: "2px" }}>{name}</p>
                <p style={{ fontWeight: "500", margin: "2px" }}>
                  Quantity:{quantity}
                </p>
                <p style={{ margin: "2px" }}>Rs: {price}</p>
              </div>
              <button
                className="btn"
                style={{ margin: "2px" }}
                onClick={() => removeItem(id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
