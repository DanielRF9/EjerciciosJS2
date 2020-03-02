function validarn(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function interes() {
	// body...
	var valor= document.formulario3.horassem.value;
	var horassem = parseInt(valor);
	
	if(horassem>105){
		alert("No es posible trabajar tanto, descansa");
	}
	if (horassem<=105){
		var horasextra=horassem-40;

		if (horasextra<0) {
			alert("No trabajas horas extra");
			var sueldototal1=horassem*250;
			document.formulario3.sueldoi.value="Tu sueldo semanal es de: $"+sueldototal1 + " pesos";
		}else if(horasextra>0 && horasextra<=8){
			alert("Trabajas "+ horasextra + " horas extra a la semana");
			var sueldoprimero=horasextra*500;
			var sueldototal2=(40*250)+sueldoprimero;
			document.formulario3.sueldoi.value="Tu sueldo semanal es de: $"+sueldototal2 + " pesos";
		}else if(horasextra>8){
			alert("Trabajas "+ horasextra + " horas extra a la semana");
			var horastriples=horasextra-8;
			var sueldoprimero1=4000;
			var sueldosegundo=10000;
			var sueldotercero=horastriples*750;
			var sueldototal3=sueldoprimero1+sueldosegundo+sueldotercero;
			document.formulario3.sueldoi.value="Tu sueldo semanal es de: $"+sueldototal3 + " pesos";
		}
		
	} 
}