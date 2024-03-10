//PRESTE ATENÇÃO NESTE MÉTODO USANDO O splice()

const numeros = [
  63, 17, 94, 42, 55, 78, 31, 26, 89, 10,
  47, 59, 82, 35, 71, 22, 38, 50, 13, 66,
  90, 27, 72, 19, 84, 11, 58, 45, 76, 29,
  68, 95, 23, 39, 87, 14, 61, 34, 70, 53
];

numeros.splice(2,12, 0, 0, 0, 0)
//             ^  ^  ^
console.log(numeros)

//O primeiro parametro é o indice do elemento na lista. O segundo parametro é a quantidade de elementos a serem excluidos a partir do indice (contando com o indice). E o terceiro é os elemntos que podem ser adicionados no lugar =)

//Os elementos que foram excluidos dessa lista foram 94, 42, 55, 78, 31, 26, 89, 10, 47, 59, 82 e 35.

//Este metodo apenas altera o array, não cria um novo array. É por esse motivo que não precisa ser armazenado.