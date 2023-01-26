const Thermostat = require('./thermostat.js')

describe('thermostat can be created and adjusted', () => {
    const temp = new Thermostat();

    test('returns starting temperature of 20', () => {
        expect(temp.getTemperature()).toEqual(20);
  });
});

describe('thermostat can be created adjusted', () => {
    const temp = new Thermostat();

    test('temperature can be increased by 1', () => {
        expect(temp.up()).toEqual(21);
  });
});

describe('thermostat can be created adjusted', () => {
    const temp = new Thermostat();
    test('temperature can be decreased by 1', () => {
        expect(temp.down()).toEqual(19);
  });
});





