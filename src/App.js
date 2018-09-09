import React, { Component } from "react";
import "./App.css";
import "./index.css";

// Import the MP3 files for the drum pads
import Clap_808 from "./sounds/clap-808.mp3";
import Crash_noise from "./sounds/crash-noise.mp3";
import HiHat from "./sounds/hihat-dist02.mp3";
import Kick_thump from "./sounds/kick-thump.mp3";
import Kick_zapper from "./sounds/kick-zapper.mp3";
import Tribal from "./sounds/perc-tribal.mp3";
import Ride_cymbal from "./sounds/ride-acoustic02.mp3";
import Snare_block from "./sounds/snare-block.mp3";
import Tom_tom from "./sounds/tom-analog.mp3";

class App extends Component {
  constructor(props){
    super(props);
    this.onPlay = this.onPlay.bind(this);
    this.kickZapper = new Audio(Kick_zapper);
  }

  onPlay(event) {
    if (event.currentTarget.id === "W"){
      this.kickZapper.play();
    }
    console.log(event.currentTarget);
  }
  // handleClick (event) {
  //   let target =  event.currentTarget;
  //   console.log("stuff ", event, target);
  // }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Drum Machine Game</h1>
        </header>
        <div id="display">
          {/* the area with the 9 .drum-pads each with <audio> elms */}
          {/* Drum sounds from http://99sounds.org/drum-samples/ 
          * Please see site for license info
          */}
          <div className="drum-pad" id="Q">
            <p>Q</p>
            <audio className=".clip">
              <source src={Kick_thump} type="audio/mp3" />
            </audio>
            <p>Kick Thump</p>
          </div>
          <div className="drum-pad" id="W" onClick={(e) => this.onPlay(e)}>
            <p>W</p>
            <audio src={Kick_zapper} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="E">
            <p>E</p>
            <audio src={Tom_tom} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="A">
            <p>A</p>
            <audio src={Snare_block} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="S">
            <p>S</p>
            <audio src={HiHat} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="D">
            <p>D</p>
            <audio src={Ride_cymbal} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="Z">
            <p>Z</p>
            <audio src={Tribal} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="X">
            <p>X</p>
            <audio src={Crash_noise} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="C">
            <p>C</p>
            <audio src={Clap_808} type="audio/mp3" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
