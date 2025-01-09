import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>

        <div className="container">
          <div className="row">
            {/* Logo and Contact Information */}
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <Link to="#">
                    <img width="210" src="./src/images/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> MeanChey, Phnom Penh, Cambodia
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +855 16 393 911
                  </p>
                  <p>
                    <strong>EMAIL:</strong> laykuonglim@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Menu and Account Section */}
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/testimonial">Testimonial</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <Link to="/account">Account</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/shopping">Shopping</Link>
                          </li>
                          <li>
                            <Link to="/widget">Widget</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Section */}
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe to our newsletter and get updates regularly.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Copy Section */}
      <div className="cpy_">
        <p>
          © 2025 Kuong, All Rights Reserved
          
        </p>
      </div>
    </>
  );
};

export default Footer;
