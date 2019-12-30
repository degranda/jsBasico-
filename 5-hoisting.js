

// Qué resultado esperas que nos aparesca si corremos este ejemplo? "undefined"
console.log(miNombre);

var miNombre = "Diego";

// Lo que sucede con el hoisting

var miNombre;

console.log(miNombre);

miNombre = "Diego";


// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

// Lo que sucede con hoisting 

function hey() {  // La funcion se declara hasta arriva, y despues se declarán las variables. 
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';