import React, {Component} from 'react';

class TextInput extends Component {

  state = {value: this.props.value};

  handleChange = ({ target }) => {
    this.setState({ value: target.value })
  };

  render() {
    return (
      <div className="col-5">
        <input type="text"
               value={this.state.value}
               className="form-control"
               onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TextInput;