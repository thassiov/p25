function validator(duration) {
  if (!duration) {
    return false;
  }

  if (typeof duration !== 'number') {
    return false;
  }

  if (duration < 1) {
    return false;
  }

  return true;
}

module.exports = validator;
