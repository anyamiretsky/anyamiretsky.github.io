// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {
    var clickNum = parseInt($('#click-num').html());
    $('#clickme').click(function () {

        console.log(clickNum);
        clickNum++;
        $('#click-num').html(clickNum);

        if (clickNum == 5) {
            // $('body').addClass('red-body');
            $('body').css('background-color', 'red');
            //  $('body').css('background','red url(\'../images/count.png\') center center fixed no-repeat');
        }
        else if (clickNum == 10) {
            $('body').css('background-color', 'green');
        }
        else if (clickNum == 15) {
            $('body').css('background-color', 'blue');
        }
        else {
            // $('body').removeClass(); //the blank removes all classes from body
            $('body').css('background-color', 'black');
        }



    })




})
