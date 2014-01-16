$(document).ready(function() {

    $('#droop').click(function() {
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

    var mail_anchor = $("#mail-anchor");
    var m = new Array("team", "yeti-switch.org").join("@");

    mail_anchor.attr("href", "mail" + "to:" + m);
    mail_anchor.html(mail_anchor.html().replace('{mail}', m));

});