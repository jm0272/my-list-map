import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//import Story from "../components/Story";
import StoryContainer from "../containers/StoryContainer.js";
import StoryDetailContainer from "../containers/StoryDetailContainer.js";
import Layout from "../components/Layout";

const StoryPage = () => {
  return (
    <Layout>
      <Header></Header>
      <StoryContainer></StoryContainer>
      <StoryDetailContainer></StoryDetailContainer>
      <Footer></Footer>
    </Layout>
  );
};

export default StoryPage;
