import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div id="display">
          { /* the area with the 9 .drum-pads each with <audio> elms */ }
          <div className="drum-pad">
            <p>Q</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>W</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>E</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>A</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>S</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>D</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>Z</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>X</p>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
          <p>C</p>
            <audio src=""></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
