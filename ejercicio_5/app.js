
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function funcionCallback(personaExtraida){
    console.log(personaExtraida.results);
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
