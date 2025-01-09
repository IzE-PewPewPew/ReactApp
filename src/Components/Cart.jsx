import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout"; // Assuming you have a Layout component
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]); // State to hold the cart products
  const [shippingCost, setShippingCost] = useState(0); // Default shipping cost
  const [selectedShipping, setSelectedShipping] = useState(""); // Selected shipping method
  const navigate = useNavigate();

  // Fetch cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Handle removing an item from the cart
  const removeFromCart = (productId, color, size) => {
    const updatedCart = cart.filter(
      (item) =>
        item.id !== productId || item.color !== color || item.size !== size
    );

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state to reflect the changes
    setCart(updatedCart);
  };

  // Handle quantity change
  const handleQuantityChange = (productId, color, size, quantity) => {
    if (quantity < 1) return; // Prevent quantities less than 1
    const updatedCart = cart.map((item) =>
      item.id === productId && item.color === color && item.size === size
        ? { ...item, quantity }
        : item
    );

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state to reflect the changes
    setCart(updatedCart);
  };

  // Handle clearing the cart
  const clearCart = () => {
    localStorage.removeItem("cart"); // Remove cart from localStorage
    setCart([]); // Clear the state
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle shipping selection change
  const handleShippingChange = (shippingType) => {
    setSelectedShipping(shippingType);
    if (shippingType === "free") {
      setShippingCost(0); // Free shipping
    } else if (shippingType === "next-day") {
      setShippingCost(10); // $10 for next-day delivery
    } else if (shippingType === "pickup") {
      setShippingCost(0); // Free in-store pickup
    }
  };

  return (
    <Layout>
      {/* Cart Page Section Begin */}
      <div className="cart-page">
        <div className="container">
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th className="product-h">Product</th>
                  <th>Price</th>
                  <th className="quan">Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Your cart is empty.
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => (
                    <tr key={`${item.id}-${item.color}-${item.size}`}>
                      <td className="product-col">
                        <img src={item.image} alt={item.title} />
                        <div className="p-title">
                          <h5>{item.title}</h5>
                        </div>
                      </td>
                      <td className="price-col">${item.price}</td>
                      <td className="quantity-col">
                        <div className="pro-qty">
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                item.color,
                                item.size,
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </div>
                      </td>
                      <td className="total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="product-close">
                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.color, item.size)
                          }
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="cart-btn">
            <div className="row">
              <div className="col-lg-12 text-right">
                <button
                  className="site-btn clear-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Method Section */}
        <div className="shopping-method">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shipping-info">
                  <h5>Choose a shipping method</h5>
                  <div className="chose-shipping">
                    <div className="cs-item">
                      <input
                        type="radio"
                        name="shipping"
                        id="free"
                        checked={selectedShipping === "free"}
                        onChange={() => handleShippingChange("free")}
                      />
                      <label
                        htmlFor="free"
                        className={selectedShipping === "free" ? "active" : ""}
                      >
                        Free Standard shipping
                        <span>Estimate for New York</span>
                      </label>
                    </div>
                    <div className="cs-item">
                      <input
                        type="radio"
                        name="shipping"
                        id="next-day"
                        checked={selectedShipping === "next-day"}
                        onChange={() => handleShippingChange("next-day")}
                      />
                      <label
                        htmlFor="next-day"
                        className={
                          selectedShipping === "next-day" ? "active" : ""
                        }
                      >
                        Next Day delivery $10
                      </label>
                    </div>
                    <div className="cs-item last">
                      <input
                        type="radio"
                        name="shipping"
                        id="pickup"
                        checked={selectedShipping === "pickup"}
                        onChange={() => handleShippingChange("pickup")}
                      />
                      <label
                        htmlFor="pickup"
                        className={
                          selectedShipping === "pickup" ? "active" : ""
                        }
                      >
                        In Store Pickup - Free
                      </label>
                    </div>
                  </div>
                </div>

                <div className="total-info">
                  <div className="total-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Total</th>
                          <th>Subtotal</th>
                          <th>Shipping</th>
                          <th className="total-cart">Total Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="total">
                            ${calculateTotal().toFixed(2)}
                          </td>
                          <td className="sub-total">
                            ${calculateTotal().toFixed(2)}
                          </td>
                          <td className="shipping">${shippingCost}</td>
                          <td className="total-cart-p">
                            ${(calculateTotal() + shippingCost).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <button
                        className="primary-btn chechout-btn"
                        onClick={() => navigate("/checkout")}
                      >
                        Proceed to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shopping Method Section End */}
      </div>
      {/* Cart Page Section End */}
    </Layout>
  );
};

export default Cart;
