'use strict';

//const DraftLog = require('draftlog').into(console);

const curr = new Date();
const pomodoro = plus25m(curr);

console.log(curr);
console.log(pomodoro);

/**
 * @desc Adds 25 minutes to time based on the current time
  * @param current {Object} The current time
  * @return Date object
  */
function plus25m(current) {
  return new Date(current.getTime() + 25*60000);
}
