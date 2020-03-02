function validarn(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[-\0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function nummayor() {
	// body...
	var valor1= document.formulario2.numero1.value;
	var valor2 = document.formulario2.numero2.value;
	var valor3= document.formulario2.numero3.value;
	var numero1=parseFloat(valor1);
	var numero2=parseFloat(valor2);
	var numero3=parseFloat(valor3);

	if (numero1>numero2 && numero1>numero3) {
		document.formulario2.mayor.value=numero1;
	}
	if (numero2>numero1 && numero2>numero3) {
		document.formulario2.mayor.value=numero2;
	}
	if (numero3>numero1 && numero3>numero2) {
		document.formulario2.mayor.value=numero3;
	}
	if (numero3===numero1 && numero3===numero2) {
		alert("Todos los numeros son iguales")
		document.formulario2.mayor.value=numero3;
	}

	if (numero1===numero2 || numero1===numero3) {
		alert("Hay numeros iguales")
		document.formulario2.mayor.value=numero1;
	}else if (numero2===numero1 || numero2===numero3) {
		alert("Hay numeros iguales")
		document.formulario2.mayor.value=numero2;
	}else if (numero3===numero1 || numero3===numero2) {
		alert("Hay numeros iguales")
		document.formulario2.mayor.value=numero3;
	}
}