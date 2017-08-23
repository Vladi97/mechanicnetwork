
//profile

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

$( document ).ready(function() {
	load;
	document.getElementById("show_name").text = "Hola " + current_user.name + "!";

});

function load(){
	var current_user = JSON.parse(localStorage.getItem('current_user'));

	if (!current_user) {
		current_user=[];
	}

	var html="2;"
	if (current_user[1] == "lastname") {
		html += "<label>Nombre: <span contenteditable=\"true\">"+current_user.name+"</span></label>"+
		"<br><label>Apellido: <span contenteditable=\"true\">"+ current_user.lastname+"</span></label><br><label>Correo: <span"+
		"contenteditable=\"true\">"+current_user.email+"</span></label>";
	}else{
		html += "<label>Nombre: <span contenteditable=\"true\">"+current_user.name+"</span></label>"+
		"<br><label>Dueño: <span contenteditable=\"true\">"+ current_user.dueno+"</span></label><br><label>Correo: <span"+
		"contenteditable=\"true\">"+current_user.email+"</span></label>";
	}
	document.getElementById("join").inerHTML = html;
}