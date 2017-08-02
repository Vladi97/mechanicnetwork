//registro
$(function() {
    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
});

//Log In
$(function() {
    $('#login-link').click(function(e) {
      debugger;
      var email = document.getElementById("lg_username").value;
      var prd = document.getElementById("lg_password").value;
      if (email=="admin") {
        if (prd=="admin") {
            window.location = "/mechanicnetwork/account/profile.html";
        }
      }
    e.preventDefault();
  });
});

//profile

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

  /*file manager*/

  'use strict';

;( function( $, window, document, undefined )
{
  $( '.inputfile' ).each( function()
  {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });
  });
})( jQuery, window, document );