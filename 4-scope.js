/*  Ejemplo del universo, un sistema solar, y un planeta.  */


// Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables. Si tendremos acceso a ellas o no dependerá de dónde las declaremos y las mandemos llamar.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global

var miNombre = "Diego";

function nombre() {
    miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);

// Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una función, esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global.

var miNombre = "Diego"

function nombre() {
    var miApellido = "De Granda";
    return miNombre + " " + miApellido
}

nombre();

console.log(miNombre);
console.log(miApellido);

//  Ejemplos de cómo puede ayudar o crear error el tema del scope. 

// Ejemplo 1. Cómo con una funcion podemos cambiar el valor de la variable global
var miNombre = "Diego"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre);
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2. Cómo podemos evitar reescribir el valor de una variable gracias al scope.

var miNombre = "Diego"

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);

// Ejemplo 3. Cómo si creamos un scope local y mandamos llamar la variable fuera de la función nos puede crear un problema. 

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);