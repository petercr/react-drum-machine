import React, { Component } from "react";
import "./App.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
        <h1>Drum Machine Game</h1>
        </header>
        <div id="display">
          {/* the area with the 9 .drum-pads each with <audio> elms */}
          {/* Drum sounds from http://99sounds.org/drum-samples/ 
          * Please see site for license info
          */}
          <div className="drum-pad" id="Q">
            <p>Q</p>
            <audio controls className=".clip">
              <source src="sounds/kick-thump.wav" type="audio/wav"/>
            </audio>
          </div>
          <div className="drum-pad" id="W">
            <p>W</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="E" >
            <p>E</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="A">
            <p>A</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="S">
            <p>S</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="D">
            <p>D</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="Z">
            <p>Z</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="X">
            <p>X</p>
            <audio src="" />
          </div>
          <div className="drum-pad" id="C">
            <p>C</p>
            <audio src="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
