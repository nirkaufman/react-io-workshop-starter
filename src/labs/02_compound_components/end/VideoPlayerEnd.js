import React, {Component} from 'react';
import PropTypes from 'prop-types';


const videoRef = React.createRef();
const VideoCtx = React.createContext();

class VideoPlayer extends Component {

  static Play = ({children}) => (
    <VideoCtx.Consumer>
      {({play}) => (
        <div className="btn btn-primary" onClick={play}>{children}</div>
      )}
    </VideoCtx.Consumer>
  );

  static Pause = ({children}) => (
    <VideoCtx.Consumer>
      {({pause}) => (
        <div className="btn btn-primary" onClick={pause}>{children}</div>
      )}
    </VideoCtx.Consumer>
  );

  static Player = () => (
    <VideoCtx.Consumer>
      {({controls, file}) => (
        <video width="600" ref={videoRef} controls={controls} src={file}/>
      )}
    </VideoCtx.Consumer>
  );

  constructor(props) {
    super(props);

    this.state = {
      showControls: !props.children
    }
  }

  play  = () => videoRef.current.play();
  pause = () => videoRef.current.pause();

  render() {
    return (
      <>
        <VideoCtx.Provider value={{
          play: this.play,
          pause: this.pause,
          file: this.props.file,
          controls: this.state.showControls
        }}>
          {this.props.children ? this.props.children : < VideoPlayer.Player />}
        </VideoCtx.Provider>

      </>
    );
  }
}

//*******************
// STEP I
//*******************

VideoPlayer.propTypes = {
  file: PropTypes.string,
  children: PropTypes.any
};

export default VideoPlayer;