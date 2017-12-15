
$('#click-me').click(function(){

    // Store your current age into a variable
    var age = parseInt($('#age').val());
    // Store a maximum age into a variable
    var max_age = parseInt($('#max-age').val());
    // Store a favorite drink (from a drop-down) into a variable
    var item = $('#item').val();
    // Store an amount per day into a variable
    var num_per_day = parseInt($('#num-per-day').val());
   

    var years_left = max_age - age;
    var today= new Date();
    var death = new Date(today.getFullYear() + years_left, today.getMonth(), today.getDate());
    console.log('years left: ' + years_left);
    console.log('today is: ' + today);
    console.log('death is: ' + death);

    Date.daysBetween = function( date1, date2 ) {
        //Get 1 day in milliseconds
        var one_day=1000*60*60*24;
      
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
      
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
          
        // Convert back to days and return
        return Math.round(difference_ms/one_day); 
    }

    var days_left = Date.daysBetween(today, death);
    console.log('days_left: ' + days_left);

    // Calculate how much you would drink for the rest of your life!
    //var days_left = ((max_age - age) * 365);
    // var years_left = max_age - age;
    var tot_number = days_left * num_per_day;
    console.log('tot-number: ' + tot_number);
    
    // Output your results to the user
    $('#solution').html(tot_number);
    $('#drink').html(item);

})

