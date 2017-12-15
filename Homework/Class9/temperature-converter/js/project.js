$(document).ready(function(){
    //Change button text depending on the scale to 
    //convert to    
    $('#scale').change(function(){
        console.log('the scale is:' + $('#scale').val());
        
        if($('#scale').val() === 'F'){
            $('#click-me').html('Convert to °C!');
            
        }
        else {
            $('#click-me').html('Convert to °F!');
           
        }
        
    }) 
    
    //Calculate temp on button click
    $('#click-me').click(function(){
        
        var temp = parseInt($('#temp').val());
        var scale = $('#scale').val();
        var temp_out;

        //return in Celsius
        if(scale==='F'){
            //T(°C) = (T(°F) - 32) × 5/9
            scale_out='Celcius';
            temp_out = (temp-32) * 5/9; 
            
        }
        //return in Fahrenheit
        else {
            //T(°F) = T(°C) × 9/5 + 32
            scale_out='Fahrenheit';
            temp_out = (temp * 9/5) + 32;
    
        }
        
        //round to four decimal places
        temp_out = temp_out.toFixed(4);

        $('#temp_out').html(temp_out);
        $('#scale_out').html(scale_out);
    })

})