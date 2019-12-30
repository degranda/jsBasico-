// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Freza"]; 
 console.log(frutas); 
 console.log(frutas.length); // length es una propiedad del array

 // Acceder (por índice) a un elemento del Array
 console.log(frutas[0]);   // Los arrays iician en "0" 


// === Metodos para mutar arrays ===


// .push();

 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array

// .pop();

 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array

