import React from "react";
import "./AddCart.css";
import Data from "./Data";
import { useCartContext } from "./CartContext";
const AddCart = () => {
  const { handleCart } = useCartContext();
  return (
    <div className="shoppingContents">
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
                    width: "6rem",
                    height: "6rem",
                  }}
                />
              </div>
              <div className="contents-desc">
                <p style={{ margin: "2px" }}>{name}</p>
                <button
                  className="btn"
                  style={{ margin: "2px" }}
                  onClick={() => handleCart(item)}
                >
                  Add to Cart
                </button>
                <p style={{ margin: "2px" }}>Rs: {price}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AddCart;
