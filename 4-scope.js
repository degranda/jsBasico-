
var miNombre = "Diego"; 

function nombre() {
    miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);

// =========

var miNombre = "Diego"; 

function nombre() {
    var miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);

// ===== 

function nombre() {
    
    miNombre = "Alonso";
    return miNombre;
}

nombre(); 