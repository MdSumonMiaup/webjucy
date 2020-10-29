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



$(document).ready(function() {
			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                adaptiveHeight:true,
                currentPagerPosition: 'middle',
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
		});