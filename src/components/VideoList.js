import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const renderedList = this.props.videos.map((video) => {
      return (
        <VideoItem
          video={video}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.medium.url}
          key={video.id.videoId}
          description={video.snippet.description}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default VideoList;
