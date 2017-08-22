var current_user = JSON.parse(localStorage.getItem('current_user'));

if (!current_user) {
	current_user=[];
}

$( document ).ready(function() {
	debugger;
    document.getElementById("show_name").text = "Hola " + current_user.name + "!";
});

document.getElementById("search_workshops").addEventListener("click", getWorkShops);

function getWorkShops(){
	var workshops = JSON.parse(localStorage.getItem('workshops'));

	if (!workshops) {
		workshops=[];
	}

	for (var i = 0; i < workshops.length; i++) {
		workshops[i]
	}

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
		html += "<div class=\"card\"><header class=\"w3-container w3-blue\"><h1>";
		html += p.mark + "</h1></header><div class=\"w3-container\"><p>";
		html += "Taller de mécanica en excelentes condiciones para atender cualquier problema que se le presente, " + p.dueno +" es el dueño de "+
		"este fabuloso taller";
		html += "</p></div><footer class=\"w3-container w3-blue\"><h5>Ver</h5></footer>";
		products[i]
	}
}