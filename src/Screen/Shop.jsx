import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";

const Shop = () => {
  const [pageDetails, setPageDetails] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch page details
    axios.get("http://localhost:3000/api/page-details").then((response) => {
      setPageDetails(response.data);
    });

    // Fetch products
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="hero_area">
        {/* Page Banner Section */}
        {pageDetails && (
          <section className="inner_page_head">
            <div className="container_fuild">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <h3>{pageDetails.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Product Section */}
        <section className="product_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Products</span>
              </h2>
            </div>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        <a href="#" className="option1">
                          Add To Cart
                        </a>
                        <a href="#" className="option2">
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="img-box">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="detail-box">
                      <h5>{product.name}</h5>
                      <h6>${product.price.toFixed(2)}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-box">
              <a href="#">View All Products</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;
