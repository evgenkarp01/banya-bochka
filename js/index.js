import "./import/modules.js";


$( document ).ready(function() {
var men=true;
	var glschet =1;
$("#sandwich").click(function()
	{
		if(men==false)
		{
			$(".sub__menu").slideUp();
			men=!men;
		}
		else
		{
			$(".sub__menu").slideDown();
			men=!men;
		}
	});
		$("#sandwich, .menu_item").click(function() {
		 $("#sandwich").toggleClass("active");
	});
	$(".sub__menu ul li").click(this, function(){

			$(this).find("ul").toggle(500);	
	});

})