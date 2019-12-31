const chalkAnimation = require('chalk-animation');

function BuildTimeOutput() {
  let content = '';
  const display = chalkAnimation.pulse(content);

  return function TimeOutput(timeObj) {
    const { minutes, seconds, label, id } = timeObj;

    content = `${label} \n${minutes}m:${seconds}s`;

    display.replace(content);
  };
}

module.exports = BuildTimeOutput;
