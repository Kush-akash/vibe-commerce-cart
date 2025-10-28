import React, { useState, useEffect } from "react";
import "./Basket.css";

const Basket = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Get cart from localStorage (or backend later)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCart);
  }, []);

  // Recalculate total whenever cart changes
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotal(newTotal);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  // Increase/decrease qty
  const updateQty = (id, type) => {
    const updatedCart = cart.map(item => {
      if (item._id === id) {
        return {
          ...item,
          qty: type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1),
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="basket-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image || "https://via.placeholder.com/100"} alt={item.name} />
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item._id, "dec")}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item._id, "inc")}>+</button>
                  </div>
                </div>
                <button className="remove" onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={() => window.location.href = "/checkout"}>Go to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
