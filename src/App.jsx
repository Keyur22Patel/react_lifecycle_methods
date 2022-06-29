import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      title: "hello world",
    }
  }
  {
  this.setstate({ isLoaded: true });}

  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
        <input id ="title"
        name ="title"
        />
        <hr />
      </div>
    );
    else{
      <h1>loading .....</h1>
    }
  }

}

export default App;
