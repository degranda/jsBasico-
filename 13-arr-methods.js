var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]

//   Metodo Filter  
/* Valida si es un true o false para poder meterlos al nuevo array, y éste metodo no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */ 
});

console.log(articulosFiltrados);

 //   Metodo Map 

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  
});

console.log(nombreArticulos);

 //   Metodo Find
 /* De igual forma, con este metodo se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);

//   Metodo forEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//   Metodo Some
/* Este metodo nos regresa un false o un true para validar si hay o no articulos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Every

/* Este metodo checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Reduce
/* Este metodo corre una funcion en casa elemento del array, para comenzar a sumar los costos de cada elemento. */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal); 

//   Metodo Includes

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2); 

console.log(incluyeNumero);

