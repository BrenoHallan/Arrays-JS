// arrays declaradas em uma constante podem sofrer modificaçoes, mesmo que seja uma constante.

const ArrayX = [1,2,3]

ArrayX.pop()

console.log(ArrayX)
// saida: [1,2]