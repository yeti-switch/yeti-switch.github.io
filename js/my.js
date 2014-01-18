$(document).ready(function() {
	$('#affix-nav').affix({
	    offset: {
	      top: 111
	    , bottom:  function () {
	    	        return (this.bottom = $('.bs-footer').outerHeight(true) )
	     	      }
	    }
	  })
	// $('#affix-nav ul').affix({
	//   offset: '100px';
	// });

    $('#droop').click(function() {
        $('.drop_menu').slideToggle('fast');
    });
    // $(".features_nav li a").click(function() {
    //         $("html, body").animate({
    //             scrollTop: $($(this).attr("href")).offset().top + "px"
    //         }, {
    //             duration: 500
    //         });
    //     });

    var mail_anchor = $("#mail-anchor");
    if (typeof(mail_anchor[0])!== "undefined"){
	    var m = new Array("team", "yeti-switch.org").join("@");
	    mail_anchor.attr("href", "mail" + "to:" + m);
	    mail_anchor.html(mail_anchor.html().replace('{mail}', m));
	}


});