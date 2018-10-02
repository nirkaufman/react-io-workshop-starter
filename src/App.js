import React, {Component} from 'react';
import NavBar from "./shared/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <div className="container">
          <p className="lead">Starter project for the React IO workshop</p>
        </div>
      </>
    );
  }
}

export default App;
