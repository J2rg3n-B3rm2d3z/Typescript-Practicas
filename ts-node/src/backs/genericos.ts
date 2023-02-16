// import { Hero } from './classes/hero';

// // import * as HeroClasses from "./classes/hero";
// // import powers2, { Power } from "./data/powers";
import { printObject,genericFunction,genericFunctionArrow } from '../generics/generics';
import { Villian, Hero } from '../interfaces';

// // const Hero =123;

// // console.log('Hola Mundo!!!!!');

// // const ironman = new HeroClasses.Hero('Tonny Stark', 1 , 55);

// // console.log(ironman);
// // console.log(powers2);

// const ironman = new Hero('Ironman', 1 , 55);

// console.log( ironman);

// console.log( ironman.power);

// printObject( 1234);
// printObject( new Date());
// printObject( {a:1, b:2, c:3});
// printObject( [1,2,3,4,5,6,7,8]);
// printObject( 'Hola mundo');

// const name: string = 'Fernando';

// console.log( genericFunction(3.141615).toFixed(2) );
// console.log( genericFunctionArrow(name).toUpperCase());
// console.log( genericFunctionArrow(new Date()).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
}

console.log ( genericFunctionArrow<Villian>(deadpool).dangerLevel)