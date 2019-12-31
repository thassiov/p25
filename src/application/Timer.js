'use strict';

function BuildTimer({ output }) {
  return function Timer(pomodoro) {
    setInterval(() => {
      const { minutes, seconds } = timeRemaining(pomodoro);

      if (minutes === 0 && seconds === 0) {
        // time's up
        clearInterval(this);
      }

      const content = {
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${minutes}` : seconds,
        label: pomodoro.getLabel(),
        id: pomodoro.getId()
      };

      output(content);
    }, 500);
  };
}

module.exports = BuildTimer;

/**
  * @desc Tells how many minutes the current session has left
  * @param pomodoro {Object} The time which the current pomodoro ends
  * @return Object with minutes and seconds remaining
  */
function timeRemaining(pomodoro) {
  const diff = (pomodoro.getStartTime() + pomodoro.getDuration()) - Date.now();
  const sec = Math.floor((diff/1000) % 60);
  const min = Math.floor((diff/1000/60) % 60);

  return {
    minutes: min,
    seconds: sec
  };
}