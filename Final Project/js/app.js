

//Array of Household Tasks
let taskList = new Array();
taskList[0]=new Array ("dishes","Do the Dishes",3);
taskList[1]=new Array("bathroom","Clean the bathroom",5);
taskList[2]=new Array("vacuum","Vacuum",6);
taskList[3]=new Array("sweep","Sweep",2);
taskList[4]=new Array("lunchbox","Clean My Lunchbox",1);
taskList[5]=new Array("bed","Make My Bed",1);
taskList[6]=new Array("piggies","Change Piggie Bedding",5);
taskList[7]=new Array("dust","Dust",3);
taskList[8]=new Array("tub","Clean the Tub",4);


//look up task description
function lookupTaskDescription(task){
    for (var i=0;i<taskList.length;i++){
        if(taskList[i][0]==task){
            return taskList[i][1]+ '(' + taskList[i][2] + ')';
        }
    } 
}
//look up task points
function lookupTaskPoints(task){
    for (var i=0;i<taskList.length;i++){
        if(taskList[i][0]==task){
            return taskList[i][2];
        }
    } 
}


$(document).ready(function(){
    

    //User
        //set focus to the correct user tab
        //show data for that user

    //Winner
        //check if end of the game (last day of the week or later
        // and calculate winner 

    //populate days - get seven days starting on start day
        //re-populate object for the week's game
        //object needs list of days and players with corresponding points


    //switch players by clickin on tabs - load new form
        //show hide data?

    //click a checkbox - trigger Firebase change event


    //hide all day details to start with
    $('.wrapper').slideUp();
    //show/hide days
    $('.dayHead').click(function(){
        $(this).parent().find('.wrapper').slideToggle();
    })

    //fill up the task dropdowns
    for (var i=0;i<taskList.length;i++){
        let taskDesc=taskList[i][1]+ '(' + taskList[i][2] + ')';
        $('<option/>').val(taskList[i][0]).html(taskDesc).appendTo('.tasks');
    }


    //Set new game  
    $('.btnSetDate').click(function(){

        //get the new start date
        let startDate = $('.newStartDate').val();
        if(!Date.parse(startDate)){
            alert('Please entry a valid date');
        }
        else{
            //create an object with seven days of the game
            var gameDates = [];
            var times = 7;
            for(var i=0; i < times; i++){
                let day = moment(startDate).add(i, 'days').format("dddd MMM Do YYYY"); 
                gameDates.push(day);
                let d=i+1;
                $('.day'+ d).html(day);
            }
            
            //let weekStart=moment(startDate).format("dddd MMM Do YYYY");         
            $('.weekOf').html('Game Ends on ' + gameDates[6]);
        }
    })



    //Add a Task
    $('.add').click(function(){
        //get the value of this day's dropdown only
        let task = $(this).parent().children('.tasks').val();
        //add to the current day's list only
        $(this).parent().children('ul').append("<li><input id="+task+" type='checkbox'>"+ lookupTaskDescription(task) + "<a href='javascript:void(0);' class='remove'>&times;</a></li>");



        //add to Firebase - test write
        writeFirebase();

    })
    
    
    //Remove a Task
    $(document).on("click", "a.remove" , function() {
        $(this).parent().remove();

        //read Firebase - test read
        readFirebase();
    });


    


});