import React, { Component } from "react";


class DrumPad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
      <div className="drum-pad" id="D">
            <p>Q</p>
            <audio className=".clip">
              <source src={this.sound} type="audio/mp3" />
            </audio>
            <p>{props.name}</p>
          </div>
    );
    }
  }