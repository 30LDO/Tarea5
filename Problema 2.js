//Ademas de crear ahora los usuarios como objetos, se les agrega un metodo recuperarClave

//Creacion del usuario 0 como objeto
let user = {
    nombre: 'Paola',
    appeliido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    recuperarClave : function () {
        console.log("Recuperar clave")
    }
}

//Creacion del usuario 1 como objeto
let user1 = {
    nombre: 'Paolo',
    appeliido: 'Ortega',
    email: 'paolo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    recuperarClave : function () {
        console.log("Recuperar clave")
    }
}

//Creacion del usuario 2 como objeto
let user2 = {
    nombre: 'Daniela',
    appeliido: 'Perez',
    email: 'daniela@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 20,
    },
    recuperarClave : function () {
        console.log("Recuperar clave")
    }
}

//Creacion del usuario 3 como objeto
let user3 = {
    nombre: 'Paulina',
    appeliido: 'Lopez',
    email: 'paulina@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 15,
    },
    recuperarClave : function () {
        console.log("Recuperar clave")
    }
}

//Creacion del usuario 4 como objeto
let user4 = {
    nombre: 'Alejandra',
    appeliido: 'Mendez',
    email: 'alejandra@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 10,
    },
    recuperarClave : function () {
        console.log("Recuperar clave")
    }
}

//Creacion del usuario 5 como objeto
let user5 = {
    nombre: 'Luis',
    appeliido: 'Campos',
    email: 'luis@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 5,
    },
    recuperarClave : function () {
        console.log("Recuperar clave")
    }
}

//Ahora los usuarios son mostrados en consola como objetos, especificando las propiedades, atributos y metodos
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
