var grid = 4;

$(document).ready(function(){
	for (x=0; x<grid; x++) {
		for (y=0; y<=grid; y++) {
            if (y != grid) {
                $('#container').append('<div class="square right"></div>');			
            } else {
                $('#container').append('<div class="clear"></div>');
            }
        }
	}
	$('.square').hover(function(){
		$(this).addClass('black');
	});
});