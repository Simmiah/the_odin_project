$(document).ready(function(){
	for (y=1; y <= 16; y++) {
		if (y != 16) {
			$('#container').append('<div class="square right"></div>');			
		} else {
			$('#container').append('<div class="square right"></div>');
		}
		//for (x=1; x<=16; x++) {
		//	$('#container').append('<div class="square"></div>');
		//}
	}

	//$('#container').append('<div class="square"></div>');
});