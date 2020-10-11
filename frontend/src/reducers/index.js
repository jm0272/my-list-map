import { combineReducers } from 'redux';
import editor from './editor';
import storyList from './storyList';
import modal from './modal';
import mapList from './mapList';
import mapSearch from './mapSearch';

export default combineReducers({
  editor,
  storyList,
  modal,
  mapList,
  mapSearch,
});