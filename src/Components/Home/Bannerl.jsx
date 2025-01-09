import React from "react";
import { Link } from "react-router-dom";

const Bannerl = () => {
  return (
    <section className="arrival_section">
      <div className="container">
        <div className="box">
          <div className="arrival_bg_box">
            <img
              src="./src/images/arrival-bg.png"
              alt="New Arrivals Background"
            />
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="heading_container remove_line_bt">
                <h2>#NewArrivals</h2>
              </div>
              <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                Vitae fugiat laboriosam officia perferendis provident aliquid
                voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique
                ex unde!
              </p>
              <Link to="/shop" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannerl;
