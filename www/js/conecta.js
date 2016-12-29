Conekta.setPublishableKey("key");
var nombre, direccion, ciudad, cp, tarjeta, mes, anio, cvv;

function validarCampos()
{
	nombre = document.getElementById("nombre").value;
	direccion = document.getElementById("direccion").value;
	ciudad = document.getElementById("ciudad").value;
	cp = document.getElementById("cp").value;
	tarjeta = document.getElementById("tarjeta").value;
	mes = document.getElementById("mes").value;
	anio = document.getElementById("anio").value;
	cvv = document.getElementById("cvv").value;

	if (nombre.length>0 && direccion.length>0 && ciudad.length>0 && cp.length>0 ) 
	{
		if (tarjeta.length>0 && mes.length>0 && anio.length>0 && cvv.length>0) 
		{
			validarTarjeta();
		}
		else
		{
			window.plugins.toast.showLongBottom("Los datos bancarios no pueden estar vacios.");
		}
	}
	else
	{
		window.plugins.toast.showLongBottom("Los campos de la información personal no pueden estar vacios.");
	}

	
}

function validarTarjeta()
{
	var flag = true;
	if (!Conekta.card.validateNumber(tarjeta)) 
	{
		flag = false;
		cambiarColorLetra("tarjeta", "red");
	}

	if (!Conekta.card.validateExpirationDate(mes, anio)) 
	{
		flag = false;
		cambiarColorLetra("mes", "red");
		cambiarColorLetra("anio", "red");
	}

	if (!Conekta.card.validateCVC(cvv)) 
	{
		flag = false;
		cambiarColorLetra("cvv", "red");
	}

	if (flag) 
	{
		cambiarColorLetra("tarjeta", "green");
		cambiarColorLetra("mes", "green");
		cambiarColorLetra("anio", "green");
		cambiarColorLetra("cvv", "green");
		tokenizarTarjeta();
	}
}

function tokenizarTarjeta()
{
	window.plugins.toast.showLongBottom("Correcto!!!");
}