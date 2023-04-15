const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addStr = (`${typeof options.addition === 'undefined' ? '' : String(options.addition)}` + `${(options.additionSeparator || '|')}`).repeat(options.additionRepeatTimes || 1).split((options.additionSeparator || '|'), options.additionRepeatTimes || 1).join((options.additionSeparator || '|'));
  let subStr = str + addStr;
  let res = (subStr + (options.separator || '+')).repeat(options.repeatTimes || 1);
  return res.split(options.separator || '+', options.repeatTimes || 1).join(options.separator || '+');
}

module.exports = {
  repeater
};
