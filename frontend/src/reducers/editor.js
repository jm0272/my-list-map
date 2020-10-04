import * as types from '../actions/actionTypes'

const initialState = {
  id : -1,
  title : '',
  content : '',
  latitude : '',
  longitude : ''
};

const editorReducer = (state = initialState, action) => {
  console.log('editorReducer', action);
  switch(action.type) {
    case types.SHOW_DETAIL_POPUP : 
      return action.story;
    case types.SET_STORY_CONTENT : 
      return Object.assign({}, state, {content : action.content})
    default :
      return state;
  }
}

export default editorReducer;