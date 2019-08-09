(function($) {
	$(document).ready(function() {
		$('#slider').slick({
			dots: false,
			autoplay: true,
			infinite: true,
			fade:true,
			speed: 2500,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			prevArrow: '<div class="nav-arrow arrow-prev">',
			nextArrow: '<div class="nav-arrow arrow-next">'
		});

		/!*---scroll-----------*!/
		$(".menu-item a").click(function (e) {
			let targetBl = $($(this).attr("href"));
			$('.menu').css('display', 'none');
			$('.menu-btn').removeClass('menu-btn_active');

			let targetPos = targetBl.offset().top - 90;
			$('html, body').animate({scrollTop: targetPos}, 500);
		})

		$('.menuBurger').on('click', function () {
			$('.menu').slideToggle(200, function () {
				if ($(this).css('display') == 'none') {
					$(this).removeAttr('style');
				}
			});
		});
		$('.menu li a').on('click', function (e) {
			e.preventDefault();
		});
		$('.menu-btn').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('menu-btn_active');
		});

		$('.menu-item a').click(function () {
			$('.menu-item a.active').removeClass('active');
			$(this).addClass('active');

		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('.head').addClass('header_fixed');
			}
			else {
				$('.head').removeClass('header_fixed');
			}
		});

	});



}) (jQuery);
