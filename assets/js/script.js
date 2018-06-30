// Date topbar
	$(window).on('load', function(){
		var d = new Date();
		d = d.toDateString();

		var h = new Date().getHours();
		var m = new Date().getMinutes();
		var s = new Date().getSeconds();
		console.log(h, m, s);
		$('#date').text(' ' + d);
	});
	// /Date topbar

$(function(){

	// Toggleable Navbar
	$('.navbar__toggle').click(function(){

		$('.sidenav--close').addClass('sidenav--open');


		var sidewidth = $('.sidenav--open').css('width');


		if (sidewidth === '0px') {
			$('.navbar__toggle .fa-bars').animate({
				opacity: 0
			},100);
			$('.sidenav--open').css('width', '100%');
			$('.navbar__toggle .fa-bars').css('display', 'none');
			$('.navbar__toggle .fa-times').css('display', 'block');
			$('.navbar__toggle .fa-times, .sidenav__items').animate({
				opacity: .8
			},100);
		} else {
			$('.navbar__toggle .fa-times').animate({
				opacity: 0
			},100);
			$('.sidenav__items').css('opacity', '0');
			$('.sidenav--open').css('width', '0px');
			$('.navbar__toggle .fa-times').css('display', 'none');
			$('.navbar__toggle .fa-bars').css('display', 'block');
			$('.navbar__toggle .fa-bars').animate({
				opacity: .8
			},100);
		}

	})
	// /Toggleable Navbar

});