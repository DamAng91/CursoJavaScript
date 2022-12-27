var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; //{1,2} Denota que puede exitir 1 o hasta 2 elementos.


console.log(expresion1.test('27-06-2007 11:45'));

