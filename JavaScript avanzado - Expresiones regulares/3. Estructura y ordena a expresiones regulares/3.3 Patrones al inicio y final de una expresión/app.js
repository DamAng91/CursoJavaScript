var expresionInicio = /^Any/;
var expresionFin = /JavaScript$/;
var expInicioFin = /^Any | JavaScript$/;


console.log(expresionInicio.test('Any app that can be imagined can be made in JavaScript'));
console.log(expresionFin.test('Any app that can be imagined can be made in JavaScript'));
console.log(expInicioFin.test('Any app that can be imagined can be made in JavaScript'));
