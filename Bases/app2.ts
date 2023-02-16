(() => {
// Funciones Basicas
const sumar = ( a:number , b:number ): number => (a + b);

const contar = ( heroes:string[] ): number => (heroes.length);

const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

contar(superHeroes);

// Parametros por defecto

const llamarBatman = ( llamar:boolean = true ):void => {
    if (llamar){
        console.log("Batiseñal activada");
    }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas:string[] ):string => (personas.join(", "));


// Tipo Funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[]) => {} ;

// Crear el tipo de funcion que acepte la funcion "noHaceNada"

let noHaceNadaTampoco: (a:number, b:string, c:boolean, arreglo:string[]) => void ;

noHaceNadaTampoco = noHaceNada



})()

