import * as types from '../actions/actionTypes'

// address_name: '',
// category_group_code: '',
// category_group_name: '',
// category_name: '',
// distance: '',
// id: '',
// phone: '',
// place_name: '',
// place_url: '',
// road_address_name: '',
// x: '',
// y: '',

const initialState = [];

const mapListReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.SEARCH_MAP : 
      return action.mapList;
    default :
      return state;
  }
}

export default mapListReducer;
