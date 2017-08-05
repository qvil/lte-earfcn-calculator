import React, { Component } from 'react';
import LTE from 'lte-earfcn-calculator';

class App extends Component {
  state = {
    earfcn: 0,
    band: 1,
    freq: 0,
  };

  handleChangeFreq = (event) => {
    this.setState({ earfcn: event.target.value });
  };

  handleChangeBand = (event) => {
    this.setState({ band: event.target.value });
  };

  handleChangeEarfcn = (event) => {
    this.setState({ freq: event.target.value });
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>EARFCN to Frequency</h2>
        Input EARFCN :
        <input
          placeholder="Input EARFCN. Default : 0"
          onChange={this.handleChangeFreq}
        />
        <br />
        Output Frequency : {LTE.earfcnToFreq(this.state.earfcn)} MHz
        <br />
        <hr />
        <h2>Frequency to EARFCN</h2>
        Band :
        <select onChange={this.handleChangeBand}>
          {
            LTE.lteBandTable.map((value) => (
              <option value={value.band}>{value.band}</option>
            ))
          }
        </select>
        <br />
        Frequency :
        <input
          placeholder="Input Frequency. Default : 0"
          onChange={this.handleChangeEarfcn}
        />
        <br />
        Output EARFCN : {LTE.freqToEarfcnByBand(this.state.band, this.state.freq)}
      </div >
    );
  }
}

export default App;