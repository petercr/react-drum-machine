import React, { Component } from "react";
import "./App.css";
import "./index.css";
import "./github-alt-brands.svg";

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
    this.state = {
      clap808: "Clap Noise",
      crashNoise: "Crash Cymbal",
      hiHat: "Hi Hat Cymbal",
      kickThump: "Bass Drum",
      kickZapper: "Kick Drum",
      tribalDrum: "Tribal Drum",
      rideCymbal: "Ride Cymbal",
      snareBlock: "Snare Drum",
      tomTom: "Tom Tom",
      default: "Click or Press to get started"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  handleClick(event) {
    switch (event.currentTarget.id) {
      case "W":
        this.setState({ default: this.state.kickZapper });
        this.sounds.kickZapper.play();
        break;
      case "Q":
        this.setState({ default: this.state.kickThump });
        this.sounds.kickThump.play();
        break;
      case "E":
        this.setState({ default: this.state.tomTom });
        this.sounds.tomTom.play();
        break;
      case "A":
        this.setState({ default: this.state.snareBlock });
        this.sounds.snareBlock.play();
        break;
      case "S":
        this.setState({ default: this.state.hiHat });
        this.sounds.hiHat.play();
        break;
      case "D":
        this.setState({ default: this.state.rideCymbal });
        this.sounds.rideCymbal.play();
        break;
      case "Z":
        this.setState({ default: this.state.tribalDrum });
        this.sounds.tribalDrum.play();
        break;
      case "X":
        this.setState({ default: this.state.crashNoise });
        this.sounds.crashNoise.play();
        break;

      default:
        this.setState({ default: this.state.clap808 });
        this.sounds.clap808.play();
    }

    console.log(event.currentTarget);
  }

  handleKeys(key) {
    const upperCase = key.toUpperCase();

    switch (upperCase) {
      case "W":
        this.setState({ default: this.state.kickZapper });
        this.sounds.kickZapper.play();
        break;
      case "Q":
        this.setState({ default: this.state.kickThump });
        this.sounds.kickThump.play();
        break;
      case "E":
        this.setState({ default: this.state.tomTom });
        this.sounds.tomTom.play();
        break;
      case "A":
        this.setState({ default: this.state.snareBlock });
        this.sounds.snareBlock.play();
        break;
      case "S":
        this.setState({ default: this.state.hiHat });
        this.sounds.hiHat.play();
        break;
      case "D":
        this.setState({ default: this.state.rideCymbal });
        this.sounds.rideCymbal.play();
        break;
      case "Z":
        this.setState({ default: this.state.tribalDrum });
        this.sounds.tribalDrum.play();
        break;
      case "X":
        this.setState({ default: this.state.crashNoise });
        this.sounds.crashNoise.play();
        break;

      default:
        this.setState({ default: this.state.clap808 });
        this.sounds.clap808.play();
    }
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <header className="App-header">
          <h1>Drum Machine Game</h1>
          <img src="github-alt-brands.svg" alt="Link to Code on GitHub" srcset=""/>
        </header>
        <div id="playing" className="top-banners">What's Playing:</div>
        <div id="display" className="top-banners">{this.state.default}</div>
        <div
          id="drum-display"
          tabIndex={-1}
          onKeyDown={event => this.handleKeys(event.key)}
        >
          {/* the area with the 9 .drum-pads each with <audio> elms */}
          {/* Drum sounds from http://99sounds.org/drum-samples/ 
          * Please see site for license info
          */}
          <div className="drum-pad" id="Q" onClick={e => this.handleClick(e)}>
            <p>Q</p>
            <audio className=".clip">
              <source src={Kick_thump} type="audio/mp3" />
            </audio>
            <p>Bass Drum</p>
          </div>
          <div className="drum-pad" id="W" onClick={e => this.handleClick(e)}>
            <p>W</p>
            <audio className=".clip" src={Kick_zapper} type="audio/mp3" />
            <p>Kick Drum</p>
          </div>
          <div className="drum-pad" id="E" onClick={e => this.handleClick(e)}>
            <p>E</p>
            <audio className=".clip" src={Tom_tom} type="audio/mp3" />
            <p>Tom Tom</p>
          </div>
          <div className="drum-pad" id="A" onClick={e => this.handleClick(e)}>
            <p>A</p>
            <audio className=".clip" src={Snare_block} type="audio/mp3" />
            <p>Snare Drum</p>
          </div>
          <div className="drum-pad" id="S" onClick={e => this.handleClick(e)}>
            <p>S</p>
            <audio className=".clip" src={HiHat} type="audio/mp3" />
            <p>Hi Hat</p>
          </div>
          <div className="drum-pad" id="D" onClick={e => this.handleClick(e)}>
            <p>D</p>
            <audio className=".clip" src={Ride_cymbal} type="audio/mp3" />
            <p>Ride Cymbal</p>
          </div>
          <div className="drum-pad" id="Z" onClick={e => this.handleClick(e)}>
            <p>Z</p>
            <audio className=".clip" src={Tribal} type="audio/mp3" />
            <p>Tribal Drum</p>
          </div>
          <div className="drum-pad" id="X" onClick={e => this.handleClick(e)}>
            <p>X</p>
            <audio src={Crash_noise} type="audio/mp3" />
            <p>Crash Cymbal</p>
          </div>
          <div className="drum-pad" id="C" onClick={e => this.handleClick(e)}>
            <p>C</p>
            <audio className=".clip" src={Clap_808} type="audio/mp3" />
            <p>Clap</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
