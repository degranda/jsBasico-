var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razon los elementos tiene que ser identicos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 