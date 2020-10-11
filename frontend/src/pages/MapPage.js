import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import MapContainer from "../containers/MapContainer.js";
import Layout from "../components/Layout";

const MapPage = () => {
  return (
    <Layout>
      <Header></Header>
      <MapContainer></MapContainer>
      <Footer></Footer>
    </Layout>
  );
};

export default MapPage;
