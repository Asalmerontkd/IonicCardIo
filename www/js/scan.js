function onCardIOComplete(response)  
{
  document.getElementById("tarjeta").value = response["redacted_card_number"];
  document.getElementById("mes").value = response["expiry_month"];
  document.getElementById("anio").value = response["expiry_year"];
  document.getElementById("cvv").value = response["cvv"];
  document.getElementById("brand").innerHTML = response["card_type"];
}

function onCardIOCancel() {
  mensajeToastLong("Scan cancelled.");
}

function escan()
{
  cambiarColorLetra("tarjeta", "black");
  cambiarColorLetra("mes", "black");
  cambiarColorLetra("anio", "black");
  cambiarColorLetra("cvv", "black");
  CardIO.scan({
            "expiry": true,
            "cvv": true,
            "zip": false,
            "suppressManual": false,
            "suppressConfirm": false,
            "hideLogo": true
        },
        onCardIOComplete,
        onCardIOCancel);
}