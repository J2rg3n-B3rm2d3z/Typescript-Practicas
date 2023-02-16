(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';

    const existe:boolean = false;

    // Tuplas
    const parejaHeroes:[string, string] = [batman, superman];
    const villano:[string, number, boolean] = ['Lex Lutor', 5, true];

    // Arreglos 
    const aliados:string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

    //Enumeraciones
    // ? enum { acuaman = 0 }

    enum FuerzaHeroe{

        Flash = 5,
        Superman = 100,
        Batman = 1,
        Acuaman = 0
    
    }
    
    const fuerzaFlash: FuerzaHeroe = FuerzaHeroe.Flash;
    const fuerzaSuperman: FuerzaHeroe = FuerzaHeroe.Superman;
    const fuerzaBatman: FuerzaHeroe = FuerzaHeroe.Batman;
    const fuerzaAcuaman: FuerzaHeroe = FuerzaHeroe.Acuaman;

    //Retorno de funciones

    function activar_batiseñal():string{
        return 'activada';
    }

    const msg:string = 'Auxilio!!!';
    pedir_ayuda(msg);

    function pedir_ayuda(msg: string):void{
      console.log(msg);
    }

    // Aserciones de Tipo

    const poder: number = 100 ;
    const largoDelPoder:number = poder.toString().length;
    console.log( largoDelPoder );

})()

