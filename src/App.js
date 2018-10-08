import React, {Component} from 'react';
import NavBar from "./shared/Navbar";

function withCache (fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);

    if(!cache[key]) {
      cache[key] = fn(...args);
    }

    return cache[key];
  }
}



const List = (props) => {
  console.log('LIST RENDER');
  return (
    <ul>
      {props.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
};

const NewList = withCache(List)

class App extends Component {

  state = {items: []};

  addItem = () => this.setState((currentState) => (
    {items: [...currentState.items, 'ITEM']}),);

  dummy = () => this.setState({});

  render() {
    console.log("APP RENDER");
    return (
      <>
        <NavBar/>
        <div className="container">
          <h2>Performance</h2>
          <NewList items={this.state.items}/>
          <button onClick={this.addItem}>add</button>
          <button onClick={this.dummy}>dummy</button>
        </div>
      </>
    );
  }
}

export default App;
