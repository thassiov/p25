const chalkAnimation = require('chalk-animation');

function BuildTimeOutput() {
  let content = '';
  const display = chalkAnimation.pulse(content);

  return function TimeOutput(timeObj) {
    const { minutes, seconds, label, id } = timeObj;

    content = `${label} (id:${id})\n\t${minutes}m:${seconds}s`;

    display.replace(content);
  };
}

module.exports = BuildTimeOutput;
