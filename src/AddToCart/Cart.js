import React from "react";

const Cart = ({ cart }) => {
  return (
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
  );
};

export default Cart;
