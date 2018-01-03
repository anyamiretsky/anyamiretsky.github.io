$('#click-me').click(function(){
    // Store your current age into a variable
    var age = parseInt($('#age').val());
    // Store a maximum age into a variable
    var max_age = parseInt($('#max-age').val());
    // Store a favorite drink (from a drop-down) into a variable
    var item = $('#item').val();
    // Store an amount per day into a variable
    var num_per_day = parseInt($('#num-per-day').val());
   // Calculate how much you would drink for the rest of your life!
    var days_left = ((max_age - age) * 365);
    var tot_number = days_left * num_per_day;
    // Output your results to the user
    $('#solution').html(tot_number);
    $('#drink').html(item);

})

