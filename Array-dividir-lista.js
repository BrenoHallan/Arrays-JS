const lista1 = ['tree','earth','monster','win']

//A funcao dividir() divide a lista ao meio e depois verifica se o tamanho das listas resultados é igual a 2

//Usa-se .slice() para dividir uma lista em duas novas listas.
//O slice vai criar dois novos arrays, por isso é armazenado em grupo1 e 2.

function dividir(lista) {
  
  const grupo1 = lista1.slice(0, lista.length / 2)
  const grupo2 = lista1.slice(lista.length / 2)
  //                      ^
  //                    .slice()

  console.log(grupo1, grupo2)

  if (grupo1.length == 2 && grupo2.length == 2) {
    console.log('correto: as duas novas listas possuem 2 elementos')
  } else {
    console.log('incorreto: uma das listas NÃO possuem 2 elementos')
  }
}

dividir(lista1)