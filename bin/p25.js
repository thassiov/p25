/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
  * @desc It's a pomodoro. :)
  * @license MIT
  */

'use strict';

const curr = new Date();
const pomodoro = plus25m(curr);

setInterval(function() {
  const rem = timeRemaining(pomodoro);
  console.log('Remaining:');
  console.log(rem.min + 'm' + rem.sec + 's');
}, 200);

/**
 * @desc Adds 25 minutes to the current time
  * @param current {Object} The current time
  * @return Date object
  */
function plus25m(current) {
  return new Date(current.getTime() + 25*60000);
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
