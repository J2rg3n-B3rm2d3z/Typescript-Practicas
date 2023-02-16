import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async( pokemonid: number): Promise<Pokemon> =>{

    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`); //=> Esto es una promesa
    //console.log( data.abilities[0].ability.url);

    return data;
}