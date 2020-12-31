import React from "react";
import "./VideoItem.css";

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div>Nothing Selected</div>;
    }
    const youtubeLink =
      "https://www.youtube.com/embed/" + this.props.video.id.videoId;
    return (
      <div>
        <iframe
          title={this.props.video.snippet.title}
          width="100%"
          height="315"
          src={youtubeLink}
          frameborder="0"
          allowfullscreen></iframe>
        <div className="ui segment">
          <h4 className="header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
