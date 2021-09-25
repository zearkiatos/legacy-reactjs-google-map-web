import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: -34.397, lng: 150.644 };
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        Map me!
      </div>
    );
  }
}

export default App;