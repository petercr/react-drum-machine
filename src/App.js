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
  constructor(props) {
    super(props);
    this.sounds = {
      clap808: new Audio(Clap_808),
      crashNoise: new Audio(Crash_noise),
      hiHat: new Audio(HiHat),
      kickThump: new Audio(Kick_thump),
      kickZapper: new Audio(Kick_zapper),
      tribalDrum: new Audio(Tribal),
      rideCymbal: new Audio(Ride_cymbal),
      snareBlock: new Audio(Snare_block),
      tomTom: new Audio(Tom_tom)
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  handleClick(event) {
    switch (event.currentTarget.id) {
      case "W":
        this.sounds.kickZapper.play();
        break;
      case "Q":
        this.sounds.kickThump.play();
        break;
      case "E":
        this.sounds.tomTom.play();
        break;
      case "A":
        this.sounds.snareBlock.play();
        break;
      case "S":
        this.sounds.hiHat.play();
        break;
      case "D":
        this.sounds.rideCymbal.play();
        break;
      case "Z":
        this.sounds.tribalDrum.play();
        break;
      case "X":
        this.sounds.crashNoise.play();
        break;

      default:
        this.sounds.clap808.play();
    }
    
    console.log(event.currentTarget);
  }

  handleKeys(key) {
    const upperCase = key.toUpperCase();

    switch (upperCase) {
      case "W":
        this.sounds.kickZapper.play();
        break;
      case "Q":
        this.sounds.kickThump.play();
        break;
      case "E":
        this.sounds.tomTom.play();
        break;
      case "A":
        this.sounds.snareBlock.play();
        break;
      case "S":
        this.sounds.hiHat.play();
        break;
      case "D":
        this.sounds.rideCymbal.play();
        break;
      case "Z":
        this.sounds.tribalDrum.play();
        break;
      case "X":
        this.sounds.crashNoise.play();
        break;

      default:
        this.sounds.clap808.play();
    }

  }

  render() {
    return (
      <div className="App"  >
        <header className="App-header">
          <h1>Drum Machine Game</h1>
        </header>
        <div id="display" tabIndex={-1} onKeyDown={event => this.handleKeys(event.key)}>
          {/* the area with the 9 .drum-pads each with <audio> elms */}
          {/* Drum sounds from http://99sounds.org/drum-samples/ 
          * Please see site for license info
          */}
          <div className="drum-pad" id="Q" onClick={e => this.handleClick(e)}>
            <p>Q</p>
            <audio className=".clip">
              <source src={Kick_thump} type="audio/mp3" />
            </audio>
            <p>Kick Thump</p>
          </div>
          <div className="drum-pad" id="W" onClick={e => this.handleClick(e)}>
            <p>W</p>
            <audio src={Kick_zapper} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="E" onClick={e => this.handleClick(e)}>
            <p>E</p>
            <audio src={Tom_tom} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="A" onClick={e => this.handleClick(e)}>
            <p>A</p>
            <audio src={Snare_block} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="S" onClick={e => this.handleClick(e)}>
            <p>S</p>
            <audio src={HiHat} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="D" onClick={e => this.handleClick(e)}>
            <p>D</p>
            <audio src={Ride_cymbal} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="Z" onClick={e => this.handleClick(e)}>
            <p>Z</p>
            <audio src={Tribal} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="X" onClick={e => this.handleClick(e)}>
            <p>X</p>
            <audio src={Crash_noise} type="audio/mp3" />
          </div>
          <div className="drum-pad" id="C" onClick={e => this.handleClick(e)}>
            <p>C</p>
            <audio src={Clap_808} type="audio/mp3" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
