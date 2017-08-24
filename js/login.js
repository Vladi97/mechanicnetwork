document.getElementById("forget_button").addEventListener("click", forget);
document.getElementById("login_button").addEventListener("click", searchUser);
	
var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users=[];
}

function forget(){
	for (var i = 0; i < users.length; i++) {
		var u = users[i];
		var email=document.getElementById("emailname_login").value;
		if (u.email==email) {
			alert("Hola "+u.name+"!"+"\nSu contraseña es "+ u.password);
		}
	}
}


function searchUser(){
	debugger;
	var user = document.getElementById("emailname_login").value;
	var pass = document.getElementById("password_login").value;
	var find = true;
	for (var i = 0; i < users.length; i++) {
		var u = users[i];
		if (u.email==user) {
			if (u.password==pass) {
				var current_user = {
					"name": u.name,
					"lastname": u.lastname,
					"email": u.email,
					"password": u.password,
					"foto": u.image,
					"type": "user"
				};
                localStorage.setItem('current_user', JSON.stringify(current_user));
                window.location= "index.html";
                find = true;
			}
		}
	}

	if (find) {
		searchEntity(user, pass);
	}
}


var entities = JSON.parse(localStorage.getItem('entities'));

if (!entities) {
	entities=[];
}
function searchEntity(user, pass){
	for (var i = 0; i < entities.length; i++) {
		var e = entities[i];
		if (e.email==user) {
			if (e.password==pass) {
                var enti = {
                	"name": e.name,
                	"password": e.password,
                	"email": e.email,
                	"type": "entity",
                	"tipo": e.tipo,
                	"dueno": e.dueno,
                	"foto": e.foto
                };
                localStorage.setItem('current_user', JSON.stringify(enti));
                window.location= "index.html";
                find = true;
			}
		}
	}
}