$( document ).ready(function() {
  var thermostat = new Thermostat()
  $("h1").text(thermostat.temperature);

  $('#temperature-up').click(function(){
    thermostat.up();
    $("h1").text(thermostat.temperature);
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    $("h1").text(thermostat.temperature);
  });

});
