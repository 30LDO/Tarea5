//Creacion de los objetos user

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

//Se despliegan los usuarios con sus atributos iniciales

console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

//se crea un nuevo atributo dpi fuera de la declaracion inicial del objeto
user.dpi =  "0";
user1.dpi = "1";
user2.dpi = "2";
user3.dpi = "3";
user4.dpi = "4";
user5.dpi = "5";

//despliegue del contenido de los usuarios ahora con el nuevo atributo dpi
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);


/*A cada objeto usuario se le agrega un metodo de cambiar direccion con el uso de Object.seal, el cual se utiliza para cambiar el valor
de un atributo ya existente */
user.cambiarDireccion = function (){
    user.direccion = Object.seal({municipio: "Chinautla", calle: "Diagonal 13", numero: "25"});
};

user1.cambiarDireccion = function (){
    user1.direccion = Object.seal({municipio: "Chinautla", calle: "Diagonal 13", numero: "25"});
};

user2.cambiarDireccion = function (){
    user2.direccion = Object.seal({municipio: "Chinautla", calle: "Diagonal 13", numero: "20"});
};

user3.cambiarDireccion = function (){
    user3.direccion = Object.seal({municipio: "Chinautla", calle: "Diagonal 13", numero: "15"});
};

user4.cambiarDireccion = function (){
    user4.direccion = Object.seal({municipio: "Chinautla", calle: "Diagonal 13", numero: "10"});
};

user5.cambiarDireccion = function (){
    user5.direccion = Object.seal({municipio: "Chinautla", calle: "Diagonal 13", numero: "5"});
};

//luego de crear los metodos, procedemos a ejecutarlos
user.cambiarDireccion();
user1.cambiarDireccion();
user2.cambiarDireccion();
user3.cambiarDireccion();
user4.cambiarDireccion();
user5.cambiarDireccion();

//Despliegue de los objetos usuario ahora con la direccion cambiada
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);