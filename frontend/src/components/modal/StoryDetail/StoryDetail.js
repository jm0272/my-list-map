import React, { Component } from "react";
import "./StoryDetail.scss";

class StoryDetail extends Component{

  render () {
    const { story, visible, onConfirm, onCancel, onChange } = this.props;
    console.log('StoryDetail props : ', this.props);
    if(!visible){
      return null;
    }
    
    return (
      <div className="modal" id="modal">
        <h2>{story.title}</h2>
        <div className="content">
          <textarea 
            style={{ 'width':'100%' }}
            value={story.content}
            onChange={(e)=> {
              onChange(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="actions">
          <button 
            className="toggle-button" 
            onClick={
              () => {
                console.log('story : ', story);
                onConfirm(story.id, story);
              }
            }
          >확인</button>
          <button 
            className="toggle-button" 
            onClick={onCancel}
          >취소</button>
        </div>
      </div>
    );
  }
};

export default StoryDetail;
