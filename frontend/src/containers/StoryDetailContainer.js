import React, { Component } from "react";
import StoryDetail from '../components/modal/StoryDetail/StoryDetail';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class StoryDetailContainer extends Component{

  handleConfirm = async (id, story) => {
    const { storyAction } = this.props;
    await storyAction.modifyStory(id, story);
    storyAction.hideDetailPopup();
  }

  handleCancel = () => {
    const { storyAction } = this.props;
    storyAction.hideDetailPopup();
  }

  handleChangeStory = (content) => {
    const { storyAction } = this.props;
    storyAction.setStoryContent(content);
  }

  render() {
    const { story, visible } = this.props;
    const { handleConfirm, handleCancel, handleChangeStory } = this;

    return (
      <StoryDetail
        story = {story}
        visible = {visible}
        onConfirm = {handleConfirm}
        onCancel = {handleCancel}
        onChange = {handleChangeStory}
      >  
      </StoryDetail>
    )
  }
}

const mapStateToProps = (state) => ({
  story : state.editor,
  visible : state.modal.visible
});

const mapDispatchToProps = (dispatch) => ({
  storyAction : bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetailContainer)