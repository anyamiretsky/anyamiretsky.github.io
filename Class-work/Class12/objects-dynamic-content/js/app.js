$('document').ready(function(){

  console.log(pageLoadData);
  // Set the body's background color to equal the pageLoadData object's backgroundColor property
  $('body').css('background-color',pageLoadData.backgroundColor);
  // In .elem-1 set the background image, and the content inside .elem-1__title and .elem-1_date
  $('.elem-1').css('background-image', pageLoadData.elem1.backgroundImg);
  $('.elem-1__title').html(pageLoadData.elem1.title);
  $('.elem-1__date').html(pageLoadData.elem1.date);
  // In .elem-2 set the background image, and the content inside .elem-2__title and .elem-2_date
  $('.elem-2').css('background-image', pageLoadData.elem2.backgroundImg);
  $('.elem-2__title').html(pageLoadData.elem2.title);
  $('.elem-2__date').html(pageLoadData.elem2.date);
  // In .elem-3 set the background image, and the content inside .elem-3__title and .elem-3_date
  $('.elem-3').css('background-image', pageLoadData.elem3.backgroundImg);
  $('.elem-3__title').html(pageLoadData.elem3.title);
  $('.elem-3__date').html(pageLoadData.elem3.date);
  // In .elem-4 set the background image, and the content inside .elem-4__title and .elem-4_date
  $('.elem-4').css('background-image', pageLoadData.elem4.backgroundImg);
  $('.elem-4__title').html(pageLoadData.elem4.title);
  $('.elem-4__date').html(pageLoadData.elem4.date);
  // Put the cteated at date from our data object into the footer's h1
  $('.footer__h1').html(pageLoadData.createdAt)
})

