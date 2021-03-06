import React, { Component } from "react";
import Story from '../components/Story';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class StoryContainer extends Component{

  handleDeleteStory = (id) => {
    const { storyAction } = this.props;
    storyAction.deleteStory(id);
  }

  handleDetailPopup = (story) => {
    const { storyAction } = this.props;
    storyAction.showDetailPopup(story);
  }

  render() {
    const { storyList } = this.props;
    const { handleDeleteStory, handleDetailPopup } = this;

    return (
      <Story
        storyList = {storyList}
        onDeleteStory = {handleDeleteStory}
        onDetailPopup = {handleDetailPopup}
      >  
      </Story>
    )
  }
}

const mapStateToProps = (state) => ({
  storyList : state.storyList,
});

const mapDispatchToProps = (dispatch) => ({
  storyAction : bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryContainer)