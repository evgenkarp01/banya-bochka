
$( document ).ready(function() {
    $("#btn-no-menu, #mmenu, .mmenu li a").on('click', function () {
        $("#menuha").toggleClass("menuha-left");
        $(".over").toggleClass("zet");
        console.log("d");
      });

     $(function(){
         $('[name="phone"]').mask("+7(999) 999-99-99");
         $('[name="phone-static-form"]').mask("+7(999) 999-99-99");
         $('[name="phone-static-form-2"]').mask("+7(999) 999-99-99");
    });

    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
        
    $("#modal-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
            call(this);
         }else{
         	$('[name="phone"]').addClass('error');
         }
    });

    $('.masonry-gallery, .magnifuc-sert').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    
     $('.slidos').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
      });
        
    $('.slick-catalog').slick({
        dots: false,
        arrows: false,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
      });
    $('.slider-reviewsha').slick({
        dots: true,
        arrows: true,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 350,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
      });
    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
    $(".popup-with-form").on("click", function(){
        console.log("dd");
    });
    $('.masonry-gallery').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 286,
        gutter: 15,
        fitWidth: true
    });
})