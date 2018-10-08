import React, {Component} from 'react';
import VideoPlayer from "../start/VideoPlayer";


class VideoPage extends Component {

  render() {
    return (
      <div>
        <h2>Video Player</h2>
        <VideoPlayer file={"videos/heads.mp4"} >

          <div className="btn-group">
            <VideoPlayer.Play>Play</VideoPlayer.Play>
            <VideoPlayer.Pause>stop!</VideoPlayer.Pause>
          </div>

          <VideoPlayer.Player/>

        </VideoPlayer>
      </div>
    );
  }
}

export default VideoPage;
