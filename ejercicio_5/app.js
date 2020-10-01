
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function funcionCallback(personaExtraida){
    console.log(datosPedidos(personaExtraida));
}

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

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
