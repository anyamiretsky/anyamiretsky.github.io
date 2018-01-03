// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
// $('#first').click(function(){
//     $('#bigimage').attr('src',$('#first').attr('src'));
// })
// $('#second').click(function(){
//     $('#bigimage').attr('src',$('#second').attr('src'));
// })
// $('#third').click(function(){
//     $('#bigimage').attr('src',$('#third').attr('src'));
// })
// $('#fourth').click(function(){
//     $('#bigimage').attr('src',$('#fourth').attr('src'));
// })

$('.thumb').click(function (){
    let thumbSrc = $(this).attr('src');
    $('#bigimage').attr('src',thumbSrc )

    console.log($('#thumbnails').children());
})