
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



















/**CALCULATOR**/

var allCost = 0;
var shoocheBanNavCost = 0;
var chooseBanAdvanseMaterial = 0;
var chooseBanAdvanseFormaCost = 0;
$("#choose-ban-advanse-forma > ul li:first").addClass("active") ;
$("#choose-ban-advanse-material > ul li:first").addClass("active") ;
$("#choose-ban-advanse-forma > ul:first").show();
$("#choose-ban-advanse-material > ul:first").show();
$(".choose-ban-show > .img:first").show();
$(".choose-ban-show ul > span:first").show();

var aaa = Number($("#shooche-ban-nav li.active").attr("data-shooche-ban-nav"));
var bbb = Number($("#choose-ban-advanse-material li.active").attr("data-choose-ban-advanse-material"));
var ccc = Number($("#choose-ban-advanse-forma li.active").attr("data-choose-ban-advanse-forma"));

console.log(aaa);

console.log(bbb);

console.log(ccc);

function summ(a, b, c){
	return a + b + c;
}

$("#allCost span").text(summ(aaa, bbb, ccc));

function hideAll(){
	$("#shooche-ban-nav li").removeClass("active") ;
	$("#choose-ban-advanse-forma li").removeClass("active") ;
	$("#choose-ban-advanse-material li").removeClass("active") ;
	
}

	$("#shooche-ban-nav li").on("click", function(){
		hideAll();
		console.log("dd");
		var chooseDescription = $(this).attr("data-choose-ban-desc");
		$("#choose-ban-advanse-forma > ul."+chooseDescription+" li:first").addClass("active") ;
		$("#choose-ban-advanse-material > ul."+chooseDescription+" li:first").addClass("active") ;
		shoocheBanNavCost = Number($(this).attr("data-shooche-ban-nav"));
		chooseBanAdvanseMaterial = Number($("#choose-ban-advanse-material li.active").attr("data-choose-ban-advanse-material"));
		chooseBanAdvanseFormaCost = Number($("#choose-ban-advanse-forma li.active").attr("data-choose-ban-advanse-forma"));
		
		$("#choose-ban-advanse-material > ul").hide();
		$("#choose-ban-advanse-material > ul."+chooseDescription).show();
		$("#choose-ban-advanse-forma > ul").hide();
		$("#choose-ban-advanse-forma > ul."+chooseDescription).show();
		$(".choose-ban-show ul > span").hide();
		$(".choose-ban-show > .img").hide();
		$(".choose-ban-show > .img."+chooseDescription).show();
		$(".choose-ban-show ul > span."+chooseDescription).show();

		if($(this).hasClass("active")){
		}else{
			$("#shooche-ban-nav li").removeClass("active");
			$(this).toggleClass("active");
		}
		allCost = summ(shoocheBanNavCost, chooseBanAdvanseMaterial,chooseBanAdvanseFormaCost);
		$("#allCost span").text(allCost);
	});

	$("#choose-ban-advanse-forma li").on("click", function(){
		shoocheBanNavCost = Number($("#shooche-ban-nav li.active").attr("data-shooche-ban-nav"));
		chooseBanAdvanseMaterial = Number($("#choose-ban-advanse-material li.active").attr("data-choose-ban-advanse-material"));
		chooseBanAdvanseFormaCost = Number($(this).attr("data-choose-ban-advanse-forma"))
		var chooseDescriptionForma = $(this).attr("data-choose-ban-advanse-img");
		$(".choose-ban-show > .img").hide();
		$(".choose-ban-show > .img."+chooseDescriptionForma).show();
		console.log("span."+chooseDescriptionForma);
		if($(this).hasClass("active")){
		}else{
			$("#choose-ban-advanse-forma li").removeClass("active");
			$(this).toggleClass("active");
		}
		allCost = summ(shoocheBanNavCost, chooseBanAdvanseMaterial,chooseBanAdvanseFormaCost);
		$("#allCost span").text(allCost);
	});

	$("#choose-ban-advanse-material li").on("click", function(){
		shoocheBanNavCost = Number($("#shooche-ban-nav li.active").attr("data-shooche-ban-nav"));
		chooseBanAdvanseMaterial = Number($(this).attr("data-choose-ban-advanse-material"));
		chooseBanAdvanseFormaCost = Number($("#choose-ban-advanse-forma li.active").attr("data-choose-ban-advanse-forma"))
		
		if($(this).hasClass("active")){
		}else{
			$("#choose-ban-advanse-material li").removeClass("active");
			$(this).toggleClass("active");
		}
		allCost = summ(shoocheBanNavCost, chooseBanAdvanseMaterial,chooseBanAdvanseFormaCost);
		$("#allCost span").text(allCost);
	});














})