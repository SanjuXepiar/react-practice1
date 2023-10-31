import React, { useState, useEffect, createContext, useContext } from "react";
const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    setCart(cartData || []);
  }, []);
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
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity: 1 }])
      );
    }
  };
  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };
  return (
    <>
      <CartContext.Provider value={{ cart, handleCart, removeItem }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
