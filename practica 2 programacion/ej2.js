let numeros = []
let otrosNumeros = []
let arrayFinal = []
for(let i = 1; i <= 100; i++ ){
    let mensaje = `El  valor es: ${i}`
    numeros.push(mensaje)
}

for(let i = 101; i <= 200; i++ ){
    let mensaje = `El  valor es: ${i}`
    numeros.push(mensaje)
}
arrayFinal.forEach =[...numeros, ...otrosNumeros]

numeros.forEach((i) => {
    console.log(i)
})//

let persona1 = {
    nombre: `Marisol`,
    edad: 18,
    carrera: `Software`,
}

let persona2 = {
    nombre: `Marisol2`,
    edad: 18,
    carrera: `Software2`,
}
let persona3= {
    nombre: `Marisol3`,
    edad: 18,
    carrera: `Software3`,
}

let arrayObjetos = [persona1, persona2, persona3]

arrayObjetos.forEach((i) => {
    console.log(i)
})

console.log(arrayObjetos[2].edad)
