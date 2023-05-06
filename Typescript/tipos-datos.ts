// String
let cadena: string | number = 'esto es un string' // Insertar varios tipos de datos
cadena = 12

// Number
let numero: number = 12

// Boleano
let verdadero_falso: boolean = true;
let falso_verdadero: boolean = false;

// Any ( cualquier dato )
let cualquiera: any = 'Hola'

// Arrays
let lenguajes: Array<string> = ["HTML","CSS","JS","TYPESCRIPT"]
let years: number[] = [13,23,12]

// Datos personalizados
type letrasynumeros = string | number;
let true_false: letrasynumeros = "hola";
true_false = 12;

// let vs var 
var numero1 = 10;
var numero2 = 20;

if (numero1 == 10) {
    let numero1 = 44
    var numero2 = 55
 }

console.log(numero1, numero2)


// mostrando datos
console.log(cadena)
console.log(numero)
console.log(cualquiera)
console.log(lenguajes)
console.log(years)
console.log(true_false)

 