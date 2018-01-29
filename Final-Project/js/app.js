var tasksList = [
  {
    id: "dishes",
    description: "Do the Dishes",
    points: 3
  }
  ,
  {
    id: "bathroom",
    description: "Clean the bathroom",
    points: 5
  }
  ,
  {
    id: "vacuum",
    description: "Vacuum",
    points: 6
  }
  ,
  {
    id: "sweep",
    description: "Sweep",
    points: 2
  },
  {
    id: "lunchbox",
    description: "Clean My Lunchbox",
    points: 1
  },
  {
    id: "bed",
    description: "Make My Bed",
    points: 1
  },
  {
    id: "cage",
    description: "Guinea Pig Cage Cleaning",
    points: 5
  },
  {
    id: "dust",
    description: "Dust",
    points: 3
  },
  {
    id: "tub",
    description: "Clean the Tub",
    points: 4
  }
];


//Current User
var currentUserIndex = 0;

//console.log(game);


//write prize for currentUser
var prize =game.users[currentUserIndex].prize;
var name = game.users[currentUserIndex].name;
$('.userPrize').html(name + "'s prize: " + prize);
 


var $tabs = $('.tabs');

game.users.forEach(function(user){
  var tab = `<span class="tab tab-1 ${user.name}">${user.name} (${user.pointsUser})</span>`;
  $tabs.append(tab);
})


function renderTab () {
  var $days = $('.days');
  //debugger;
  game.users[currentUserIndex].days.forEach(function(day, index){
    //console.log('day index:'+ index);
    var $day = $(`<div class="day row">\
          <header class="dayHead">\
            <h4 class="dayHead-h  day${index}">${day.dayName}</h4>\
            <span class="points-${day.dayName}">total: 0</span>\
          </header>\
          <div class="wrapper">\
            <span>\
              <select class="tasks tasks-select" name="tasks">\
                <!-- filled dynamically from the taskList array -->
              </select>\
              <a href='javascript:void(0);' class='add'>&plus;</a>\
              <ul class="day-tasks">\
              </ul>\
            </span>\
          </div>\
        </div>`);


    var tasksSelect = $day.find('.tasks-select');
    //fill in all task dropdowns
    tasksList.forEach(function (task){
     tasksSelect.append(`<option class="${day.dayName}" value="${task.id}">${task.description} (${task.points})</option>`);
    });

    //fill in all tasks for each day
    var tasksDay = $day.find(".day-tasks");
    day.tasks.forEach(function(task) {
      tasksDay.append(`<li><input class="task-checkbox ${day.dayName}" id="${task.id}" type='checkbox'>${task.description}(${task.points})</li>`);
    });

    //add day
    $days.append($day);
  })
}

renderTab();

//add task to game object
function writeTask(user, dayIn, task, desc, pointsIn){
  game.users[user].days.forEach(function(day){
     //add task
    if(day.dayName==dayIn){
      var addTask={
        id: task,
        description: desc,
        points: pointsIn,
        completed: false
       };
      day.tasks.push(addTask);
    }
  })
  
}

function removeTask(user, dayIn, taskIn){
  game.users[user].days.forEach(function(day){
    if (day.dayName==dayIn){
      day.tasks.forEach(function(task, index){
        //remove task
        if(task.id==taskIn){
          console.log('index of task is: '+ IDBIndex);
          day.tasks.splice(index,1)
        }
      })
  }
})

}
function addUserPoints(user, pointsIn){
  //increment user's points
  game.users[user].pointsUser = game.users[user].pointsUser + pointsIn;
}
function subtractUserPoints(user, pointsIn){
  //subtract user's points
  game.users[user].pointsUser = game.users[user].pointsUser - pointsIn;
}

//add day's task points to game object
function addDayPoints(user, dayIn, taskIn, completedIn, pointsIn){
    game.users[user].days.forEach(function(day){
      if(day.dayName==dayIn){
          //increment day's points
          day.pointsDay= day.pointsDay + pointsIn;
          //mark task as completed
          day.tasks.forEach(function(task){
            if (task.id==taskIn){
                task.completed = completedIn;
                // console.log('day name: ' + day.dayName + ' taskid:' + task.id);
            }
          })
        }
      
   }) 
}

//subtract day's task points to game object
function subtractDayPoints(user, dayIn, taskIn, completedIn, pointsIn){
   
    game.users[user].days.forEach(function(day){
      if(day.dayName==dayIn){
          //subtract day's points
          day.pointsDay= day.pointsDay - pointsIn;
          //mark task as incomplete
          day.tasks.forEach(function(task){
            if (task.id==taskIn){
                task.completed = completedIn;
                // console.log('day name: ' + day.dayName + ' taskid:' + task.id);
            }
          })
        }
      
   }) 
}



function updateHTMLpoints(user,dayIn){
    console.log('in updateHTMLpoints');
    var userSelector = '.' + game.users[user].name;
    $(userSelector).html(game.users[user].name + ' ('+ game.users[user].pointsUser+')');

    game.users[user].days.forEach(function(day){
      //console.log('currentDay: ' + dayIn + ' dayName: ' + day.dayName)
      if(day.dayName==dayIn){
        var selector='.points-'+ day.dayName;
        console.log('selector element' + selector);
        $(selector).html('total: '+ day.pointsDay );
      }
    });

};



//look up task description
function lookupTaskDescription(taskAdd) {
  var taskDesc;
  tasksList.forEach(function(task){
      if (task.id == taskAdd) {
        taskDesc = task.description;
      }
  })
  return taskDesc;

}


//look up task points
function lookupTaskPoints(taskAdd) {
  var taskPoints;
  tasksList.forEach(function(task){
      if (task.id == taskAdd) {
        taskPoints = task.points;
      }
  })
  return taskPoints;
}




