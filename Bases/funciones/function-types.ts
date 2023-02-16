(() => {

    const addNumbers = ( a: number, b: number) : number => ( a + b );
    const greet = ( name: (string) ) : string => ( `Hola ${ name}` );
    const saveTheWorld = () => `El mundo esta salvado!`;


    //Esta funcion solo aceptas funciones cuyo parametros y valores de retornos sean exactamente iguales a la que se definen el tipo de funcion

    let myFunction: (((y:number, z:number) => number) |
                    ((y:string) => string )
                     );

    

    //myFunction = 10;
    //console.log(myFunction);

    myFunction = addNumbers
    console.log( myFunction(1,2) );

    myFunction = greet
    console.log( myFunction('Juan') );

   // myFunction = saveTheWorld
    //console.log( myFunction() );

})()