import React, {Component} from 'react';
import VideoPlayer from "../end/VideoPlayerEnd";

class VideoPage extends Component {
  render() {
    return (
      <div>
        <h2>Video Player</h2>
        <VideoPlayer file={"videos/people.mp4"} >
          <VideoPlayer.Player/>
          <div className="btn-group">
            <VideoPlayer.Play>Play</VideoPlayer.Play>
            <VideoPlayer.Pause>Pause</VideoPlayer.Pause>
          </div>
        </VideoPlayer>
      </div>
    );
  }
}

export default VideoPage;
