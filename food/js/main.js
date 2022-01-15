var verificaPosicaoSobre = 0;
var verificaPosicaoPratosMenu = 0;
var verificaPosicaoDepoimentos = 0;

window.onload = function(){
	$('.depoimentos-wrapper').slick({
		centerMode:false,
		slidesToShow:1,
		arrows:false,
		dots:true,		
		autoplay: true,
		infinite: true,
	});

	$('.menu-mobile').click(function(){
		$('.mobile').slideToggle();
		$('.mobile').css('display', 'flex');
	});

	/******************************************************
					ROLAR ATÉ A DIV
	******************************************************/

	$('.rolar-info-services').click(function(){
	    var el = $(this).attr("href");
	    $('html, body').animate({
	      scrollTop: $(el).offset().top
	    }, 1000);	 
		return false;
	});

	$('.rolar-sobre').click(function(){
	    var el = $(this).attr("href");
	    $('html, body').animate({
	      scrollTop: $(el).offset().top
	    }, 1000);	 
		return false;
	});

	$('.rolar-contato').click(function(){
	    var el = $(this).attr("href");
	    $('html, body').animate({
	      scrollTop: $(el).offset().top
	    }, 1000);	 
		return false;
	});
	
	

	/******************************************************
					ANIMAÇÕES .animate
	******************************************************/
	
	$( ".info-header h1" ).animate({
	    opacity: 1,
	    top: "-=100px",
	  }, 1000, function() {
	});

	$( ".info-header p" ).animate({
	    opacity: 1,
	    top: "-=100px",
	  }, 1500, function() {
	});


	$('#sobre').waypoint(function () {
	    if (verificaPosicaoSobre == 0){
	        $( ".sobre" ).animate({
				opacity: 1,
				top: "-=150px",
			}, 1300, function() {
			});

			verificaPosicaoSobre = 1;
		}
    }, {
        offset: '90%'
    });

    $('#pratos-menu').waypoint(function () {
	    if (verificaPosicaoPratosMenu == 0){
	        $( ".pratos-menu" ).animate({
				opacity: 1,
				top: "-=150px",
			}, 1300, function() {
			});

			verificaPosicaoPratosMenu = 1;
		}
    }, {
        offset: '90%'
    });

    $('.depoimentos').waypoint(function () {
	    if (verificaPosicaoDepoimentos == 0){
	        $( ".depoimentos" ).animate({
				opacity: 1,
				top: "-=150px",
			}, 1300, function() {
			});

			verificaPosicaoDepoimentos = 1;
		}
    }, {
        offset: '90%'
    });

	
}