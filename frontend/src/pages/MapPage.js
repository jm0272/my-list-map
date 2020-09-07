import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
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

const MapPage = () => {
  return (
    <Layout>
      <Header></Header>
      <Map></Map>
      <Footer></Footer>
    </Layout>
  );
};

export default MapPage;
