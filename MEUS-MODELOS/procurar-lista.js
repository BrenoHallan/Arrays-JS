const planetNames = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno"
];

const orbitalPeriods = [
  88, 
  225, 
  365, 
  687, 
  4333, 
  10759, 
  30687, 
  60190
];

const dataBase = [planetNames, orbitalPeriods]

function search(planet) {
  if (dataBase[0].includes(planet)) {
    const planetId = dataBase[0].indexOf(planet)
    const orbitId = dataBase[1][planetId]
    console.log(`
      Planeta: ${planet}
      Período: ${orbitId} dias terrestres
    `);
  } else {
    console.log(`
      [!] ${planet} não exixte no
          sistema solar.
    `);
  }
}

search("Urano")