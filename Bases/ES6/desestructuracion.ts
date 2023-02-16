(() => {

type Avengers = {
    nick: string;
    ironmam: string;
    vision: string;
    activo: boolean;
    poder: number;
}

const avengers:Avengers = {

    nick:'Samuel L. Jackson',
    ironmam: 'Robert Downey Jr.',
    vision: 'Paul bettany',
    activo: true,
    poder: 1500
}



// const { poder, vision } = avengers;
// console.log ( poder.toFixed(2), vision.toUpperCase());

const printAvenger = ( {ironmam, nick, ...resto}:Avengers ) => {

    console.log(ironmam, resto);

}

// printAvenger(avengers);


const avengersArr:[string, boolean, boolean] = ['Cap. America',true, false];

//const ironmam:string = avengersArr[1];

const [capitan , ironmam, seriaunNumero ] = avengersArr;

// console.log({ironmam, capitan});

})()