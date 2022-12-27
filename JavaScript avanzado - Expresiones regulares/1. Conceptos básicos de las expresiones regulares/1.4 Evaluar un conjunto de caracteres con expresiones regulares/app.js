//var expresion1 = /[0123456789]/; //Evalua si, al menos, existe alguno de éstos numeros.

var expresion1 = /[0-9]/; //Es lo mismo que lo anterior sólo que evalúo el rango de números del 0 al 9.

console.log(expresion1.test('Sucedió en 1996')); 