var piso_seleccionado= 18;
var piso_actual = 1;
var direccion =  prompt ("subes o bajas");
const primer_piso= 2;
const ultimo_piso= 20;

var piso_seleccionado = prompt ("ingrese el piso");
if (direccion == "subes");
for(piso_actual; piso_actual <= ultimo_piso;  piso_actual++){
	console.log("estas en el piso " + piso_actual);
	if (piso_actual==piso_seleccionado){
		alert("llegaste");
	}
}

