import React, { useState } from "react";
import ReactDOM from "react-dom";
import LTE from "../../build/lte-earfcn-calculator.min.js";
const {
  default: { earfcnToFreq, freqToEarfcnByBand, lteBandTable }
} = LTE;

const App = () => {
  const [state, setState] = useState({ band: 1, earfcn: 0, freq: 2110 });

  const handleChange = name => ({ target: { value } }) => {
    setState({ ...state, [name]: value });
  };

  const { band, earfcn, freq } = state;

  return (
    <div>
      <h1>LTE EARFCN Calculator Demo</h1>
      <div>
        <label htmlFor="band">Band</label>
        <select name="band" id="band" onChange={handleChange("band")}>
          {lteBandTable.map(({ band }, index) => (
            <option key={index} value={band}>
              {band}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="inputEarfcn">EARFCN</label>
        <input
          id="inputEarfcn"
          type="number"
          value={earfcn}
          placeholder="EARFCN"
          onChange={handleChange("earfcn")}
        />
        <label htmlFor="freq">EARFCN to Frequency</label>
        <input readOnly id="freq" value={earfcnToFreq(earfcn)} />
      </div>
      <div>
        <label htmlFor="inputFreq">Frequency</label>
        <input
          id="inputFreq"
          type="number"
          value={freq}
          placeholder="EARFCN"
          onChange={handleChange("freq")}
        />
        <label htmlFor="freq">Frequency to EARFCN</label>
        <input readOnly id="freq" value={freqToEarfcnByBand(band, freq)} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
