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
	var user = document.getElementById("emailname_login").value;
	var pass = document.getElementById("password_login").value;
	debugger;
	var find = true;
	for (var i = 0; i < users.length; i++) {
		var u = users[i];
		if (u.email==user) {
			if (u.password==pass) {
                localStorage.setItem('current_user', JSON.stringify(u));
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
	debugger;
	for (var i = 0; i < entities.length; i++) {
		var e = entities[i];
		if (e.email==user) {
			if (e.password==pass) {
                localStorage.setItem('current_user', JSON.stringify(e));
                window.location= "index.html";
                find = true;
			}
		}
	}
}