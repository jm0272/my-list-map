import * as types from '../actions/actionTypes'

let id = 0;

const initialState = {
  storyList : [{
    id : ++id,
    title : 'Sample 1',
    content : '내용',
    latitude : '35',
    longitude : '39'
  }],
};

const storyReducer = (state = initialState, action) => {

  console.log('call reducer state : ', state);
  console.log('call reducer action : ', action);

  switch(action.type) {

    // case types.SET_STORY_CONTENT : 
    //   return(
    //     state.setState({});
    //   );
    
    case types.ADD_STORY : 
      return ({
        storyList : [
          ...state.storyList,
          {
            id : ++id,
            title : action.story.title,
            content : action.story.content,
            latitude : action.story.latitude,
            longitude : action.story.longitude
          }
        ]
      });

    case types.MODIFY_STORY : 
      const modifyIndex = state.storyList.findIndex((story) => (story.id === action.story.id));
      return ({
        storyList : [
          ...state.storyList.slice(0, modifyIndex),
          {
            id : action.story.title,
            title : action.story.title,
            content : action.story.content,
            latitude : action.story.latitude,
            longitude : action.story.longitude
          },
          ...state.storyList.slice(modifyIndex+1, state.storyList.length-1),
        ]
      });

    case types.DELETE_STORY : 
      const deleteIndex = state.storyList.findIndex((story) => (story.id === action.id));
      return ({
        storyList : [
          ...state.storyList.slice(0, deleteIndex),
          ...state.storyList.slice(deleteIndex+1, state.storyList.length-1),
        ]
      });

    default :
      return {
        storyList : state.storyList
      }

  }
}

export default storyReducer;
