import React, { useEffect, useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCart);

    const newTotal = savedCart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    setTotal(newTotal);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all fields!");
      return;
    }

    // Mock order confirmation
    const orderData = {
      ...formData,
      total,
      date: new Date().toLocaleString(),
      items: cart,
    };

    console.log("Order confirmed:", orderData);

    localStorage.removeItem("cartItems");
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Thank you, {formData.name}!</p>
        <p>Order Total: ₹{total}</p>
        <p>Date: {new Date().toLocaleString()}</p>
        <button onClick={() => (window.location.href = "/products")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-grid">
        {/* Left: Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter your delivery address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Place Order</button>
        </form>

        {/* Right: Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item._id}>
                  {item.name} × {item.qty} = ₹{item.price * item.qty}
                </li>
              ))}
            </ul>
          )}
          <h4>Total: ₹{total}</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
