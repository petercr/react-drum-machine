import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { SocialIcon } from "react-social-icons";

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
    const log = event;
    console.log(log);
    switch (event.currentTarget.childNodes[1].id) {
      case "W":
        this.sounds.kickZapper.currentTime = 0;
        this.setState({ default: this.state.kickZapper });
        this.sounds.kickZapper.play();
        break;
      case "Q":
        this.sounds.kickThump.currentTime = 0;
        this.setState({ default: this.state.kickThump });
        this.sounds.kickThump.play();
        break;
      case "E":
        this.sounds.tomTom.currentTime = 0;
        this.setState({ default: this.state.tomTom });
        this.sounds.tomTom.play();
        break;
      case "A":
        this.sounds.snareBlock.currentTime = 0;
        this.setState({ default: this.state.snareBlock });
        this.sounds.snareBlock.play();
        break;
      case "S":
        this.sounds.hiHat.currentTime = 0;
        this.setState({ default: this.state.hiHat });
        this.sounds.hiHat.play();
        break;
      case "D":
        this.sounds.rideCymbal.currentTime = 0;
        this.setState({ default: this.state.rideCymbal });
        this.sounds.rideCymbal.play();
        break;
      case "Z":
        this.sounds.tribalDrum.currentTime = 0;
        this.setState({ default: this.state.tribalDrum });
        this.sounds.tribalDrum.play();
        break;
      case "X":
        this.sounds.crashNoise.currentTime = 0;
        this.setState({ default: this.state.crashNoise });
        this.sounds.crashNoise.play();
        break;

      case "C":
        this.sounds.clap808.currentTime = 0;
        this.setState({ default: this.state.clap808 });
        this.sounds.clap808.play();
        break;
      default:
        console.log("Something went wrong");
        break;
    }

    console.dir(event.currentTarget);
  }

  handleKeys(keyCode) {
    // const upperCase = key.toUpperCase();

    switch (keyCode) {
      case 87:
        this.sounds.kickZapper.currentTime = 0;
        this.setState({ default: this.state.kickZapper });
        this.sounds.kickZapper.play();
        break;
      case 81:
        this.sounds.kickThump.currentTime = 0;
        this.setState({ default: this.state.kickThump });
        this.sounds.kickThump.play();
        break;
      case 69:
        this.sounds.tomTom.currentTime = 0;
        this.setState({ default: this.state.tomTom });
        this.sounds.tomTom.play();
        break;
      case 65:
        this.sounds.snareBlock.currentTime = 0;
        this.setState({ default: this.state.snareBlock });
        this.sounds.snareBlock.play();
        break;
      case 83:
        this.sounds.hiHat.currentTime = 0;
        this.setState({ default: this.state.hiHat });
        this.sounds.hiHat.play();
        break;
      case 68:
        this.sounds.rideCymbal.currentTime = 0;
        this.setState({ default: this.state.rideCymbal });
        this.sounds.rideCymbal.play();
        break;
      case 90:
        this.sounds.tribalDrum.currentTime = 0;
        this.setState({ default: this.state.tribalDrum });
        this.sounds.tribalDrum.play();
        break;
      case 88:
        this.sounds.crashNoise.currentTime = 0;
        this.setState({ default: this.state.crashNoise });
        this.sounds.crashNoise.play();
        break;
      case 67:
        this.sounds.clap808.currentTime = 0;
        this.setState({ default: this.state.clap808 });
        this.sounds.clap808.play();
        break;
      default:
      console.log("Something went wrong");
    }
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <header className="App-header">
          <h1 id="name">Drum Machine Game</h1>
          <SocialIcon
            className="social"
            url="https://www.github.com/petercr/react-drum-machine/"
            color="#333333"
          />
          <SocialIcon
            className="social"
            url="https://www.twitter.com/PeteCapeCod"
            color="#ffffff"
          />
          <SocialIcon
            className="social"
            url="https://www.linkedin.com/in/peter-cruckshank-25022a141/"
            color="#07cef1"
          />
        </header>
        <div id="playing" className="top-banners">
          What's Playing:
        </div>
        <div id="display" className="top-banners">
          {this.state.default}
        </div>
        <div
          id="drum-display"
          tabIndex={-1}
          onKeyDown={event => this.handleKeys(event.keyCode)}
        >
          {/* the area with the 9 .drum-pads each with <audio> elms */}
          {/* Drum sounds from http://99sounds.org/drum-samples/ 
          * Please see site for license info
          */}
          <div className="drum-pad" id="bass-drum" onClick={e => this.handleClick(e)}>
            <p>Q</p>
            <audio className="clip" id="Q" src={Kick_thump} type="audio/mp3" />
            <div className="drum-names">
              <p>Bass Drum</p>
            </div>
          </div>
          <div className="drum-pad" id="kick-drum" onClick={e => this.handleClick(e)}>
            <p>W</p>
            <audio className="clip" id="W" src={Kick_zapper} type="audio/mp3" />
            <div className="drum-names">
              <p>Kick Drum</p>
            </div>
          </div>
          <div className="drum-pad" id="tom-tom" onClick={e => this.handleClick(e)}>
            <p>E</p>
            <audio className="clip" id="E" src={Tom_tom} type="audio/mp3" />
            <div className="drum-names">
              <p>Tom Tom</p>
            </div>
          </div>
          <div className="drum-pad" id="snare-drum" onClick={e => this.handleClick(e)}>
            <p>A</p>
            <audio className="clip" id="A" src={Snare_block} type="audio/mp3" />
            <div className="drum-names">
              <p>Snare Drum</p>
            </div>
          </div>
          <div className="drum-pad" id="hi-hat" onClick={e => this.handleClick(e)}>
            <p>S</p>
            <audio className="clip" id="S" src={HiHat} type="audio/mp3" />
            <div className="drum-names">
              <p>Hi Hat</p>
            </div>
          </div>
          <div className="drum-pad" id="ride-cymbal" onClick={e => this.handleClick(e)}>
            <p>D</p>
            <audio className="clip" id="D" src={Ride_cymbal} type="audio/mp3" />
            <div className="drum-names">
              <p>Ride Cymbal</p>
            </div>
          </div>
          <div className="drum-pad" id="tribal-drum" onClick={e => this.handleClick(e)}>
            <p>Z</p>
            <audio className="clip" id="Z" src={Tribal} type="audio/mp3" />
            <div className="drum-names">
              <p>Tribal Drum</p>
            </div>
          </div>
          <div className="drum-pad" id="crash-cymbal" onClick={e => this.handleClick(e)}>
            <p>X</p>
            <audio className="clip" id="X" src={Crash_noise} type="audio/mp3" />
            <div className="drum-names">
              <p>Crash Cymbal</p>
            </div>
          </div>
          <div className="drum-pad" id="clap" onClick={e => this.handleClick(e)}>
            <p>C</p>
            <audio className="clip" id="C" src={Clap_808} type="audio/mp3" />
            <div className="drum-names">
              <p>Clap</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
