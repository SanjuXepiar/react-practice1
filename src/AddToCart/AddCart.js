import React from "react";
import "./AddCart.css";
import Data from "./Data";
// import Cart from "./Cart";
import { useState } from "react";
const AddCart = () => {
  const [cart, setCart] = useState([]);
  //
  const handleCart = (item) => {
    const inCart = cart.some((product) => product.id === item.id);
    if (inCart) {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });
      setCart(updatedCart);
    } else {
      return setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  return (
    <div>
      <h1>Add To Cart</h1>
      <section className="product">
        {Data.map((item) => {
          const { id, img, name, price } = item;
          return (
            <div className="contents" key={id}>
              <div className="contents-img">
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: "12rem",
                    height: "10rem",
                    border: ".1rem solid blue",
                    borderRadius: ".2rem",
                  }}
                />
              </div>
              <div className="contents-desc">
                <h5>{name}</h5>
                <p style={{ fontWeight: "500" }}>Rs: {price}</p>
              </div>
              <button onClick={() => handleCart(item)}>Add to Cart</button>
              <div
                style={{
                  height: ".2rem",
                  width: "20%",
                  background: "green",
                  margin: "0 auto",
                  borderRadius: ".3rem",
                }}
              ></div>
            </div>
          );
        })}
      </section>
      <div
        style={{
          height: ".4rem",
          width: "80%",
          background: "red",
          margin: "0 auto",
          marginTop: "1rem",
        }}
      ></div>
      {/* ............. */}
      <div className="cartList">
        <h1>Cart List</h1>
        <p> Total items selected : {cart.length}</p>
        {cart.map((items) => {
          return (
            <div className="contents" key={items.id}>
              <div className="contents-img">
                <img
                  src={items.img}
                  alt={items.name}
                  style={{
                    width: "12rem",
                    height: "10rem",
                    border: ".1rem solid blue",
                    borderRadius: ".2rem",
                  }}
                />
              </div>
              <div className="contents-desc">
                <h5>{items.name}</h5>
                <p style={{ fontWeight: "500" }}>Rs: {items.price}</p>
              </div>
              <p>Quantity:{items.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddCart;
