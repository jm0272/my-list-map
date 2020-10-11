import React, { Component } from "react";
import { deleteStory } from '../../actions';
import "./Map.scss";

const { kakao } = window;
let map;

class Map extends Component{

  constructor(props) {
    super();

    //console.log('constructor >>', props);
    // this.mapList = props.mapList;
    //this.mapSearch = props.mapSearch;
    // this.onChangeSearch = props.onChangeSearch;
    // this.onSearchMap = props.onSearchMap;

  }

  componentDidMount() {
    this.setKakaoMap();
  }

  // 카카오지도 초기화
  setKakaoMap = () => {

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
        level: 4 //지도의 레벨(확대, 축소 정도)
    };
    map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        //position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
      // 클릭한 위도, 경도 정보
      const latlng = mouseEvent.latLng; 
      // 마커 위치를 클릭한 위치로 이동
      marker.setPosition(latlng);
      let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      message += '경도는 ' + latlng.getLng() + ' 입니다';
      console.log(`${message}`);
    });

  }

  handleSearch = (mapSearch) => {
    const input = this.props.mapSearch;

    if(input === '' || input === null){
      alert('검색어를 입력하세요');
      return false;
    }
    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places(); 

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(input, this.placesSearchCB); 
  }

  placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        console.log('jaemoon : >> data', data);

        for (var i=0; i<data.length; i++) {
            this.displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
  }

  // 지도에 마커를 표시하는 함수입니다
  displayMarker = (place) => {
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});      

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
  }

  render () {
    console.log('render this', this);
    const { mapSearch, onChangeSearch, onSearchMap } = this.props;
    const { handleSearch } = this; 

    return (
      <div>
        <div className="search_map">
          <input type="text" onChange={onChangeSearch} value={mapSearch}></input>
          {/* <button onClick={onSearchMap}>검색</button> */}
          <button onClick={handleSearch}>검색</button>
          {/* <button onClick={() => (handleSearch(mapSearch))}>검색</button> */}
        </div>

        <div className="content_map"> 
          <div id="map" className="map_area"></div>
        </div>
      </div>
    );
  }
};

export default Map;
