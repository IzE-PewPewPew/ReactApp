import React from "react";

const Last = () => {
  return (
    <>
      {/* Subscribe Section */}
      <section className="subscribe_section">
        <div className="container-fuild">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form ">
                  <div className="heading_container heading_center">
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Customer's Testimonial</h2>
          </div>
          <div
            id="carouselExample3Controls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="./src/images/client.jpg" alt="Client" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Anna Trevor</h5>
                    <h6>Customer</h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error
                      quibusdam? Atque animi sint unde quis reprehenderit, et,
                      perspiciatis, debitis totam est deserunt eius officiis
                      ipsum ducimus ad labore modi voluptatibus accusantium
                      sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="./src/images/client.jpg" alt="Client" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Anna Trevor</h5>
                    <h6>Customer</h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error
                      quibusdam? Atque animi sint unde quis reprehenderit, et,
                      perspiciatis, debitis totam est deserunt eius officiis
                      ipsum ducimus ad labore modi voluptatibus accusantium
                      sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel_btn_box">
              <a
                className="carousel-control-prev"
                href="#carouselExample3Controls"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExample3Controls"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Last;
