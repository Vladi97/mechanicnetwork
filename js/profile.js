
//profile

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $('[data-toggle="popover"]').popover()
});

$( document ).ready(function() {
	debugger;
	load();
});

function load(){
	debugger;
	var current_user = JSON.parse(localStorage.getItem('current_user'));

	if (!current_user) {
		current_user=[];
	}

	var html=""
	if (current_user.type == "user") {
		html += "<label>Nombre: <span id=\"name\" style=\"color: #000;\" contenteditable=\"true\">"+current_user.name+"</span></label>"+
		"<br><label>Apellido: <span id=\"lastname\" style=\"color: #000;\" contenteditable=\"true\">"+ current_user.lastname+"</span></label><br><label>Correo: <span"+
		" id=\"email\" style=\"color: #000;\" contenteditable=\"true\">"+current_user.email+"</span></label>";
	}else{
		html += "<label>Nombre: <span id=\"name\" style=\"color: #000;\" contenteditable=\"true\">"+current_user.name+"</span></label>"+
		"<br><label>Dueño: <span id=\"dueno\" style=\"color: #000;\" contenteditable=\"true\">"+ current_user.dueno+"</span></label><br><label>Correo: <span"+
		" id=\"email\" style=\"color: #000;\" contenteditable=\"true\">"+current_user.email+"</span></label>";
	}
	document.getElementById("show_name").text = current_user.name + current_user.lastname;
	document.getElementById("join").innerHTML = html;
}

document.getElementById("save").addEventListener("click", updateData);

function updateData(){
	var current_type = JSON.parse(localStorage.getItem('current_type'));
	var entities = JSON.parse(localStorage.getItem('entities'));
	var users = JSON.parse(localStorage.getItem('users'));
	var email = document.getElementById("email").value;
	var name = document.getElementById("lastname").value;
	var newUsers = [];
	if (current_type =="user") {
		var lastname = document.getElementById("save")
		for (var i = 0; i < users.length; i++) {
			var u = users[i];
			if (u.email==email) {
				var updateUser = {
					"name"
				}
			}else{
				newUsers.push(u);
			}
		}
	}else{
		var dueno = document.getElementById("dueno").value;
	}
}