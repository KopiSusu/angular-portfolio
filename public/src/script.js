

$(document).ready(function() {

  $(window).scroll(function() {
    s = $(window).scrollTop();

    if (s > 700 && s < 1300 ) {
      $('.switch a').css('position', 'fixed').css('right', '13px').css('opacity', 1);
      $('.landing .side-bar .side p ').css('opacity', '0');
    } else if (s > 1300) {
      $('.switch a').css('opacity', 0).css('position', 'fixed').css('right', '13px').css('right', '13px');
      $('.landing .side-bar .side p ').css('opacity', '1').css('color', '#E7E9EC');
    } else {
      $('.switch a').css('position', 'relative').css('right', '0px').css('opacity', 1);
      $('.landing .side-bar .side p ').css('opacity', '1').css('color', '#42494E');
    };

  });

});