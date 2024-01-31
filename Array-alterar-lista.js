const listaDeProdutos = ['feijão','arroz','mandioca','banana','alface','beterraba']

listaDeProdutos.splice(1, 2, 'batata', 'cenoura')
//                     ^  ^      ^         ^
//                     a  b    item     pode adicionar mais

//os dois primeiros parametros ("a" e "b") indicam o indice de inicio (a) do "corte" e quantos elementos são excluidos (b) a partir do inicio (a).

//agora basta definir os elementos que serão adicionados no lugar!

// console.log('A lista de produtos é: ' + listaDeProdutos)









//vamos ver outro exemplo
const listaDeDados = [100, 110, 101, 111]

function alterarDados() {

  const dadosExcluidos = listaDeDados.slice(0, 2)

  listaDeDados.splice(0, 2)
  
  console.log(`Os dados: ${dadosExcluidos} foram excluidos.`)
  console.log(`Uma nova lista foi gerada: ${dadosExcluidos}`)
}

alterarDados()