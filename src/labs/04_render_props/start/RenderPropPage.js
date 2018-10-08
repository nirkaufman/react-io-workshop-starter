import React, {Component} from 'react';
import CustomModal from "./CustomModal";

const Header = () => <h2>Hello I'm Header</h2>;

class Form extends Component {
  render() {
    return (
      <div>
        <div className="from-group">
          <label>User name</label>
          <input type="text"/>
        </div>
      </div>
    );
  }
}


class RenderPropPage extends Component {

  render() {
    return (
      <div>
        <h2>Custom Modal</h2>
        { React.createElement(CustomModal, {
          header: Header,
          content: () => <Form />,
          alert: () => alert()
        }) }
      </div>
    );
  }
}

export default RenderPropPage;
