const goldenRatio = 0.618;

let windowWidth = $(document).width();
let windowHeight = $(document).height();

$('.hero').height(windowWidth * goldenRatio);
let heroHeight = $('.hero').height();

$(window).on('resize', function() {
	windowWidth = $(document).width();
	let newHeight = windowWidth * goldenRatio
	if (!(newHeight >= windowHeight)) {
		$('.hero').height(windowWidth * goldenRatio);
	} else {
		$('.hero').height(windowHeight);
	}

	let heroHeight = $('.hero').height();
});

$('.hero').height(windowWidth * goldenRatio);
