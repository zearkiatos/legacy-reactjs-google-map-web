import React, { Component } from "react";
import GoogleMap from "./GoogleMap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { latitude: -34.397, longitud: 150.644 };
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        Map me!
        <button
          onClick={() =>
            this.setState({ latitude: -34.397, longitud: 150.644 })
          }
        >
          New York
        </button>
        <GoogleMap
          longitud={this.state.longitud}
          latitude={this.state.latitude}
        />
      </div>
    );
  }
}

export default App;
