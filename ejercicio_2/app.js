
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

obtenerChiste().then(function(response) {
    console.log(response);
}).catch(function(err) {
    console.log("Fetch error: "+ err.message);
})
