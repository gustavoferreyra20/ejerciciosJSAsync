
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(function(personaExtraida) {
    return datosPedidos(personaExtraida);
}).then(x => console.log(x)).catch(function(err) {
    console.log("Fetch error: "+ err.message);
})

function datosPedidos(personaRecibida){
    var resultadosPersona = personaRecibida.results[0];
    var persona ={
        nombre: resultadosPersona.name.title + "." + resultadosPersona.name.first + " " + resultadosPersona.name.last,
        genero: resultadosPersona.gender,
        pais: resultadosPersona.location.country,
        estado: resultadosPersona.location.state,
        ciudad: resultadosPersona.location.city,
        calle: resultadosPersona.location.street.name,
        numero: resultadosPersona.location.street.number,
        postcode: resultadosPersona.location.postcode,
        email: resultadosPersona.email,
        username: resultadosPersona.login.username,
        password: resultadosPersona.login.password,
    };
    return persona;
}
