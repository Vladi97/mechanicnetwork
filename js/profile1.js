
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
	debugger;
	var current_user = JSON.parse(localStorage.getItem('current_user'));
	var entities = JSON.parse(localStorage.getItem('entities'));
	var users = JSON.parse(localStorage.getItem('users'));
	var email = document.getElementById("email").innerHTML;
	var name = document.getElementById("name").innerHTML;
	var newUsers = [];
	if (current_user.type =="user") {
		var lastname = document.getElementById("lastname").innerHTML;
		for (var i = 0; i < users.length; i++) {
			var u = users[i];
			if (u.email==email) {
				var updateUser = {
					"name": name,
					"lastname": lastname,
					"password": u.password,
					"foto": u.foto,
					"email": email
				}
				newUsers.push(updateUser);
				localStorage.setItem('current_user', JSON.stringify(updateUser));
			}else{
				newUsers.push(u);
			}
		}
		localStorage.setItem('users', JSON.stringify(newUsers));
	}else{
		var dueno = document.getElementById("dueno").innerHTML;
		var newEntities = [];
		for (var i = 0; i < entities.length; i++) {
			var e = entities[i];
			if (e.email==email) {
				var updateEntity = {
					"name": name,
					"dueno": dueno,
					"password": e.password,
					"foto": e.foto,
					"email": email,
					"type": e.tipo
				}

				var currentU = {
					"name": name,
					"dueno": dueno,
					"password": e.password,
					"foto": e.foto,
					"email": email,
					"tipo": e.tipo,
					"type": "user"
				}
				newEntities.push(updateEntity);
				localStorage.setItem('current_user', JSON.stringify(currentU));
			}else{
				newEntities.push(e);
			}
		}
		localStorage.setItem('entities', JSON.stringify(newEntities));
	}
}