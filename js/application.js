//profile

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

/*Save user*/

function saveUser(){

}

$(function() {
    $('#register-user').click(function(e) {
      var users = JSON.parse(localStorage.getItem('users'));

      if (!users) {
        users = [];
      }
      var pass = document.getElementById("sPassUser").value;
      var passVer = document.getElementById("sPassUserVer").value;
      if (pass==passVer) {
        var user = {
          "name": document.getElementById("sNameUser").value,
          "lastname": document.getElementById("sLastNameUser").value,
          "email": document.getElementById("sEmailUser").value,
          "password": pass
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }else{
        document.getElementById("messageUser").value = "Contraseñas incorrectas!";
        document.getElementById("messageUser").style.display = "block";
      }
    e.preventDefault();
    });
});

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