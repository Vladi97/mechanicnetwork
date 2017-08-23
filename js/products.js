document.getElementById("register-product").addEventListener("click", add);


function add() {
	var current_user = JSON.parse(localStorage.getItem('current_user'));

debugger;
	var name = document.getElementById("pName").value;
	var mark = document.getElementById("pMarca").value;
	var cost = document.getElementById("pCost").value;
	
	

	if (!current_user) {
		alert("Debe iniciar sesión");
	}else{
		if (cost!="" && mark!="" && name!="") {
			var products = JSON.parse(localStorage.getItem('products'));
	
			if (!products) {
				products=[];
			}
			var p = {
		      "name": name,
		      "cost": cost,
		      "mark": mark
		    };
			products.push(p);
		    localStorage.setItem('products', JSON.stringify(products));
		}else{
			alert("Debe ingresar todos los datos");
		}
	}
}