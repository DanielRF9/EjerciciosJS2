function filterFloat(evt,input){
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode;    
    var chark = String.fromCharCode(key);
    var tempValue = input.value+chark;
    if(key >= 48 && key <= 57){
        if(filter(tempValue)=== false){
            return false;
        }else{       
            return true;
        }
    }else{
          if(key == 8 || key == 13 || key == 0) {     
              return true;              
          }else if(key == 46){
                if(filter(tempValue)=== false){
                    return false;
                }else{       
                    return true;
                }
          }else{
              return false;
          }
    }
}
function filter(__val__){
    var preg = /^(\-?[0-9]+\.?[0-9]{0,4})$/; 
    if(preg.test(__val__) === true){
        return true;
    }else{
       return false;
    }
    
}

function operaciones() {
	// body...
	var valor1= document.formulario.numero1.value;
	var valor2 = document.formulario.numero2.value;
	var numero1=parseFloat(valor1);
	var numero2=parseFloat(valor2);

	if (numero1===numero2) {
		var total=numero1*numero2;
		document.formulario.resultadoi.value=total;
	}

	if(numero1>numero2){
		var total2=numero1-numero2;
		document.formulario.resultadoi.value=total2
	}

	if (numero1<numero2) {
		var total3=numero1+numero2;
		document.formulario.resultadoi.value=total3
	}

}