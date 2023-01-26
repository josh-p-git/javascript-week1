const Thermostat = require('./thermostat.js')

describe('thermostat can be created', () => {
    const temp = new Thermostat();

    test('returns starting temperature of 20', () => {
        expect(temp.getTemperature()).toEqual(20);
  });
});

describe('thermostat can be adjusted', () => {
    const temp = new Thermostat();

    test('temperature can be increased by 1', () => {
        expect(temp.up()).toEqual(21);
  });
});

describe('thermostat can be adjusted', () => {
    const temp = new Thermostat();
    test('temperature can be decreased by 1', () => {
        expect(temp.down()).toEqual(19);
  });
});

describe('powersaving mode can be used', () => {
    const temp = new Thermostat();
    test('powersaving mode on sets max temp to 25 when enabled', () => {
        temp.setPowerSavingMode(true);
        for (let i = 0 ; i < 10 ; i++) {
            temp.up();
          };
          expect(temp.getTemperature()).toEqual(25);
  });
});

describe('powersaving mode can be used', () => {
    const temp = new Thermostat();
    test('powersaving mode off sets max temp to 32 when enabled', () => {
        temp.setPowerSavingMode(false);
        for (let i = 0 ; i < 15 ; i++) {
            temp.up();
          };
          expect(temp.getTemperature()).toEqual(32);
  });
});

describe('temperature cannot be set below 10', () => {
    const temp = new Thermostat();
    test('temperature cannot be set below 10', () => {
        for (let i = 0 ; i < 15 ; i++) {
            temp.down();
          };
          expect(temp.getTemperature()).toEqual(10);
  });
});

describe('thermometer can be reset', () => {
    const temp = new Thermostat();
    test('temperature can be reset to 20', () => {
        temp.down();
        temp.reset();
        expect(temp.getTemperature()).toEqual(20);
  });
});

describe('thermometer repots energy usage', () => {
    const temp = new Thermostat();
    test('thermostat returns low-usage when temperature is < 18', () => {
        for (let i = 0 ; i < 3 ; i++) {
            temp.down();
          };
          expect(temp.energyUsage()).toEqual('low-usage');
  });
});

describe('thermometer repots energy usage', () => {
    const temp = new Thermostat();
    test('thermostat returns medium-usage when temperature is less than <= 25', () => {
          expect(temp.energyUsage()).toEqual('medium-usage');
  });
});

describe('thermometer repots energy usage', () => {
    const temp = new Thermostat();
    test('thermostat returns high-usage when temperature is > 25', () => {
        temp.setPowerSavingMode(false);
        for (let i = 0 ; i < 7 ; i++) {
            temp.up();
          };
          expect(temp.energyUsage()).toEqual('high-usage');
  });
});