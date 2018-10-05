import React, {Component} from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="modal" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button className="close"><span>&times;</span></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary">Close</button>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const modalStyle = {
  display: 'block',
  position: 'absolute',
  top: 0,
  right: 0
};

export default Modal;