$(document).ready(function() {
	$('#affix-nav').affix({
	    offset: {
	      bottom:  function () {
	    	        return (this.bottom = $('.bs-footer').outerHeight(true) )
	     	      }
	    }
	  })
    $('#droop').click(function() {
        $('.drop_menu').slideToggle('fast');
    });
   
    var mail_anchor = $("#mail-anchor");
    if (typeof(mail_anchor[0])!== "undefined"){
	    var m = new Array("team", "yeti-switch.org").join("@");
	    mail_anchor.attr("href", "mail" + "to:" + m);
	    mail_anchor.html(mail_anchor.html().replace('{mail}', m));
	}


});