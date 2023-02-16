(() => {

    type Hero = {
        name: string, 
        age?: number, 
        powers: string[], 
        getName?: () => (string) 
    }

    let myCustomVariable: (Hero | string | number) = 'Jurgen';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ser rico']
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()