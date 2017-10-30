import React, { Component } from 'react';
import LTE from 'lte-earfcn-calculator';

const styleSheet = {
  input: {
    width: '100%',
  },
};

class App extends Component {
  state = {
    earfcn: 0,
    band: 1,
    freq: 0,
  };

  handleChangeValue = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Band</h2>
        <select onChange={this.handleChangeValue("band")}>
          {
            LTE.lteBandTable.map(value => (
              <option key={value.band} value={value.band}>{value.band}</option>
            ))
          }
        </select>
        <h2>EARFCN to Frequency</h2>
        EARFCN Range :
        <input
          type="number"
          style={styleSheet.input}
          placeholder="Input EARFCN."
          onChange={this.handleChangeValue("earfcn")}
        />
        Output Frequency : {LTE.earfcnToFreq(this.state.earfcn)} MHz
        <h2>Frequency to EARFCN</h2>
        Frequency Range :
        <input
          type="number"
          style={styleSheet.input}
          placeholder="Input Frequency."
          onChange={this.handleChangeValue("freq")}
        />
        Output EARFCN : {LTE.freqToEarfcnByBand(this.state.band, this.state.freq)}
      </div >
    );
  }
}

export default App;