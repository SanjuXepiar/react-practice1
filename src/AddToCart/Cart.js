const Cart = ({ cart, removeItem }) => {
  return (
    <section>
      <h1>Cart List</h1>
      <p> Total items selected : {cart.length}</p>
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
                    width: "8rem",
                    height: "5rem",
                  }}
                />
              </div>
              <div className="contents-desc">
                <p>{name}</p>
                <button onClick={() => removeItem(id)}>Remove</button>
                <p>Rs: {price}</p>
              </div>
              <p style={{ fontWeight: "500" }}>Quantity:{quantity}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
