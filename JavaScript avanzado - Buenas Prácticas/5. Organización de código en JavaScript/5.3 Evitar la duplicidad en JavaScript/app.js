var cuenta = 2 + 3;
var cuentaNueva = 20 + 45;
var totalFinal = cuenta + cuentaNueva;
console.log(totalFinal);

function suma(datoA, datoB) {
    var resultado = datoA + datoB;
    return resultado;
}
suma(2,3);


var cuentaFinal = suma(suma(2,3), suma(20,45));
console.log(cuentaFinal);