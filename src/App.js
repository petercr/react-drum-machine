import React, { Component } from "react";
import "./App.css";
import "./index.css";
// import  from "../sounds/Kick_thump.mp3";

class App extends Component {
  render() {
    // const Kick_thump = "../sounds/Kick_thump.mp3";
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
              <source src="sounds/Kick_thump.mp3" type="audio/mp3"/>
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
