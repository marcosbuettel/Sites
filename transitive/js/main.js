window.onload = function(){

	/*********************************************
		SCROLL PARA DIRECIONAR PARA O CONTEÚDO
	*********************************************/

	$('.rolartela').click(function(){
	    var el = $(this).attr("href");
	    $('html, body').animate({
	      scrollTop: $(el).offset().top
	    }, 1000);	 
		return false;
	});

}