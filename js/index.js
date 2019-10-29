
$( document ).ready(function() {
    $("#btn-no-menu, #mmenu, .mmenu li a").on('click', function () {
        $("#menuha").toggleClass("menuha-left");
        $(".over").toggleClass("zet");
        console.log("d");
      });

})