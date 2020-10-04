import { combineReducers } from 'redux';
import editor from './editor';
import storyList from './storyList';
import modal from './modal';

export default combineReducers({
  editor,
  storyList,
  modal
});