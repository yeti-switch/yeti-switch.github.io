$(document).ready(function(){

    $('#droop').click(function(){
        $('.drop_menu').slideToggle('fast');
    });
    $(".features_nav li a").click(function() {
           $("html, body").animate({
               scrollTop: $($(this).attr("href")).offset().top + "px"
           }, {
               duration: 500
           });
           return false;
       });

});