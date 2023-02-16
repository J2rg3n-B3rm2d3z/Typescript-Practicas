(() =>{

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    class Xmen extends Mutante {
        public salvarMundo (){
            return 'Mundo salvado!';
        }
    }
    class Villian extends Mutante {
        public conquistarMundo (){
            return 'Mundo conquistado!';
        }
    }

    const wolverine:Xmen = new Xmen('Wolverine', 'Logan');
    const magneto:Villian = new Villian('Magneto', 'Erick');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = ( character: Mutante) => {
        console.log(character.realName);
    }

    // printName(wolverine);
    // printName(magneto);



})()