"use strict";

/**
 * @description LTE EARFCN Calculator
 * @author Taesu Hyeon
 * @license MIT
 */
var table = require("../lteBandTable.json");
var checkBandByEarfcn = require("./checkBandByEarfcn");
// TODO: Do you want to slice if the end of value ".0"? Do not?
// const regex = /.0$/;
// earfcn.match(regex) ? earfcn.substr(0, earfcn.length - 2) : earfcn;

module.exports = {
  lteBandTable: table,
  /**
   * Calculate the frequeny using earfcn and band.
   * @param {number} inputBand LTE Band.
   * @param {number} freq LTE Frequency.
   * @returns {number}
   */
  freqToEarfcnByBand: function freqToEarfcnByBand(inputBand, freq) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = table[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        var earfcn = void 0;
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
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  /**
   * Calculate the frequency using earfcn.
   * @param {number} earfcn LTE earfcn value.
   * @returns {number}
   */
  earfcnToFreq: function earfcnToFreq(earfcn) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = table[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var element = _step2.value;

        var freq = void 0;
        // Check Uplink Earfcn
        if (earfcn >= 18000 && earfcn < 36000) {
          if (earfcn >= element.NUL_Min && earfcn <= element.NUL_Max) {
            freq = element.FUL_Low + 0.1 * (earfcn - element.NUL_Min);
          }
        }
        // Check Downlink Earfcn
        else if (earfcn < 36000 || earfcn > 65535 && earfcn <= 98303) {
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
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    console.error("[Error] Wrong earfcn value.");
    return false;
  }
};