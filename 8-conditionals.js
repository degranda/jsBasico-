// Esto nos ayudará para poder tomar decisiones.

var esUsuario = true;

if (esUsuario) { // con el if validamos que la variable esUsuario sea true
    console.log('Tiene acceso al contenido');
}

// Presentamos el else 

var esUsuario = false;

if (esUsuario) {
    console.log('Tiene acceso al contenido');
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18;
var accion;

if (edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18;
var accion;

if (edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if (edad > 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */

// Operador ternario 

var numero = 1;
var resultado;

if (numero === 1) {
    resultado = 'Sí soy un 1';
} else {
    resultado = 'No soy un 1';
}

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? 'Sí soy un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una función que reciba el parámetro con el que vamos a jugar, y me regrese si gane o perdí. 

/*  

Variables: piedra, papel y tiejeras. 
Una funcion que utilice condicionales para validar si el parámetro que le estoy pasando gana o pierde. 

Y que la función al final me regrese el resultado de si gané o perdí. 

*/