import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import Select from "react-select"; // Import React-Select
import "./Shopig.css"; // Import the CSS file

const Shopig = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ value: "All", label: "All" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);

        // Extract categories dynamically and format for React-Select
        const productCategories = [
          { value: "All", label: "All" },
          ...[...new Set(response.data.map((product) => product.category))].map((category) => ({
            value: category,
            label: category,
          })),
        ];
        setCategories(productCategories);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Handle category filter
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    if (selectedOption.value === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedOption.value));
    }
  };

  // Custom styles for React-Select
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: "25px",
      border: "2px solid #ddd",
      padding: "5px",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        borderColor: "#ff5722",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "10px",
      marginTop: "5px",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    }),
    option: (base, state) => ({
      ...base,
      padding: "10px",
      backgroundColor: state.isFocused ? "#ff5722" : "#fff",
      color: state.isFocused ? "#fff" : "#333",
      cursor: "pointer",
    }),
  };

  return (
    <Layout>
      <div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <section className="product_section layout_padding">
              <div className="container">
                {/* Sort and Filter */}
                <div className="categories-controls">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="categories-filter">
                        <div className="cf-left">
                          <Select
                            options={categories}
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            styles={customStyles}
                            placeholder="Select Category"
                          />
                        </div>
                        <div className="cf-right">
                          <span>{filteredProducts.length} Products</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="row">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
                      <div className="box">
                        <div className="option_container">
                          <div className="options">
                            <button className="option1">Add to Cart</button>
                            <button className="option2">Buy Now</button>
                          </div>
                        </div>
                        <div className="img-box">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="detail-box">
                          <h5>{product.title}</h5>
                          <h6>${product.price.toFixed(2)}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Shopig;
