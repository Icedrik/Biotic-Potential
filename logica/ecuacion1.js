function captura() {
    let nt = document.getElementById("Nt").value;
    let no = document.getElementById("No").value;
    let time = document.getElementById("t").value;
    let datos;
    let operacion;

    // Se crea un condicional para verificar que hayan ingresado Datos
    if (nt == "") {
        document.getElementById("Nt").focus();
    } else if (no == "") {
        document.getElementById("No").focus();
    } else if (time == "") {
        document.getElementById("t").focus();
    } else {
        // Si se ingresaron los datos se procede a ejecutar la ecuación y mostrata en el HTML
        operacion = (Math.log(nt) - Math.log(no)) / time;
        datos = document.getElementById("resultado");
        datos.innerHTML = `<br> El resultado es ${operacion}`;
    }
}