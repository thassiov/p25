const {
  PomodoroDurationError
} = require('../../../misc/errors');

function buildMakePomodoro({ validator, idGenerator }) {
  return function makePomodoro({
    label = '',
    duration = 25
  } = {}) {
    const isDurationValid = validator(duration);
    if (!isDurationValid) {
      throw new PomodoroDurationError(duration);
    }

    const id = idGenerator();
    const durationMillis = duration * 60000;
    const startTime = Date.now();

    return Object.freeze({
      getId: () => id,
      getLabel: () => label,
      getDuration: () => durationMillis,
      getStartTime: () => startTime
    });
  }
};

module.exports = buildMakePomodoro;
