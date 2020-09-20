import React, { Component } from "react";
import $scriptjs from 'scriptjs';
import "./Map.scss";

// class Map extends Component {
//   render() {
//     return <div>Map Area</div>;
//   }
// }
const { kakao } = window;

class Map extends Component{

  constructor(props) {
    super();
  }

  componentDidMount(){
    console.log('kakao', kakao);
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
        level: 4 //지도의 레벨(확대, 축소 정도)
    };
    this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }

  render () {
    return (
      <div className="content_map">
        <div id="map" className="map_area"></div>
      </div>
    );
  }
};

export default Map;
