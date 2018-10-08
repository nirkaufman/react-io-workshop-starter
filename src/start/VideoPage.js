import React, {Component} from 'react';
import VideoPlayer from "../end/VideoPlayerEnd";


class VideoPage extends Component {
  render() {
    return (
      <div>
        <h2>Video Player</h2>
        <VideoPlayer file={"videos/people.mp4"} />
      </div>
    );
  }
}

export default VideoPage;
