var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function (costo1, costo2) { //método1
        return costo1 + costo2;
    },
    saludar: function() { //método2
        var mensaje = "hola";
        return mensaje;
    }
};

console.log(tienda.nombre);
console.log(tienda.calcular(20,32));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
    console.log(tienda.saludar());
});