/*
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.
*/

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Nightcrawler2', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    let foundMutants = [];
    for (const mutant of mutants){
        if (mutant.power === power){
            foundMutants.push(mutant);
        }
    }

    if (foundMutants.length === 0 ){
        console.log("No se encontró ningun mutante con ese poder");
    }
    else{
        console.log(foundMutants);
    }
    
}

findMutantByPower(mutants,"teleportation");
