
const obtenerChiste = require("./library");

// Codigo funcion callback
function funcionCallback(chiste){
    console.log(chiste);
}


// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallback);


