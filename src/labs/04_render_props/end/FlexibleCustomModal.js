import React, {Component} from 'react';

class FlexibleCustomModal extends Component {
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
              {this.props.body()}
            </div>
            <div className="modal-footer">
              {this.props.footer}
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
};

export default FlexibleCustomModal;