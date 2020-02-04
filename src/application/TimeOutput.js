function BuildTimeOutput() {
  let content = '';

  return function TimeOutput(timeObj) {
    const { minutes, seconds, label } = timeObj;

    content = `${label} ${minutes}m:${seconds}s`;

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(content);
  };
}

module.exports = BuildTimeOutput;
