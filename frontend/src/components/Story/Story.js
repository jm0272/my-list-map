import React, { Component } from "react";
import "./Story.scss";

// Story 목록 컴포넌트
class Story extends Component{

  componentDidMount() {
    //this.getStoryList();
  }

  render() {
    const { storyList, onModifyStory, onDeleteStory, onDetailPopup } = this.props;

    const list = storyList.map( (story, index) => (
        <StoryItem
          key={index}
          storyData={story}
          onModifyStory={() => onModifyStory(story.id, story)}
          onDeleteStory={() => onDeleteStory(story.id)}
          onDetailPopup={() => onDetailPopup(story)}
        ></StoryItem> 
    ));

    return (
      <div className="content_story">
        <div>my status</div>
        <div className="story_container">
          {list}
        </div>
      </div>
    );
  }
};



// StoryItem 컴포넌트
class StoryItem extends Component{

  render() {
    const { storyData, index, onDeleteStory, onDetailPopup } = this.props;
    console.log('StoryItem component ', this.props);

    return (
      <div 
          key={index}
          className="story_item"
        >
        <div>{storyData.title}</div>
        <div>
          <span>{storyData.content}</span>
          <span><button onClick={() => {
            console.log('상세팝업');
            onDetailPopup();
          }}>상세</button></span>
        </div>
        <div>
          <span>
            <button onClick={()=>{
              console.log('삭제');
              onDeleteStory();
            }}>삭제
            </button>
          </span>
        </div>
      </div>
      
    );
  }
}

export default Story;
