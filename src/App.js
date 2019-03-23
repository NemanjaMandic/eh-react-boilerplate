import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    const style = count > 10 ? "warning" : "disko";
    return (
      <div>
        <h1>Ola World!</h1>
        <h2 className={style}>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment +
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decrement -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
