import * as types from '../actions/actionTypes'

const initialState = {
  visible : false
};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SHOW_DETAIL_POPUP : 
      return {
        visible   : true
      }
    case types.HIDE_DETAIL_POPUP : 
      return {
        visible   : false
      }
    default :
      return state;
  }
}

export default modalReducer;