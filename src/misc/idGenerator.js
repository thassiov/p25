function idGenerator() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = idGenerator;
