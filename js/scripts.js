/* Scripts pour la gestion du menu de navigation en version responsive */

/* On ouvre le menu au click sur le bouton */
function openNav() {
    document.getElementById("navigation").style.width = "100%";
}
  
/* On ferme quand on click sur l'icône de fermeture */
function closeNav() {
    document.getElementById("navigation").style.width = "0%";
}

/* Scrollbar personnalisée */


document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	OverlayScrollbars(document.querySelectorAll("body"), {
    
   });
});


(function($){
    var card = $(".card");
    card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
         
        var rY = map(x, 0, $(this).width(), -17, 17);
        var rX = map(y, 0, $(this).height(), -17, 17);
     
        $(this).children(".image").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
    });
     
    card.on('mouseenter', function () {
        $(this).children(".image").css({
            transition: "all " + 0.05 + "s" + " linear",
        });
    });
 
    card.on('mouseleave', function () {
        $(this).children(".image").css({
            transition: "all " + 0.2 + "s" + " linear",
        });
 
        $(this).children(".image").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
    });
         
    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
})(jQuery);




























