let edad = prompt("Introduzca su edad:")

if (edad > 18) {
    alert("El usuario es mayor de edad")
} else if (edad < 18) {
    alert("El ususario es menor de edad")
} else if (edad == 18) {
    alert("El usuario tiene 18")
} else if (edad > 100) {
    alert("El usuario es centenario")
} else if (edad <= 0) {
    alert("Edad invalida")
}//


let i = 1;
let suma = 0;
while (i <= 100) {
    suma += i;
    i++;
}
alert(suma)//

let num = prompt("Escriba un numero: ")

for (i = 1; i <= 10; i++) {
    alert(num + "por" + i + "es igual a: " + (num*i))
}console.log(num + "por" + i + "es igual a: " + (num*i))