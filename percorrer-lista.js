const valores = [
  0.001,
  0.002,
  0.003,
  0.004,
  0.005,
  0.006
]

for (let index = 0; index < valores.length; index++){
  console.log(index, valores[index]);
}



//calcule a média dos valores com "for"
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let media = 0

for (let y = 0; y < numeros.length; y++) {
  media = media + numeros[y]
  console.log(media);
}

const mediaDeValores = media / numeros.length
console.log(mediaDeValores)