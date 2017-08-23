var current_user = JSON.parse(localStorage.getItem('current_user'));
var current_result = [];

if (!current_user) {
	current_user=[];
}

$( document ).ready(function() {
	getWorkShops;
    document.getElementById("show_name").text = "Hola " + current_user.name + "!";
});

document.getElementById("search_workshops").addEventListener("click", getWorkShops);

function getWorkShops(){
	var workshops = JSON.parse(localStorage.getItem('entities'));
	debugger;

	if (!workshops) {
		workshops=[];
	}

	var html = "";
	for (var i = 0; i < workshops.length; i++) {
		var w = workshops[i];
		if (w.tipo=="taller") {
			html += "<div class=\"card\"><header class=\"w3-container w3-blue\" style=\"display: inline-block;\"><h1>";
			html += w.name + "</h1></header><div class=\"w3-container\"><p>";
			html += "Taller de mécanica en excelentes condiciones para atender cualquier problema que se le presente, " + w.dueno +" es el dueño de "+
			"este fabuloso taller";
			html += "</p></div><footer class=\"w3-container w3-blue\"><h5>Ver</h5></footer></div>";
		}
	}
	document.getElementById("contenedor").innerHTML = html;
	current_result = "workshops";
}

document.getElementById("search_products").addEventListener("click", getProducts);

function getProducts(){
	var products = JSON.parse(localStorage.getItem('products'));

	if (!products) {
		products=[];
	}

	var html = "";
	for (var i = 0; i < products.length; i++) {
		var p = products[i];
		html += "<div class=\"card\"><header class=\"w3-container w3-blue\" style=\"display: inline-block;\"><h1>";
		html += p.name + "</h1></header><div class=\"w3-container\"><p>";
		html += "Marca: " + p.mark + "<br>" + "Vendedor: " +p.dueno + "<br>" + "Precio: " + p.cost;
		html += "</p></div><footer class=\"w3-container w3-blue\"><h5>Ver</h5></footer></div>";
	}
	document.getElementById("contenedor").innerHTML = html;
	current_result = "products";
}

document.getElementById("search_button").addEventListener("click", searchByName);

function searchByName(){
	var name = document.getElementById("search").value;
	var html = "";
	if (current_result!="workshops") {
		var products = JSON.parse(localStorage.getItem('products'));
		for (var i = 0; i < products.length; i++) {
			p = products[i];

			if (!products) {
				products=[];
			}

			if (p.name == name) {
				html += "<div class=\"card\"><header class=\"w3-container w3-blue\" style=\"display: block;\"><h1>";
				html += p.name + "</h1></header><div class=\"w3-container\"><p>";
				html += "Marca: " + p.mark + "<br>" + "Vendedor: " +p.dueno + "<br>" + "<br>Precio: " + p.precio;
				html += "</p></div><footer class=\"w3-container w3-blue\"><h5>Ver</h5></footer></div>";
			}
		}
	}else{
		var workshops = JSON.parse(localStorage.getItem('entities'));

		if (!workshops) {
			workshops=[];
		}


		for (var i = 0; i < workshops.length; i++) {
			var w = workshops[i];

			if (name==w.name) {
				html += "<div class=\"card\"><header class=\"w3-container w3-blue\" style=\"display: block;\"><h1>";
				html += w.name + "</h1></header><div class=\"w3-container\"><p>";
				html += "Taller de mécanica en excelentes condiciones para atender cualquier problema que se le presente, " + w.dueno +" es el dueño de "+
				"este fabuloso taller";
				html += "</p></div><footer class=\"w3-container w3-blue\"><h5>Ver</h5></footer></div>";
			}
		}
	}
	document.getElementById("contenedor").innerHTML = html;
}

document.getElementById("new_product").addEventListener("click", newProduct);

function newProduct(){
	window.open("/mechanicnetwork/products/index.html");
}