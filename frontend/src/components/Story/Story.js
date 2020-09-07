import React from "react";
import "./Story.css";

const Story = () => {
  let dataList = [];

  for (let i = 0; i < 50; i++) {
    dataList.push("data" + i);
  }

  dataList = dataList.map(
    (item, index) => <div key={index}>${item} <input type="text"></input></div>
  );

  return (
    <div className="content_story">
      {dataList}
    </div>
  );
};

export default Story;
