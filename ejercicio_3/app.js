
const obtenerPokemon = require("./library");
var nombrePokemon = "rattata";

// Codigo funcion callback
function funcionCallback(pokemon){
    console.log("Nombre= "+ pokemon.name + "\nHabilidades= ");
    console.log(pokemon.abilities.forEach(habilidades => console.log(habilidades.ability.name)));
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon(nombrePokemon, funcionCallback);
