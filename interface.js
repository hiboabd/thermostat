$( document ).ready(function() {

  var thermostat = new Thermostat()
  function updateTemperature() {
      $("#temperature").text(thermostat.temperature);
      $("#temperature").attr('class', thermostat.energyUsage());
  }
  updateTemperature();

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=057131373489e84b5395df21e3725054';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    })
  }

  displayWeather('london');

  $('#current-city').change(function(){
    var city = $('#current-city').val();
    displayWeather(city)
  })


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
