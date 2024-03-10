const numeros = [
  63, 17, 94, 42, 55, 78, 31, 26, 89, 10,
  47, 59, 82, 35, 71, 22, 38, 50, 13, 66,
  90, 27, 72, 19, 84, 11, 58, 45, 76, 29,
  68, 95, 23, 39, 87, 14, 61, 34, 70, 53
];

//Deve ser armazenado, pois o slice() gera um novo array.
const grupo1 = numeros.slice(0, numeros.length / 2)
const grupo2 = numeros.slice(numeros.length / 2)

console.log(grupo1)
console.log(grupo2)

//[!] SLICE E SPLICE SÃO DIFERENTES