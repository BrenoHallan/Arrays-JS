const carros = [
  "Chevrolet Onix",
  "Fiat Argo",
  "Volkswagen Gol",
  "Ford Ka",
  "Renault Kwid",
  "Hyundai HB20",
  "Toyota Corolla",
  "Honda Civic",
  "Nissan Versa",
  "Jeep Renegade"
];

const precos = [
  45000,
  71000,
  48000,
  52000,
  40000,
  60000,
  80000,
  75000,
  65000,
  70000
];

//indexOf e includes

const lojaDeCarros = [carros, precos]

function procurarVeiculo(carro) {
  const IdVeiculo = lojaDeCarros[0].indexOf(carro)
  if (IdVeiculo >= 0) {
    const IdPreco = lojaDeCarros[1][IdVeiculo]
    console.log(`
      Veículo: ${carro}
      Preco: R$ ${IdPreco},00
    `)
  } else {
    console.log(`
      [!] O veículo ${carro} não existe
          na lista.
          Verifique se digitou o nome
          correto e tente novamente.
    `)
  }
}

//procurarVeiculo("Ford Ka")





var produtosEletronicos = [
  "Smartphone",
  "Notebook",
  "Fone de ouvido",
  "Smart TV",
  "Câmera digital"
];

var codigosRegistro = [
  "ELEC001",
  "ELEC002",
  "ELEC003",
  "ELEC004",
  "ELEC005"
];

var preco = [
  1000.00,
  1500.00,
  200.00,
  2500.00,
  500.00
];

const estoque = [produtosEletronicos, codigosRegistro, preco]

function procurarEstoque(produto) {
  const IdProduto = estoque[0].indexOf(produto)

  if (IdProduto !== -1) {
    const IdCodigoRegistro = estoque[1][IdProduto]
    const IdPreco = estoque[2][IdProduto]
    console.log(`
      Produto: ${produto}
      Código: ${IdCodigoRegistro}
      Preço: ${IdPreco}
    `)
  } else {
    console.log(`
      [!] O item "${produto}" não foi
          encontrado no estoque.
    `)
  }
}

//procurarEstoque("Note")






const marcasMotos = [
  "Honda", "Yamaha",
  "Kawasaki", "Suzuki",
  "Ducati", "BMW",
  "Triumph", "KTM"
];

const precosMotos = [
  37000, 18000,
  9600, 10750,
  11500, 11750,
  14000, 10800
];

const listaDeMotos = [marcasMotos, precosMotos]

function consultarPreco(moto) {
  if (listaDeMotos[0].includes(moto)) {

    const IdMoto = listaDeMotos[0].indexOf(moto)
    const IdPrecoMoto = listaDeMotos[1][IdMoto]

    console.log(`
      Fabricante: ${moto}
      Preço médio: ${IdPrecoMoto}
    `)
  } else {
    console.log(`
      [!] Não existe na lista de
          fabricantes.
    `)
  }
}

consultarPreco("Yamaha")




const listaDeDados = [0,1,2,3,4,5,6,7,8,9]

function dados(numero) {
  if (listaDeDados.includes(numero)) {
    const indiceDado = listaDeDados.indexOf(numero)
    console.log(`O número digitado é ${numero} e seu índice é ${indiceDado}`)
  } else {
    if (numero <= -1 || numero >= 10) {
      console.log('Não existem números maiores ou iguais a 10, ou números negativos na lista.')
    }
  }
}

dados(10)