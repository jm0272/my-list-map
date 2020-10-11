
import * as types from './actionTypes';

/////////////////// 상세 팝업 START ///////////////////
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
/////////////////// 상세 팝업 END ///////////////////


/////////////////// 스토리 START  ///////////////////
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
/////////////////// 스토리 END ///////////////////


/////////////////// 지도 START  ///////////////////
export const serachMap = (data) => ({
  type : types.SEARCH_MAP,
  data
});

export const setMapSearchContent = (content) => ({
  type : types.SET_MAP_SEARCH_CONTENT,
  content
});
/////////////////// 지도 END  ///////////////////