var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef')); //Evalua la expresión regular anterior. Si encuentra el patrón que le paso como argumento, arroja un "true", caso contrario, un "false".

var expresion2 = /Hola Mundo/; 

console.log(expresion2.test('El primer programa es Hola Mundo'));

