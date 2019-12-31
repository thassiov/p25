/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
  * @desc It's a pomodoro. :)
  * @license MIT
  */

'use strict';

const p25 = require('../src/application');

p25.start(...parseArgs());

function parseArgs() {
  const duration = !isNaN(process.argv[2]) ? parseInt(process.argv[2]) : 25;
  const label = process.argv.slice(3).join(' ') || '';

  return [duration, label];
}
