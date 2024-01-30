//declare a const com uma lista de valores
const valores = [1,2,3]

valores.pop()
// remova valores no final da lista com ".pop()"

const media = (valores[0] + valores[1]) / valores.length
console.log(media)


const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"