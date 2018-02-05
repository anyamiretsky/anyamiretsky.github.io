//ARRAY WITH TASKS LIST
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


//DEFAULT CURRENTUSER
var currentUserIndex = 0;

//console.log(game);


//PRIZE FOR CURRENT USER
var prize =game.users[currentUserIndex].prize;
var name = game.users[currentUserIndex].name;
$('.userPrize').html(name + "'s prize: " + prize);
 
//CALCULATE WINNER
function getWinner(){
  var Winner = '';
  var winningPoints=0;
  game.users.forEach(function(user){
    if (winningPoints < user.pointsUser){
      winningPoints = user.pointsUser; 
      Winner= user.name;
    }
  })
  game.winner = Winner;
}



//APPEND TAB FOR EACH USER
var $tabs = $('.tabs');
game.users.forEach(function(user,index){
  var tab = `<span data-user=${index} class="tab ${user.name}">${user.name} (${user.pointsUser})</span>`;
  $tabs.append(tab);
})

//TAB CLICK - RE-RENDER TAB
$tabs.on('click', function(){
  currentUserIndex = $(event.target).data('user');
  renderTab();
  collapseDays();
  var className = '.'+ game.users[currentUserIndex].name;
  $('.tab').removeClass("tab-focus");
  $(className).addClass("tab-focus");

})



//RENDER TAB
function renderTab () {
  var $days = $('.days');

  // $('.userPrize').html(`${game.users[currentUserIndex].name}'s prize is an....concatinate prize here'`);
  $('.userPrize').html(`${game.users[currentUserIndex].name}'s prize is: ${game.users[currentUserIndex].prize}`);

  //get rid of all days sections
  $days.empty();

  //debugger;
  //day${index}
  game.users[currentUserIndex].days.forEach(function(day, index){
    //console.log('day index:'+ index);
    var $day = $(`<div class="day row">\
          <header class="dayHead">\
            <h4 class="dayHead-h ${day.dayName} ">${day.dayLabel}</h4>\
            <span class="points-${day.dayName}">total: ${day.pointsDay}</span>\
          </header>\
          <div class="wrapper">\
            <span>\
              <select class="tasks tasks-select" name="tasks">\
                <!-- filled dynamically from the taskList array -->
                <option class=${day.dayName} value=''>--- Select Task ---</option>\
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
      var checked='';
      if (task.completed){
        checked='checked';
      }
      tasksDay.append(`<li><input class="task-checkbox ${day.dayName}" id="${task.id}" type='checkbox' ${checked}>${task.description}(${task.points})<a href='javascript:void(0);' class='remove'>&times;</a></li>`);
    });

    //add day
    $days.append($day);
  })
}

renderTab();

function collapseDays(){
        //slide toggle days
        $(".wrapper").slideUp();
        $('.wrapper').first().slideDown();
        //show/hide days
        $(".dayHead").click(function() {
          $(this)
            .parent()
            .find(".wrapper")
            .slideToggle();
        });
}




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

function removeAllTasks(){
  game.users.forEach(function(user){
    user.days.forEach(function(day){
     for (var i=0;i<day.tasks.length;i++){
       console.log(day.tasks);
       day.tasks.pop();
     }

    })
  })
}


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
    
    var userSelector = '.' + game.users[user].name;
    //console.log('in updateHTMLpoints userSelector'+ userSelector);
    $(userSelector).html(game.users[user].name + ' ('+ game.users[user].pointsUser+')');

    game.users[user].days.forEach(function(day){
      //console.log('currentDay: ' + dayIn + ' dayName: ' + day.dayName)
      if(day.dayName==dayIn){
        var selector='.points-'+ day.dayName;
        //console.log('selector element' + selector);
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



//DOCUMENT READY
$(document).ready(function() {
  //User
  //set focus to the correct user tab
  //show data for that user
  var className = '.'+ game.users[currentUserIndex].name;
  $(className).addClass("tab-focus");
  //Winner
  //check if end of the game (last day of the week or later
  // and calculate winner

  //Slide Toggle to hide all day details to start with
  $(".wrapper").slideUp();
  $('.wrapper').first().slideDown();
 
  //show/hide days
  $(".dayHead").click(function() {
    $(this)
      .parent()
      .find(".wrapper")
      .slideToggle();
  });

  //hightlight tab that is in focus
  

  //SET NEW GAME
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
       
      }
        //update game object with new dayNames
        for (i=0;i<gameDates.length;i++){
          game.users[currentUserIndex].days[i].dayLabel=gameDates[i];

        }

        // debugger;

        //clear out all tasks for all days
        game.winner = '';
        game.startDate=startDate;
        game.endDate=gameDates[6];
        game.users.forEach(function(user){
          //$('.')
          user.pointsUser=0;
          user.days.forEach(function(day){
            day.pointsDay=0;
            day.tasks=[];
          })
        })    

      //let weekStart=moment(startDate).format("dddd MMM Do YYYY");

      //update User points shown on tabs;
      game.users.forEach(function(user,index){
        var userSelector = '.' + user.name;
        //console.log('in updateHTMLpoints userSelector'+ userSelector);
        $(userSelector).html(user.name + ' ('+ user.pointsUser+')');
      })

      $(".weekOf").html("Game Ends on " + gameDates[6]);
      renderTab ();

      collapseDays();


      //console.log(gameDates);
      console.log('IN SET NEW GAME');
      console.log(game);
      writeFirebase(game);
      readFirebase("name"); 
    }
  }); //end set new game


  //ADD TASK
  $(document).on("click", ".add", function() {

      //get the value of this day's dropdown only
      var task = $(this)
        .parent()
        .children(".tasks")
        .val();
        console.log('task value '+ task);
    if ( task != ''){
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
          
          
          console.log('ON ADD TASK');
          console.log(game);
          // //add to Firebase - test write
          // writeFirebase();

      }//end if for undefined task
  });



//CHECKBOX CHECKED CHANGE
$(document).on('change', 'input.task-checkbox', function() { 
  //$(document).on('change', '[type=checkbox]', function() {
   // console.log('checkbox id:' + $(this).attr("id"));
    var task = $(this).attr("id");
    var points = lookupTaskPoints(task);
      //get current day
  
    var currentDay = $(this)
        .parent()
        .parent()
        .parent()
        .children(".tasks-select")
        .find(":selected")
        .prop("className");
        //.attr("class");
    //console.log('currentDay=: '+ currentDay);
    
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
    
    //console.log('currentuser: '+ currentUserIndex + ' currentDay: ' + currentDay + ' task: ' + task + ' points: '  + points + ' completed: '+ completed);
    updateHTMLpoints(currentUserIndex,currentDay);
  

    //Print winner if today is the last day of the game
    getWinner();
    $('.winner').html("So far this weeks's winner is: " + game.winner);

    console.log('ON CHECKBOX CLICK');
    console.log(game);

}) //end on checkbox change



//REMOVE TASK
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

    console.log('IN REMOVE TASK');
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
