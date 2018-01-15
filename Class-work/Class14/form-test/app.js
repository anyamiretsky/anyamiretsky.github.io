$(document).ready(function () {
    $('#myForm').submit(function(event){
        event.preventDefault();
        console.log('we sumbitted', $('#name-input').val());
    })
})
