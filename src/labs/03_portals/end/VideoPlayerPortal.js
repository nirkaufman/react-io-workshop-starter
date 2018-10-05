import React, {Component} from 'react';
import {createPortal} from 'react-dom';

class VideoPlayerPortal extends Component {

  videoRef = React.createRef();
  state    = {showScreen: false};

  play = () => this.videoRef.current.play();
  pause = () => this.videoRef.current.pause();
  open = () => this.setState({showScreen: true})


  loadVideo = () => {
    const videoEl = <video width="600" ref={this.videoRef} src={"http://localhost:3000/videos/people.mp4"}/>;
    const externalWindow = window.open('', '', 'width=600,height=300,left=200,top=200');
    const container = document.createElement('div');

    externalWindow.document.body.appendChild(container);
    return createPortal(videoEl, container);
  };

  render() {
    return (
      <>
        { this.state.showScreen && this.loadVideo()}
        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.open}>open</button>
          <button className="btn btn-primary" onClick={this.play}>Play</button>
          <button className="btn btn-primary" onClick={this.pause}>stop</button>
        </div>
      </>
    )
  }
}

export default VideoPlayerPortal;