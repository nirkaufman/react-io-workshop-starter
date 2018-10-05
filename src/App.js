import React, {Component} from 'react';
import NavBar from "./shared/Navbar";
import RenderPropPage from "./labs/04_render_props/start/RenderPropPage";
import PerformancePage from "./labs/05_performance/start/PerformancePage";

class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <div className="container">
            <PerformancePage />
        </div>
      </>
    );
  }
}

export default App;
