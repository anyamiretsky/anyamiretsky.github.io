$('#submit').click(function(){
    let a = $('#a').val();
    let b = $('#b').val();
    console.log('a='+a);
    console.log('b='+b);

    //a>b
    if (a>b){
        $('#comparison').html('>');
    }
    //a=b
    else if (a==b){
        $('#comparison').html('=');
    }
    //a < b
    else if (a<b){
        $('#comparison').html('<');
    }
    else{}

})