// 'use strict';

describe('Thermostat', function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('initialised with degrees set to 20', function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase the temperature', function () {
    thermostat.up();

    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature', function () {
    thermostat.down();
    
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
});
