function Persona (nombre, apellidos) { //Objeto: "persona"; propiedades: "nombre" & "apellidos"
    this.nombre = nombre//Permite inicializar la propiedad nombre
    this.apellidos = apellidos;
}

var persona = new Persona ("Damian","Angelucci");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);