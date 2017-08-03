import React, { Component } from 'react';
import LTE from 'lte-earfcn-calculator';

class App extends Component {
  state = {
    earfcn: 0,
  };

  handleChange = (event) => {
    this.setState({ earfcn: event.target.value});
  };

  render() {
    return (
      <div>
        <input
          placeholder="Input EARFCN Default : 0" 
          onChange={this.handleChange}
        />
        <br />
        Frequency : {LTE.earfcnToFreq(this.state.earfcn)} MHz
      </div>
    );
  }
}

export default App;