const BuildTimer = require('./Timer');
const BuildTimeOutput = require('./TimeOutput');
const makePomodoro = require('../core/models/pomodoro');

const output = BuildTimeOutput();
const timer = BuildTimer({ output });

function start(duration, label) {
  const pomodoro = makePomodoro({
    duration,
    label
  });

  timer(pomodoro);
}

const p25 = Object.freeze({
  start
});

module.exports = p25;
