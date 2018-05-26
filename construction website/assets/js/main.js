/*jslint esnext: true*/
/*jslint jquery: true*/
(function () {
  'use strict';



  /*////////////scroll/////////////*/
  $('.nav-link.nav-links,#back-to-top').on('click', function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 2000);
  });



}());
