const makePomodoro = require('./index');
const chai = require('chai');

const expect = chai.expect;

describe('CORE: Pomodoro model', () => {
  it('should create a new pomodoro', () => {
    const timer = makePomodoro();
    expect(timer.getId()).to.be.a('string');
    expect(timer.getLabel()).to.be.empty;
    expect(timer.getStartTime()).to.be.a('number');
    expect(timer.getDuration()).to.equal(1500000);
  });

  it('should create a new pomodoro with a label', () => {
    const timer = makePomodoro({ label: 'morning kata' });
    expect(timer.getId()).to.be.a('string');
    expect(timer.getLabel()).to.equal('morning kata');
    expect(timer.getStartTime()).to.be.a('number');
    expect(timer.getDuration()).to.equal(1500000);
  });

  it('should create a new pomodoro with 30 minutes of duration', () => {
    const timer = makePomodoro({ duration: 30 });
    expect(timer.getId()).to.be.a('string');
    expect(timer.getLabel()).to.be.empty;
    expect(timer.getStartTime()).to.be.a('number');
    expect(timer.getDuration()).to.equal(1800000);
  });

  it('should not create a pomodoro with less than one minute of duration', () => {
    try {
      makePomodoro({ limit: 0.5 });
    }
    catch (timerError) {
      expect(timerError.message).to.equal('PomodoroDurationError: the duration provided is invalid');
      expect(timerError.details.duration).to.equal(0.5);
    }
  });

  it('should not create a pomodoro with an invalid duration', () => {
    try {
      makePomodoro({ limit: 'not valid' });
    }
    catch (timerError) {
      expect(timerError.message).to.equal('PomodoroDurationError: the duration provided is invalid');
      expect(timerError.details.duration).to.equal('not valid');
    }
  });
});
