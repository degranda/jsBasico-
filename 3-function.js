// Las funciones son prodecimientos, un conjunto de sentencias o pasos que realizarán una tarea o calculo con ciertos valores. 

// Tenemos dos tipo de funciones en js, function Declaration y function Expression 

function miFuncion() { // function delcaration
    return 3; 
}

miFuncion(); // mandamos llamar la funcion

var miFuncion = function(a,b) {  // function Expression (tambien conocidas cono funciones anonimas)
    return a + b;
}

miFuncion(); // mandamos llamar la variable como funcion

/* ============================= */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}

// Return, cómo regresamos un valor con una function. 

function suma(a,b) {  // está funcion recibe 2 parametos, que se convierten en un placeholder de valores que se pueden utilizar dentro de la funcion.
    var resultado = a + b; 
}

function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

function suma(a,b) {
    return a + b; 
}

suma(20, 30); 