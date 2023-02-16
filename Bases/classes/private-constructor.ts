(() => {

    class Apocalipsis{

        static intance:Apocalipsis;

        private constructor( public name: string){

        }

        static callApocalipsis():Apocalipsis{
            if(!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsos el unico');

            }

            return Apocalipsis.intance;
        }

        changeName( newName:string):void{
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

    // const apocalipsis1: Apocalipsis = new Apocalipsis('Soy apocalipsis1.. el unico');
    // const apocalipsis2: Apocalipsis = new Apocalipsis('Soy apocalipsis2.. el unico');
    // const apocalipsis3: Apocalipsis = new Apocalipsis('Soy apocalipsis3.. el unico');


    console.log(apocalipsis1, apocalipsis2, apocalipsis3);



})()