//javascript sketch

/*
* Fix sidebar at some point and remove
* fixed position at content bottom
*/
/*
* Fix sidebar at some point and remove
* fixed position at content bottom
*/
$(window).scroll(function () {
	var headerHeight = $('.site-header').innerHeight();
	var contentHeight = $('.site-main').innerHeight();
	var sidebarHeight = $('.side-navigation').height();
  var sidebarBottomPos = contentHeight - sidebarHeight;
  var trigger = $(window).scrollTop() - headerHeight;

      	if ($(window).scrollTop() >= headerHeight) {
          	$('.side-navigation').addClass('fixed');
      	} else {
          	$('.side-navigation').removeClass('fixed');
      	}

      	if (trigger >= sidebarBottomPos) {
          	$('.side-navigation').addClass('bottom');
      	} else {
          	$('.side-navigation').removeClass('bottom');
      	}
});

/*
* Fix sidebar at some point and remove
* fixed position at content bottom
*/
