(() => {

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const VolcanNEgro:string = `Hñéroe Volcan negro`;

    const abc:number = 123;

    console.log(` I'm ${batman}, ${abc.toString}`);

    console.log( batman.toUpperCase());

    console.log( batman[10]?.toUpperCase() || 'No esta batman' )

})()