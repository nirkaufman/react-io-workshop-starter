import React, {Component} from 'react';

const videoRef = React.createRef();
const videoCtx = React.createContext();

class VideoPlayer extends Component {

  static Play = ({children}) => (
    <videoCtx.Consumer>
      {({play}) => (
        <button className="btn btn-primary"
                onClick={play}>{children}</button>
      )}
    </videoCtx.Consumer>
  );

  static Pause = ({children}) => (
    <videoCtx.Consumer>
      {({pause}) => (
        <button className="btn btn-primary" onClick={pause}>{children}</button>
      )}
    </videoCtx.Consumer>
  );

  static Player = () => {
    return (
      <videoCtx.Consumer>
        {({controls, file}) => (
          <video width="600"
                 ref={videoRef}
                 controls={controls}
                 src={file}/>
        )}
      </videoCtx.Consumer>
    )
  };

  play = () => {
    videoRef.current.play();
  };

  pause = () => {
    videoRef.current.pause();
  };

  render() {
    return (
      <videoCtx.Provider value={{
        play: this.play,
        pause: this.pause,
        file: this.props.file
      }}>
        {this.props.children}
      </videoCtx.Provider>
    );
  }
}

export default VideoPlayer;