$(document).ready(function() {
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

  //Slide Toggle to hide all day details to start with
  $(".wrapper").slideUp();
  //show/hide days
  $(".dayHead").click(function() {
    $(this)
      .parent()
      .find(".wrapper")
      .slideToggle();
  });

  //hightlight tab that is in focus
  $('.tab').focus(function(){
    $(this).css("background-color","yellow");
  })



  //Set new game
  $(".btnSetDate").click(function() {
    console.log('Setting up new game');

    //get the new start date
    let startDate = $(".newStartDate").val();

    //invalid start date
    if (!Date.parse(startDate)) {
      alert("Please entry a valid date");
    //valid start date
    } else {
      //create an object with seven days of the game
      var gameDates = [];
      var times = 7;
      for (var i = 0; i < times; i++) {
        let day = moment(startDate)
          .add(i, "days")
          .format("dddd MMM Do YYYY");
        gameDates.push(day);
        // let d = i + 1;
        // $(".day" + d).html(day);

      }
      
        //console.log('days[0]' + game.users[currentUserIndex].days[0].dayName);

        //console.log(day.dayName);
        for (i=0;i<gameDates.length;i++){

          var oldDayName = game.users[currentUserIndex].days[i].dayName;
          //update game object with new dayNames
          game.users[currentUserIndex].days[i].dayName=gameDates[i];
          $(".day" + i).html(gameDates[i]);

          //replace classname on select option elements
         
          var classToReplace = '.' + oldDayName;
          console.log('select dropdown class to replace:' + classToReplace + ' new class:'+gameDates[i]);
          $(classToReplace).attr( "class", gameDates[i]);
         
          //replace classname for points-dayName for all days point totals
          classToReplace = '.points-' + oldDayName;
          $(classToReplace).attr( "class", 'points-'+ gameDates[i]);


          //clear out all tasks for all days


          debugger;
        }
         //renderTab();
     

      console.log(gameDates);
      console.log(game);
      //let weekStart=moment(startDate).format("dddd MMM Do YYYY");
      $(".weekOf").html("Game Ends on " + gameDates[6]);
    }
  }); //end set new game


  //Click to Add a Task
  $(".add").click(function() {
      // //get the value of this day's dropdown only
      var task = $(this)
        .parent()
        .children(".tasks")
        .val();
      
      var currentDay = $(this)
        .parent()
        .children(".tasks-select")
        .find(":selected")
        .attr("class");


      var desc= lookupTaskDescription(task);
      var points = lookupTaskPoints(task);
      //append task to day
      $(this)
        .parent()
        .children("ul")
        .append(
        //class="task-checkbox ${day.dayName}"
          "<li><input class='task-checkbox " +
           currentDay + 
           "'id=" +
            task +
            " type='checkbox'>" +
            desc + '('+ points +')'+
            "<a href='javascript:void(0);' class='remove'>&times;</a></li>"
      );
    //add task to game  
    //console.log('currentuser: '+ currentUserIndex + ' currentDay: ' +currentDay + ' task: ' + task + ' desc: ' + desc + ' points: ' + points)
    writeTask(currentUserIndex,currentDay,task,desc, points);
    console.log(game);
    // //add to Firebase - test write
    // writeFirebase();
  });



//Add/Remove points on task checkbox change
//$(document).on('change', '[type=checkbox]', function() {
$(document).on('change', 'input.task-checkbox', function() { 
   // console.log('checkbox id:' + $(this).attr("id"));
    var task = $(this).attr("id");
    var points = lookupTaskPoints(task);
      //get current day
      //console.log('parent: '+ $(this).parent().parent().parent().attr("class"));
    var currentDay = $(this)
        .parent()
        .parent()
        .parent()
        .children(".tasks-select")
        .find(":selected")
        .attr("class");
    
    var completed;
    if ($(this).prop('checked')){
      completed = true;
      addDayPoints(currentUserIndex, currentDay, task, completed, points);
      addUserPoints(currentUserIndex, points);
    }else {
      completed=false;
      subtractDayPoints(currentUserIndex, currentDay, task, completed, points);
      subtractUserPoints(currentUserIndex, points);
    }
    
    //console.log('currentuser: '+ currentUserIndex + ' currentDay: ' + currentDay + ' task: ' + task + ' points: '  + points);
    updateHTMLpoints(currentUserIndex,currentDay);
  
    console.log(game);

}) //end on checkbox change



//Remove a Task
  $(document).on("click", "a.remove", function() {

    var task= $(this)
    .parent()
    .find(".task-checkbox")
    .attr('id');
    var points = lookupTaskPoints(task);
    //console.log(task);

    var currentDay = $(this)
    .parent()
    .parent()
    .parent()
    .children(".tasks-select")
    .find(":selected")
    .attr("class");
    //console.log(currentDay);
    var completed=false;

    var isChecked= $(this)
    .parent()
    .find('.task-checkbox')
    .prop('checked');

    //if checkbox is checked then remove points for day
    if (isChecked){
      console.log('currentuser: '+ currentUserIndex + ' currentDay: ' + currentDay + ' task: ' + task + ' points: '  + points);
      subtractDayPoints(currentUserIndex, currentDay, task, completed, points);
      subtractUserPoints(currentUserIndex, points);
      updateHTMLpoints(currentUserIndex,currentDay);
      
    }
    //end if

    //remove task from day
    removeTask(currentUserIndex, currentDay, task);

    console.log(game);

    //remove from page
    $(this)
      .parent()
      .remove();
     
    //read Firebase - test read
    //readFirebase();
  });



//end document ready  
});
