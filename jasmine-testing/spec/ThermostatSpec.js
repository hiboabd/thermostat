// 'use strict';

describe('Thermostat', function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('initialised with degrees set to 20', function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
