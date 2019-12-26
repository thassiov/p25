const buildMakePomodoro = require('./Pomodoro');
const validator = require('../../../misc/validator');
const idGenerator = require('../../../misc/idGenerator');

const makePomodoro = buildMakePomodoro({ validator, idGenerator });

module.exports = makePomodoro;
