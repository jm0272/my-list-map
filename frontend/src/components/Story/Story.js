import React, { Component } from "react";
import "./Story.scss";



class Story extends Component{
  
  // state = {
  //   storyList : []
  // }
  
  // getStoryList = () => {
  //   let list = [];
  
  //   // List 불러오기
  //   for (let i = 0; i < 10; i++) {
  //     const obj = {
  //       id : i,
  //       title : 'Title' + i,
  //       content : '내용' + i,
  //       latitude : 35,  // 위도
  //       longitude : 129 // 경도
  //     }
  
  //     list.push(obj);
  //   }

  //   this.setState({
  //     storyList : list
  //   });
  // }

  componentDidMount() {
    //this.getStoryList();
  }

  render() {
    const { storyList, onModifyStory, onDeleteStory } = this.props;

    const list = storyList.map( (story, index) => (
        <StoryItem
          key={index}
          storyData={story}
          onModifyStory={() => onModifyStory(story.id, story)}
          onDeleteStory={() => onDeleteStory(story.id)}
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

class StoryItem extends Component{

  render() {
    const { storyData, index, onModifyStory, onDeleteStory } = this.props;
    console.log('StoryItem component ', this.props);

    return (
      <div 
          key={index}
          className="story_item"
        >
        <div>{storyData.title}</div>
        <div>
          <span>{storyData.content}</span>
          {/* <span><input type="text" value={storyData.content} name="content" onChange={}/></span> */}
          <span><button>상세</button></span>
        </div>
        <div>
          <span>
            <button onClick={()=>{
              //console.log(`위도:${storyData.latitude}, 경도:${storyData.longitude}`);
              console.log('수정');
              onModifyStory();
            }}>수정
            </button>
          </span>
          <span>
            <button onClick={()=>{
              //console.log(`위도:${storyData.latitude}, 경도:${storyData.longitude}`);
              console.log('삭제');
              onDeleteStory();
            }}>삭제
            </button>
          </span>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Story;
