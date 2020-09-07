import React, { Component } from "react";
import "./Map.css";

// class Map extends Component {
//   render() {
//     return <div>Map Area</div>;
//   }
// }

const Map = () => {
  const dataList = [];

  for (let i = 0; i < 20; i++) {
    dataList.push("data" + i);
  }

  console.log('dataList ', dataList);

  return (
    <div className="content_map">
      {
        dataList.map(
          (item) => (<div>item</div>)
        )
      }
    </div>
  );
};

export default Map;
