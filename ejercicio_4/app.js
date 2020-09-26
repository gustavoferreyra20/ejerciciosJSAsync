
const obtenerPokemon = require("./library");
var nombrePokemon = "rattata";

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon(nombrePokemon).then(function(response) {
    console.log("Nombre= "+ response.name + "\nHabilidades= ");
    console.log(response.abilities.forEach(habilidades => console.log(habilidades.ability.name)));
}).catch(function(err) {
    console.log("Fetch error: "+ err.message);
})
