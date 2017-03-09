/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
  * @desc It's a pomodoro. :)
  * @license MIT
  */

'use strict';

// Injecting console with draftlog
require('draftlog').into(console);

const curr = new Date();
const pomodoro = plusMinutes(curr, 25);

let timeUpdate = console.draft();

setInterval(function() {
  const rem = timeRemaining(pomodoro);
  timeUpdate('Remaining: ' + rem.min + 'm' + rem.sec + 's');
}, 500);

/**
 * @desc Adds 25 minutes to the current time
  * @param current {Object} The current time
  * @param minutes {Number} Minutes to add
  * @return Date object
  */
function plusMinutes(current, minutes) {
  return new Date(current.getTime() + minutes*60000);
}


/**
  * @desc Tells how many minutes the current session has left
  * @param pomodoro {Object} The time which the current pomodoro ends
  * @return Object with minutes and seconds remaining
  */
function timeRemaining(pomodoro) {
  const diff = Date.parse(pomodoro) - Date.parse(new Date());
  const sec = Math.floor((diff/1000) % 60);
  const min = Math.floor((diff/1000/60) % 60);

  return {
    'min':min,
    'sec':sec
  };
}
