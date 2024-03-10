//temos uma lista de dados, e precisamos adicionar mais dois dados a essa mesma lita.

const lista = [1,5,6]

function adicionarElemetos() {
  lista.push(7,9)
  console.log(`A lista possui ${lista.length} elementos.`)
}

adicionarElemetos()