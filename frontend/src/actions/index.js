
import * as types from './actionTypes';

export const showDetailPopup = (story) => ({
  type : types.SHOW_DETAIL_POPUP,
  story
});

export const hideDetailPopup = () => ({
  type : types.HIDE_DETAIL_POPUP,
});

export const setStoryContent = (content) => ({
  type : types.SET_STORY_CONTENT,
  content
});

export const addStory = (story) => ({
  type : types.ADD_STORY,
  story
});

export const modifyStory = (id, story) => ({
  type : types.MODIFY_STORY,
  id,
  story
});

export const deleteStory = (id) => ({
  type : types.DELETE_STORY,
  id
});