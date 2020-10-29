$(document).ready(function () {


});

// jQuery 
      $("#phone").intlTelInput({
        allowDropdown: true,
      });


//** scroll background color start **//
$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$('.fixed-nav').addClass('black');
	}
	
	else {
		$('.fixed-nav').removeClass('black');
	}
})
//** scroll background color end **//


$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});


AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});



// Scroll to top //

var btn = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});

