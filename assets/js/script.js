$(function(){
	$('.navbar__toggle').click(function(){

		$('.sidenav--close').addClass('sidenav--open');

		var sidewidth = $('.sidenav--open').css('width');

		if (sidewidth === '0px') {
			$('.sidenav--open').css('width', '100%');
			$('.navbar__toggle .fa-bars').css('display', 'none');
			$('.navbar__toggle .fa-times').css('display', 'block');
		} else {
			$('.sidenav--open').css('width', '0px');
			$('.navbar__toggle .fa-bars').css('display', 'block');
			$('.navbar__toggle .fa-times').css('display', 'none');
		}
				console.log(sidewidth);

	})
});