

function VTchecked(salario){
	if(document.getElementById('VT_sim').checked){
		return salario = salario*0.94
	}else{
		return salario = salario
	}
}

function calcular(){
	var salario = parseFloat(document.getElementById('salario').value)
	var resultado

	if(isNaN(salario)){
		alert("digite um numero valido")
	}

	if (salario<=1320){
		resultado = salario*0.925
        resultado = IRRF(resultado)
		resultado = VTchecked(resultado)
		document.getElementById('result').innerHTML = "Valor: $" + resultado.toFixed(2)
	}

	else if(salario>1320 && salario<= 2571.29){
		resultado = salario*0.91
        resultado = IRRF(resultado)
		resultado = VTchecked(resultado)
		document.getElementById('result').innerHTML = "Valor: $" + resultado.toFixed(2)
	}

	else if(salario>2571.29 && salario<= 3856.94){
		resultado = salario*0.88
        resultado = IRRF(resultado)
		resultado = VTchecked(resultado)
		document.getElementById('result').innerHTML = "Valor: $" + resultado.toFixed(2)
	}
}

function IRRF(valor){

    if(valor<=2112){
        return valor
    }
    else if(valor>2112 && valor<=2826.65){
        return valor = valor*0.925
    }
    else if(valor>2826.65 && valor<=3751.05){
        return valor = valor*0.85
    }
    else if(valor>3751.05 && 4664.68){
        return valor = valor*0.775
    }
    else{
        return valor= valor*0.725
    }
}