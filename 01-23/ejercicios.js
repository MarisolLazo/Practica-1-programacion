const usuarios = [
    { "name ": "User1", "Edad": 21, "Carrera": "Software", "year": 1 },
    { "name ": "User2", "Edad": 22, "Carrera": "Comunicacicones", "year": 2 },
    { "name ": "User3", "Edad": 24, "Carrera": "Ingles", "year": 1 },
    { "name ": "User4", "Edad": 27, "Carrera": "Medicina", "year": 3 },
    { "name ": "User5", "Edad": 28, "Carrera": "Software", "year": 4 },
    { "name ": "User6", "Edad": 29, "Carrera": "Software", "year": 4 },
    { "name ": "User7", "Edad": 22, "Carrera": "Software", "year": 6 },
    { "name ": "User8", "Edad": 26, "Carrera": "Software", "year": 7 },
    { "name ": "User9", "Edad": 20, "Carrera": "Software", "year": 1 },
];

const usuariosFilter = usuarios.filter((x) => {
    //if(x.Carrera == "Sofware")
    return x.Carrera == "Software" &&  x.Edad == 21 //Si cumple la condicion, agregar registro
})

console.log(usuariosFilter);

const usuariosNewFilter = usuarios.filter((z) => {
    //if(x.Carrera == "Medicina")
    return z.Carrera == "Medicina" //Si cumple la condicion, agregar registro
})
console.log(usuariosNewFilter);

const usuariosMap = usuarios.map((x) => {
    return{
        "nombre": x.name,
        "edad":x.Edad
    }
})

console.log(usuariosMap)