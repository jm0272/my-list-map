import * as types from '../actions/actionTypes'

let id = 0;

const initialState = [
  {
    id : ++id,
    title : 'Sample 1',
    content : '내용',
    latitude : '35',
    longitude : '39'
  },
  {
    id : ++id,
    title : 'Sample 2',
    content : '내용',
    latitude : '35',
    longitude : '39'
  }
];

const storyReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.ADD_STORY : 
      return [
      ...state,
        {
          id : ++id,
          title : action.story.title,
          content : action.story.content,
          latitude : action.story.latitude,
          longitude : action.story.longitude
        }
      ];

    case types.MODIFY_STORY : 
      const modifyIndex = state.findIndex((story) => (story.id === action.story.id));
      return [
        ...state.slice(0, modifyIndex),
        {
          id : action.story.title,
          title : action.story.title,
          content : action.story.content,
          latitude : action.story.latitude,
          longitude : action.story.longitude
        },
        ...state.slice(modifyIndex+1, state.length),
      ]

    case types.DELETE_STORY : 
      const deleteIndex = state.findIndex((story) => (story.id === action.id));
      return [
        ...state.slice(0, deleteIndex),
        ...state.slice(deleteIndex+1, state.length),
      ]

    default :
      return state;
  }
}

export default storyReducer;
