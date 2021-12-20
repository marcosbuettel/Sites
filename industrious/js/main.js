window.onload = function(){
	$( ".banner h1" ).animate({
	    opacity: 1,
	    top: "+=50",
	  }, 1500, function() {
	});

	$( ".banner p" ).animate({
	    opacity: 1,
	    top: "-=70",
	  }, 1500, function() {
	});
}