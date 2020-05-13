$( document ).ready(function() {

  var thermostat = new Thermostat()
  function updateTemperature() {
      $("h1").text(thermostat.temperature);
      $("h1").attr('class', thermostat.energyUsage());
  }
  updateTemperature();

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });
  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })
  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  })
  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  })
});
