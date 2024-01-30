//declare a const com uma lista de valores
const valores = [1,2]

valores.push(4)
// adicione valores no final da lista com ".push()", e defina os valores



// o resultado do calculo abaixo será 2.3333333333333335
const calculo = (valores[0] + valores[1] + valores[2]) / valores.length

console.log(calculo.toFixed(2))
//                     ^    ^
//utilize .toFixed() para fixar quantas casas decimais forem necessárias, o resultado será 2,33 nesse caso.
