/*Change form*/
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

/*Save user*/
document.getElementById("register-user").addEventListener("click", saveUser);
document.getElementById("register-entity").addEventListener("click", saveEntity);

var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
  users=[];
}

function saveUser(){
  debugger;
  var name = document.getElementById("sNameUser").value;
  var lastname = document.getElementById("sLastNameUser").value;
  var email = document.getElementById("sEmailUser").value;
  var password = document.getElementById("sPassUser").value;
  var verPassword = document.getElementById("sPassUserVer").value;
  var permitir = true;
  if (name!="" && lastname!="" && email!="" && password!="" && verpassword!="") {

  for (var i = 0; i < users.length; i++) {
    var u = users[i];
    if (u.email==email) {
      permitir=false;
    }
  }
  if (permitir) {
    var user = {
      "name": name,
      "lastname": lastname,
      "email": email,
      "password": password
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registro exitoso!");
    window.location = "login.html"
  }else{
    alert("Correo en uso!");
  }
  }else{
    alert("Debe llenar todos los campos");
  }
}

var entities = JSON.parse(localStorage.getItem('entities'));

if (!entities) {
  entities = [];
}

function saveEntity(){
  debugger;
  var name = document.getElementById("e_name").value;
  var duenno = document.getElementById("dname").value;
  var email = document.getElementById("e_email").value;
  var password = document.getElementById("e_password").value;
  var verPassword = document.getElementById("e_ver_password").value;


  if (name!="" && duenno!="" && email!="" && password!="" && verPassword!="") {
    var permitir = true;
    for (var i = 0; i < entities.length; i++) {
    var e = entities[i];
    if (e.email==email) {
      permitir=false;
    }
  }
  if (permitir) {
    var tipo = "taller";
    if (document.getElementById('chkAlmacaen').checked) {
      tipo = "almacen";
    }
    var entity = {
      "name": name,
      "dueno": duenno,
      "email": email,
      "password": password,
      "tipo": tipo
    };
    entities.push(entity);
    localStorage.setItem('entities', JSON.stringify(entities));
    alert("Registro exitoso!");
    window.location = "login.html"
  }else{
    alert("Correo en uso!");
  }
  }else{
    alert("Debe llenar todos los campos");
  }
}