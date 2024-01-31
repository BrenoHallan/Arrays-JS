const planets = ['Earth','Mars','Venus']
const otherPlanets = ['Mercury','Uranus']
const number = 120

const allPlanets = planets.concat(otherPlanets, moon)
//                    ^       ^          ^
//               arrayX    .concat()   parametro

//junte duas ou mais listas usando o .concat() com a lista principal "arrayX"

console.log(allPlanets)