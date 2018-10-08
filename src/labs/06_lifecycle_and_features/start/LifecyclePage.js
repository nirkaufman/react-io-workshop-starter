import React, {Component} from 'react';
import TextInput from "./TextInput";

class LifecyclePage extends Component {

  state = { user: {id:1, name: "Nir"} };

  changeUser = () => {
    this.setState({ user: {id: 2, name: "Or"} })
  };

  render() {
    return (
      <div>
        <h2>Life Cycle Page</h2>
        <button onClick={this.changeUser}>Replace User</button>
        <TextInput value={this.state.user.name}
                   key={this.state.user.name}/>
      </div>
    );
  }
}

export default LifecyclePage;