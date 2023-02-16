(():void =>{

    const hero:string = 'Flash';

    function returnName (hero:string):string {
        return hero;
    }


    const activateBatisignal = ():string => {
        return 'Batiseñal acivada!';
    }

    console.log(returnName(hero));

    console.log(typeof(activateBatisignal));

})()