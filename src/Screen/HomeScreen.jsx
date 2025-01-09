import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import CenterPage from "../Components/Home/CenterPage";
import Last from "../Components/Home/Last";
import Api from "../Api/Api";
import Bannerl from "../Components/Home/Bannerl";

const HomeScreen = () => {
  return (
    <Layout>
      {/* <!-- Header Info Begin --> */}
      
      <Banner />
      <CenterPage />
      <Bannerl/>
      <Api />
      <Last />
    </Layout>
  );
};

export default HomeScreen;
