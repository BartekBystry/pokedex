import React, { Component } from "react";
import "./App.css";
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard name="Charmander" id={19} />
      </div>
    );
  }
}

export default App;
