var persona = {
    nombre: "Damian",
    email: "damian.angelucci@hotmail.com",
    twitter: "dami.an91",
    saludar: function() {
        return "Hola mundo"
    }
}

var dato = "";

for (dato in persona){  //Permite almacenar TODOS los objetos de "persona" en la variable "dato"
    console.log(dato, persona[dato]); //Imprime los valores de las propiedades del objeto. 
}