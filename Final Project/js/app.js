
//Array of Household Tasks
let taskList = new Array();
taskList[0]=new Array ("dishes","Do the Dishes (3)",3);
taskList[1]=new Array("bathroom","Clean the bathroom (5)",5);
taskList[2]=new Array("vacuum","Vacuum (6)",6);
taskList[3]=new Array("sweep","Sweep(2)",2);
taskList[4]=new Array("lunchbox","Clean My Lunchbox(1)",1);
taskList[5]=new Array("bed","Make My Bed(1)",1);
taskList[6]=new Array("piggies","Change Piggie Bedding(5)",5);
taskList[7]=new Array("dust","Dust(3)",3);
taskList[8]=new Array("tub","Clean the Tub(4)",4);



$(document).ready(function(){

    //fill up the task dropdown
    for (var i=0;i<taskList.length;i++){
        $('<option/>').val(taskList[i][0]).html(taskList[i][1]).appendTo('.tasks');
    }

    //show/hide days
    $('.dayHead').click(function(){
        $(this).parent().find('.wrapper').slideToggle();
    })

    //add selected task
    $('.add').click(function(){
        let task = $('.tasks').val();
        $('ul').append("<li><input id="+task+" type='checkbox'>"+ task + "<a href='javascript:void(0);' class='remove'>&times;</a></li>")
    })
            


    //example code for adding and removing an item 
    //using the anchor wiht class=remove
    
    // $("button").click(function(){
    //     $("ol").append("<li>list item <a href='javascript:void(0);' class='remove'>&times;</a></li>"); 
    // });
    // $(document).on("click", "a.remove" , function() {
    //     $(this).parent().remove();
    // });
});