import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {
  render() {
    return (
      <video width="600"
             controls={this.props.controls}
             src={this.props.file}/>
    );
  }
}

VideoPlayer.propTypes = {
  file: PropTypes.string,
  controls: PropTypes.bool
};

export default VideoPlayer;