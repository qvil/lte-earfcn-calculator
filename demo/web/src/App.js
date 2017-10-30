import React, { Component } from 'react';
// Product
import LTE from 'lte-earfcn-calculator';
// Test
// import LTE from './lte-earfcn-calculator.min';

const lteBandTable = LTE.lteBandTable;
const styleSheet = {
  input: {
    width: '100%',
  },
};

class App extends Component {
  state = {
    band: 1,
    earfcn: -1, // For Initialize ""
    freq: -1, // For Initialize ""
    FDL_Low: 2110,
    FDL_High: 2170,
    NDL_Min: 0,
    NDL_Max: 599,
    FUL_Low: 1920,
    FUL_High: 1980,
    NUL_Min: 18000,
    NUL_Max: 1859,
  };

  componentDidMount() {

  }

  setBand = band => {
    let newState = {
      ...this.state,
      ...lteBandTable[band],
    };

    this.setState(newState);
  }

  handleChangeValue = (name) => (event) => {
    if (name === "band") {
      this.setBand(event.target.value);
    }

    this.setState({ [name]: event.target.value });
    console.log(this.state)
  }

  printValue = (mode, state) => {
    if (mode.trim().toUpperCase() === "EARFCN") {
      return state.DLOnly ?
        `${this.state.NDL_Min} ~ ${this.state.NDL_Max}` :
        `${this.state.NDL_Min} ~ ${this.state.NDL_Max}, ${this.state.NUL_Min} ~ ${this.state.NUL_Max}`;
    }
    else { // Frequency
      return state.DLOnly ?
        `${this.state.FDL_Low} ~ ${this.state.FDL_High}` :
        `${this.state.FDL_Low} ~ ${this.state.FDL_High}, ${this.state.FUL_Low} ~ ${this.state.FUL_High}`;
    }
  }

  render() {
    console.log(LTE.earfcnToFreq(this.state.earfcn))
    return (
      <div>
        <h2>LTE Band</h2>
        <select onChange={this.handleChangeValue("band")}>
          {
            LTE.lteBandTable.map(value =>
              <option key={value.band} value={value.band}>{value.band}</option>
            )
          }
        </select>
        <h2>EARFCN to Frequency</h2>
        EARFCN : {this.printValue("EARFCN", this.state)}
        <input
          type="number"
          className="input"
          style={styleSheet.input}
          placeholder={`Input EARFCN.`}
          onChange={this.handleChangeValue("earfcn")}
        />
        Output Frequency : {LTE.earfcnToFreq(this.state.earfcn)} MHz
        <h2>Frequency to EARFCN</h2>
        Frequency : {this.printValue("freq", this.state)}
        <input
          type="number"
          className="input"
          style={styleSheet.input}
          placeholder={`Input Frequency.`}
          onChange={this.handleChangeValue("freq")}
        />
        Output EARFCN : {LTE.freqToEarfcnByBand(this.state.band, this.state.freq)}
      </div >
    );
  }
}

export default App;