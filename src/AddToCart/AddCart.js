import React from "react";
import "./AddCart.css";
import Data from "./Data";
import Cart from "./Cart";
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
  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };
  return (
    <div className="shoppingContents">
      <h1 style={{ marginTop: "0" }}>Add To Cart</h1>
      <section className="products">
        {Data.map((item) => {
          const { id, img, name, price } = item;
          return (
            <div className="contents" key={id}>
              <div className="contents-img">
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: "8rem",
                    height: "5rem",
                  }}
                />
              </div>
              <div className="contents-desc">
                <p>{name}</p>
                <button onClick={() => handleCart(item)}>Add to Cart</button>
                <p>Rs: {price}</p>
              </div>
            </div>
          );
        })}
      </section>
      <div
        style={{
          height: ".4rem",
          width: "100%",
          background: "red",
          marginTop: "1rem",
        }}
      ></div>
      <Cart cart={cart} removeItem={removeItem} />
    </div>
  );
};

export default AddCart;
