
// Binary operators, y esto es porque significa que están 2 operandos involucrado 

3 + 2
50 - 10
10 * 3
20 / 2

'Diego ' + 'De Granda'

// Unary operator, aquí es porque hay solo 1 operando involucrado 

!false // operador not (no)

// Lógicos y relacionales

3.0 == '3' // es igual

3.0 === '3' // es estrictamente igual 

5 < 3, 5 <= 3, 5 > 3, 5 >= 3 // menor, menor o igual, mayo, mayor o igual 

a && b // operador and (y)

true || false // operador or (o)


/* ================================================================ */ 

// Operador que solo se pueden utilizar con variables 

var edad = 40;

edad++;
edad += 2; 

edad;

/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);