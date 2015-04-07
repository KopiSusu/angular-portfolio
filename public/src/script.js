$(document).ready(function() {

  $(window).scroll(function() {
    s = $(window).scrollTop();

    if (s > 702 && s < 1300 ) {
      $('.switch a').css('position', 'fixed').css('right', '13px').css('opacity', 1);
      $('.landing .side-bar .side p ').css('opacity', '0');
    } else if (s > 1300) {
      $('.switch a').css('opacity', 0);
    } else {
      $('.switch a').css('position', 'relative').css('right', '0px').css('opacity', 0);
      $('.landing .side-bar .side p ').css('opacity', '1');
    };
  });

  // $('.landing .side-bar .side p ').mouseenter( function() {
  //   $(this).css('opacity', '1');
  // });

});