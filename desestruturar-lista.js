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

    const [marcasMotos, precosMotos] = listaDeMotos
    const IdMoto = marcasMotos.indexOf(moto)
    const IdPrecoMoto = precosMotos[IdMoto]

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