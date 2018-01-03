$('#clickCelsius').click( function (){
    var celsius = $('#celsiusOne').val();
    var resultFahrenheit = (celsius * 9) / 5 +32;
    $('#fahrenheitOne').val(resultFahrenheit);
    $('#image').attr('src','./img/fire.jpg');
    // change the src of the image to be the "FIRE" image
})

$('#clickFahrenheit').click( function (){
    var fahrenheit = $('#fahrenheitTwo').val();
    var resultCelsius = ((fahrenheit -32) * 5) / 9;
    $('#celsiusTwo').val(resultCelsius);
    // change the src of the image to be the "Ice" image
    $('#image').attr('src','./img/ice.jpg');
})