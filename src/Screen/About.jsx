import React from "react";
import Layout from "../Layout/Layout";
import CenterPage from "../Components/Home/CenterPage";
import Bannerl from "../Components/Home/Bannerl";

const About = () => {
  return <Layout>
    <>
    <section class="inner_page_head">
         <div class="container_fuild">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h3>About us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
    <CenterPage />
    <Bannerl />
  </Layout>;
};

export default About;
