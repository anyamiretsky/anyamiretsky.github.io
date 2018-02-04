
$('.meme-form').submit(function(event){
    console.log('submitting');
    //prevent from page referesh after submit
    $('.video-wrapper').empty();

    event.preventDefault();
    var userInput=$('.meme-input').val();
    console.log(userInput);
    //ajax request via $.get
    var xhr = $.get(
        // "http://api.giphy.com/v1/gifs/search?q=shiba+inu&api_key=N5j9Y8v0icInuaqtKqR1cUgTZgvnszRH&limit=5"
        "http://api.giphy.com/v1/gifs/search?q=" + userInput+ "&api_key=N5j9Y8v0icInuaqtKqR1cUgTZgvnszRH&limit=5"

    );
    xhr.done(function(data) { 
        //console.log("success got data", data.data);
        var memes=data.data;
        memes.forEach(function(meme){
            var memeUrl=meme.images.looping.mp4;
            $('.video-wrapper').append("<video src='" + memeUrl + "' autoplay></video>");

        })
      
    });
    
})


