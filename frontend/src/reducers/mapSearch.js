import * as types from '../actions/actionTypes'

const initialState = '';

const mapSearchReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_MAP_SEARCH_CONTENT : 
      return action.content;
    default :
      return state;
  }
}

export default mapSearchReducer;