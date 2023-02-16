// Crear interfaces

interface Auto {
    encender:boolean;
    velocidadMaxima:number;
    acelerar():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}

const batimovil:Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
        console.log('........ gogogogog!!!');
    }
}


//Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
    reir?:boolean;
    comer?:boolean;
    llorar?:boolean;
}


const guason:Guason = {
    reir:true,
    comer:true,
    llorar:false
}

const reir = ( guason:Guason ):void => {
    if(guason.reir){
        console.log("JAJAJAJA");
    }
}

// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
    (ciudaddanos:string[]):number;

}

const ciudadGotica:CiudadGotica = ( ciudadanos:string[] ):number => ciudadanos.length;


// Cree una interfaz que obligue crear un clase
// con las siguientes propiedades y metodos

interface interPersona {
    nombre:string;
    edad:number;
    sexo:boolean;
    estadoCivil:string;
    imprimirbio():void;
}


/*
    propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion
    */

class Persona implements interPersona {
    constructor(
        public nombre:string,
        public edad:number,
        public sexo:boolean,
        public estadoCivil:string,
    ){}

    imprimirbio(): void {
        console.log(`Este es mi biografia: ${this.nombre} ${this.edad}`)
    }
}