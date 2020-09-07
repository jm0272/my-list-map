import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Story from "../components/Story";
import Layout from "../components/Layout";

// class Story extends Component {
//   render() {
//     return (
//       <div>
//         Story 영역
//         <input type="text"></input>
//         <div></div>
//       </div>
//     );
//   }
// }

const StoryPage = () => {
  return (
    <Layout>
      <Header></Header>
      <Story></Story>
      <Footer></Footer>
    </Layout>
  );
};

export default StoryPage;
