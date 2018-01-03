$(document).ready(function(){
    $('#penguin').hide();
    //Change button text depending on the scale to 
    //convert to    
    $('#scale').change(function(){
        console.log('the scale is:' + $('#scale').val());
        
        if($('#scale').val() === 'F'){
            $('#click-me').html('Convert to Celsius');
            
        }
        else {
            $('#click-me').html('Convert to Fahrenheit');
           
        }
        
    }) 
    
    //Calculate temp on button click
    $('#click-me').click(function(){
        
        var temp = parseInt($('#temp').val());
        var scale = $('#scale').val();
        var temp_out;
        var imgPath;

        
        $('#penguin').hide();

        //test for numeric value in temp
        if(!isNaN(temp)){
            //return in Celsius
            if(scale==='F'){
                //T(°C) = (T(°F) - 32) × 5/9
                scale_out='Celcius';
                temp_out = (temp-32) * 5/9; 
                if(temp >=87){
                    imgPath = "images/hot.jpg";
                }
                else if (temp <= 30){
                    imgPath = "images/cold.jpg";
                    $('#penguin').show();

                }
                else{
                    imgPath = "images/warm.jpg";
                }
            }
            //return in Fahrenheit
            else {
                //T(°F) = T(°C) × 9/5 + 32
                scale_out='Fahrenheit';
                temp_out = (temp * 9/5) + 32;
                if(temp >=32){
                    imgPath = "images/hot.jpg";
                }
                else if (temp<= 0){
                    imgPath = "images/cold.jpg";
                    $('#penguin').show();
                }
                else{
                    imgPath = "images/warm.jpg";
                }
            }

       
            //round to four decimal places
            temp_out = temp_out.toFixed(4);
            
            //set Result text
            $('#result').html(`Your converted temp is: ${temp_out}° ${scale_out}!`);
            

            //set background image
            $('body').css('background-image', 'url(' + imgPath + ')');

        }//NaN test
    })

  

})


