import React, { Component } from "react";
import Story from '../components/Story';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class StoryContainer extends Component{

  handleModifyStory = (id, story) => {
    console.log('handleModifyStory call', id, story);
    // const { storyAction } = this.props;
    // storyAction.modifyStory(id, story);
    const { modifyStory } = this.props;
    modifyStory(id, story);
  }

  handleDeleteStory = (id) => {
    console.log('handleDeleteStory call', id);
    // const { storyAction } = this.props;
    // storyAction.deleteStory(id);
    const { deleteStory } = this.props;
    deleteStory(id);
  }

  render() {
    const { storyList } = this.props;
    const { handleModifyStory, handleDeleteStory } = this;

    return (
      <Story
        storyList = {storyList}
        onModifyStory = {handleModifyStory}
        onDeleteStory = {handleDeleteStory}
      >  
      </Story>
    )
  }
}

// const mapStateToProps = (state) => ({
//   storyList : state.storyList
// });

const mapStateToProps = (state) => {
  console.log('state ::: ', state);
  return {
    storyList : state.storyList
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   storyAction : bindActionCreators(actions, dispatch)
// });

const mapDispatchToProps = (dispatch) => ({
  modifyStory : (id, story) => (dispatch(actions.modifyStory(id, story))),
  deleteStory : (id) => (dispatch(actions.deleteStory(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryContainer)