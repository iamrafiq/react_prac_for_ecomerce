import React, { Component } from "react";

class App extends Component {

  state = {
    count: 0
  }

  incremeant = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Counter App</h2>
    <button onClick={this.incremeant}>Clicked {this.state.count} times</button>
      </div>
    );
  }
}


export default App;
