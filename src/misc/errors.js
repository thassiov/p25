const { inherits } = require('util');

function PomodoroDurationError(details) {
    Error.captureStackTrace(this, this.constructor);
    this.name = 'PomodoroDurationError';
    this.message = 'PomodoroDurationError: the duration provided is invalid';
    if (details instanceof Object) {
      this.details = details;
    }
    else if (details) {
      this.details = details;
    }
}

inherits(PomodoroDurationError, Error);

module.exports = {
  PomodoroDurationError
};
