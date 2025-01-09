import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Api = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Add product to cart logic (e.g., localStorage or API)
    console.log("Added to cart:", product);
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Products</span>
          </h2>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a
                      href="#"
                      className="option1"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </a>
                    <Link to={`/product/${product.id}`} className="option2">
                      Buy Now
                    </Link>
                  </div>
                </div>
                <div className="img-box">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="detail-box">
                  <h5>{product.title}</h5>
                  <h6>${product.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <Link to="/products">View All Products</Link>
        </div>
      </div>
    </section>
  );
};

export default Api;
