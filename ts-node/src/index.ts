// import { getPokemon } from './generics/get-pokemon';
// import { Sprites } from './interfaces/pokemon';

import { Pokemon } from "./decorators/pokemon-class";



// getPokemon(6)
// .then( pokemon => console.log(pokemon.sprites.front_default))
// .catch( error => console.error(error) )
// .finally( () => console.log('Fin de getPokemon'));


/// Codigo de Decoradores aqui en adelante


const charmander:Pokemon = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.publicApi = 'http//www.google.com';

console.log(charmander);
// charmander.savePokemonToDB(5);
