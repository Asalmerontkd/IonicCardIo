function cambiarColorLetra(identificador, colores)
{
	document.getElementById(identificador).style.color = colores;
}

function mensajeToastLong(mensaje)
{
	window.plugins.toast.showLongBottom(mensaje);
}