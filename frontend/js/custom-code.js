
$(window).load(function() {

  $('body').addClass('is-visible');

  $('.lazy').Lazy({
  scrollDirection: 'vertical',
  effect: "fadeIn",
  effectTime: 500,
  threshold: 100,
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
  });

  $('.play').yu2fvl();

	$('.header__mobile, .mobile__menu_close').click(function() {
		$(this).toggleClass('is-open');
		$('.mobile__menu').toggleClass('is-open');
	});

	$('.template__home_carousel').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		responsive: [
		 {
			 breakpoint: 500,
			 settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1,
				 infinite: true,
				 dots: true
			 }
		 }]
	});

})
