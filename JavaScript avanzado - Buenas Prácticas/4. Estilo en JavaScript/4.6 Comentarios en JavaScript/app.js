var nombre = "damian",
    email = "damian.angelucci@hotmail.com";

//COMENTARIOS BASADOS EN JSDOC
/**
 * 
 * Función para enviar saludos 
 * @param {string} nombre - Nombre de la persona a saludar
 */

//Tambien existe DOCBLOCK para generar documentación

function saludar(nombre) {
    //Se retorna el mensaje formado
    return "Hola "+ nombre;
}

/*
    Comentario de bloque
*/

function calcular (datoA, datoB, datoC) {
    var resultado = datoA + datoB;
    return resultado;
}