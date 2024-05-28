//Creacion de una funcion que creara los objetos usuario previamente vistos a partir de parametros que nosotros pasemos a la funcion
function createUser (nombre, apellido, email, municipio, calle, numero, dpi){
    return {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: {
            municipio: municipio,
            calle: calle,
            numero: numero
        },
        recuperarClave : function() {
            console.log("Recuperando clave");
        },
        dpi: dpi,
        cambiarDireccion : function (municipio, calle, numero){
            user.direccion = Object.seal({municipio: municipio, calle: calle, numero: numero});
        }

    };
}

//Creacion de los usuarios mediante la funcion
user    = createUser("Paola",      "Ortiz",    "paola@company.ru",      "Jocotenango", "Calle ancha", "25", "0" );
user1   = createUser("Paolo",      "Ortega",   "paolo@company.ru",      "Jocotenango", "Calle ancha", "25", "1" );
user2   = createUser("Daniela",    "Perez",    "daniela@company.ru",    "Jocotenango", "Calle ancha", "20", "2" );
user3   = createUser("Paulina",    "Lopez",    "paulina@company.ru",    "Jocotenango", "Calle ancha", "15", "3" );
user4   = createUser("Alejandra",  "Mendez",   "alejandra@company.ru",  "Jocotenango", "Calle ancha", "10", "4" );
user5   = createUser("Luis",       "Campos",   "luis@company.ru",       "Jocotenango", "Calle ancha", "05", "5" );

//Despliegue de los objetos usuario creados a partir de una factory function
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

