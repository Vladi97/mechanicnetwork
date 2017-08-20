document.getElementById("forget_button").addEventListener("click", forget);
document.getElementById("login_button").addEventListener("click", go);
	
var users = JSON.parse(localStorage.getItem('users'));

function forget(){
	for (var i = 0; i < users.length; i++) {
		var u = users[i];
		var email=document.getElementById("emailname_login").value;
		if (u.email==email) {
			alert("Hola "+u.name+"!"+"\nSu contraseña es "+ u.password);
		}
	}
}


function go(){
	var user = document.getElementById("emailname_login").value;
	var pass = document.getElementById("password_login").value;
	debugger;
	for (var i = 0; i < users.length; i++) {
		var u = users[i];
		if (u.email==user) {
			if (u.password==pass) {
                localStorage.setItem('current_user', JSON.stringify(u));
                window.location= "index.html";
			}
		}
	}
}