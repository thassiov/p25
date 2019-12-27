const BuildTimeOutput = require('./TimeOutput');
const BuildTimer = require('./Timer');
const makePomodoro = require('../core/models/pomodoro');

const output = BuildTimeOutput();
const timer = BuildTimer({ output });

function Timer(duration, label) {
  const pomodoro = makePomodoro({
    duration,
    label
  });

  timer(pomodoro);
}

module.exports = Timer;
