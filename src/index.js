/**
 * @description LTE EARFCN Calculator
 * @author Taesu Hyeon
 * @license MIT
 */
const table = require("../lteBandTable.json");
// TODO: Do you want to slice if the end of value ".0"? Do not?
// const regex = /.0$/;
// earfcn.match(regex) ? earfcn.substr(0, earfcn.length - 2) : earfcn;

const LTE = {
  lteBandTable: table,
  /**
   * Calculate the frequeny using earfcn and band.
   * @param {number} inputBand LTE Band.
   * @param {number} freq LTE Frequency.
   * @returns {number}
   */
  freqToEarfcnByBand: (inputBand, freq) => {
    for (let element of table) {
      let earfcn;
      if (inputBand == element.band) {
        if (freq >= element.FDL_Low && freq <= element.FDL_High) {
          earfcn = (freq - element.FDL_Low) * 10 + element.NDL_Min;
          earfcn = earfcn > element.NDL_Max ? earfcn - 1 : earfcn;
        } else if (freq >= element.FUL_Low && freq <= element.FUL_High) {
          earfcn = (freq - element.FUL_Low) * 10 + element.NUL_Min;
          earfcn = earfcn > element.NUL_Max ? earfcn - 1 : earfcn;
        } else {
          console.error("[Error] Wrong frequency value.");
          return false;
        }

        return earfcn.toFixed(1);
      }
    }
  },
  /**
   * Calculate the frequency using earfcn.
   * @param {number} earfcn LTE earfcn value.
   * @returns {number}
   */
  earfcnToFreq: earfcn => {
    for (let element of table) {
      let freq;
      // Check Uplink Earfcn
      if (earfcn >= 18000 && earfcn < 36000) {
        if (earfcn >= element.NUL_Min && earfcn <= element.NUL_Max) {
          freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
        }
      }
      // Check Downlink Earfcn
      else if (earfcn < 36000 || (earfcn > 65535 && earfcn <= 98303)) {
        if (earfcn >= element.NDL_Min && earfcn <= element.NDL_Max) {
          freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
        }
      }
      // Check TDD Uplink Earfcn
      else if (earfcn >= 36000 && earfcn <= 65535) {
        if (earfcn >= element.NDL_Min && earfcn <= element.NDL_Max) {
          freq = element.FDL_Low + 0.1 * (earfcn - element.NDL_Min);
        }
      }

      if (freq) {
        return freq.toFixed(1);
      }
    }

    console.error("[Error] Wrong earfcn value.");
    return false;
  }
};

if (window) {
  window.LTE = LTE;
} else {
  module.exports = LTE;
}
