import React, {Component} from 'react';

class CustomModal extends Component {
  render() {
    return (
      <div className="modal" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              {this.props.header()}
              <button className="close"><span>&times;</span></button>
            </div>

            <div className="modal-body">
              {this.props.content()}
            </div>

            <div className="modal-footer">
              {this.props.footer()}
              <button onClick={this.props.alert}>alert</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

CustomModal.defaultProps = {
  footer: () => ''
}

const modalStyle = {
  display: 'block',
};

export default CustomModal;