

// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
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

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';