// import React, { Component } from "react";
// import Map from '../components/Map';
// import * as actions from '../actions';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


// class MapContainer extends Component{

//   handleChangeSearch = (e) => {
//     const { value } = e.target;
//     const { mapAction } = this.props;
//     mapAction.setMapSearchContent(value);
//   }

//   handleSearchMap = (data) => {
//     const { mapAction } = this.props;
//     mapAction.serachMap(data);
//   }

//   render() {
//     const { mapList, mapSearch } = this.props;
//     const { handleChangeSearch, handleSearchMap } = this;

//     return (
//       <Map
//         mapList = {mapList}
//         mapSearch = {mapSearch}
//         onChangeSearch = {handleChangeSearch}
//         onSearchMap = {handleSearchMap}
//       >
//       </Map>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   mapList : state.mapList,
//   mapSearch : state.mapSearch
// });

// const mapDispatchToProps = (dispatch) => ({
//   mapAction : bindActionCreators(actions, dispatch)
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MapContainer)