function validarn(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function utilidad() {
	// body...
	var valor1= document.formulario4.sueldo.value;
	var valor2 = document.formulario4.anos.value;
	var sueldo=parseFloat(valor1);
	var anos=parseFloat(valor2);

	if (sueldo>10000000000){
		alert("No es posible ganar tanto dinero mensualmente");
	}else if(sueldo<10000000000){
		if(anos<1){
			var utilidades=(sueldo*11)*0.05;
			var sueldofinal=sueldo+utilidades
			document.formulario4.utilidadi.value="$ "+utilidades;
			document.formulario4.totali.value="$ "+sueldofinal;
		}else if(anos>=1 && anos<2){
			var utilidades=(sueldo*12)*0.07;
			var sueldofinal=sueldo+utilidades
			document.formulario4.utilidadi.value="$ "+utilidades;
			document.formulario4.totali.value="$ "+sueldofinal;
		}else if(anos>=2 && anos<5){
			var utilidades=(sueldo*12)*0.1;
			var sueldofinal=sueldo+utilidades
			document.formulario4.utilidadi.value="$ "+utilidades;
			document.formulario4.totali.value="$ "+sueldofinal;
		}else if(anos>=5 && anos<10){
			var utilidades=(sueldo*12)*0.15;
			var sueldofinal=sueldo+utilidades
			document.formulario4.utilidadi.value="$ "+utilidades;
			document.formulario4.totali.value="$ "+sueldofinal;
		}else if(anos>=10 && anos<102){
			var utilidades=(sueldo*12)*0.2;
			var sueldofinal=sueldo+utilidades
			document.formulario4.utilidadi.value="$ "+utilidades;
			document.formulario4.totali.value="$ "+sueldofinal;
		}else if(anos>102){
			alert("No puedes trabajar tanto tiempo");
		}

	}

}