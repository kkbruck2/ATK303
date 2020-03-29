//javascript sketch

/*
 * Fix sidebar at some point and remove
 * fixed position at content bottom
 */
/*
 * Fix sidebar at some point and remove
 * fixed position at content bottom
 */
 $(document).ready(function() {
   $("#mybutton").click(function() {
     $(".peekaboo").fadeToggle();
   });
 });

$(window).scroll(function() {
  var pageHeight = $('.site').innerHeight();
  var headerHeight = $('.site-header').innerHeight();
  var contentHeight = $('.site-content').innerHeight();
  var sidebarHeight = $('.side-navigation').height();
  // var sidebarBottomPos = contentHeight - sidebarHeight;
  var trigger = $(window).scrollTop() - headerHeight;

  if ($(window).scrollTop() >= headerHeight) {
    $('.side-navigation').addClass('fixed');
  } else {
    $('.side-navigation').removeClass('fixed');
  }

});


$(function() {
  $('nav a').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1000);
    event.preventDefault();
  });
});
