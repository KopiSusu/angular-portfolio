$(document).ready(function() {

  $(window).scroll(function() {
    s = $(window).scrollTop();

    if (s > 702) {
      $('.switch a').css('position', 'fixed').css('right', '13px');
    } else  {
      $('.switch a').css('position', 'relative').css('right', '0px');
    }
  });

});