import React, { Component } from 'react';
import LTE from 'lte-earfcn-calculator';

const lteBandTable = LTE.lteBandTable;
const styleSheet = {
  input: {
    width: '100%',
  },
};

class App extends Component {
  state = {
    band: 1,
    earfcn: 0,
    freq: 0,
    DLOnly: false,
    FDL_Low: 2110,
    FDL_High: 2170,
    NDL_Min: 0,
    NDL_Max: 599,
    FUL_Low: 1920,
    FUL_High: 1980,
    NUL_Min: 18000,
    NUL_Max: 1859,
  };

  setBand = band => {
    let bandData = lteBandTable.find(value => {
      return parseInt(band, 10) === value.band;
    })

    let newState = {
      ...this.state,
      ...bandData,
    };

    this.setState(newState);
  }

  handleChangeValue = name => event => {
    if (name === "band") {
      this.setBand(event.target.value)
    }

    this.setState({ [name]: event.target.value });
  };

  printRange = mode => {
    if (mode.trim().toLowerCase() === "earfcn") {
      return this.state.DLOnly ?
        `${this.state.NDL_Min} ~ ${this.state.NDL_Max}` :
        `${this.state.NDL_Min} ~ ${this.state.NDL_Max}, ${this.state.NUL_Min} ~ ${this.state.NUL_Max}`;
    }
    else {
      return this.state.DLOnly ?
        `${this.state.FDL_Low} ~ ${this.state.FDL_High}` :
        `${this.state.FDL_Low} ~ ${this.state.FDL_High}, ${this.state.FUL_Low} ~ ${this.state.FUL_High}`;
    }
  }

  render() {
    return (
      <div>
        <h2>Band</h2>
        <select onChange={this.handleChangeValue("band")}>
          {
            lteBandTable.map(value => (
              <option key={value.band} value={value.band}>{value.band}</option>
            ))
          }
        </select>
        <h2>EARFCN to Frequency</h2>
        EARFCN Range : {this.printRange("earfcn")}
        <input
          type="number"
          style={styleSheet.input}
          placeholder="Input EARFCN."
          onChange={this.handleChangeValue("earfcn")}
        />
        Output Frequency : {LTE.earfcnToFreq(this.state.earfcn)} MHz
        <h2>Frequency to EARFCN</h2>
        Frequency Range : {this.printRange("freq")}
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