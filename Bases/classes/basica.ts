(() => {

    class Avenger{

        // private name: string ;
        // private team: string;
        // public realName?: string;

        static countInsCreate: number = 0;
        static getAvgAge():string{
            return this.name
        }


        constructor( 
            
            private name:string, 
            private team:string,  
            public realName?:string,
            ){

            Avenger.countInsCreate ++;
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

        public bio():string {
            return `${this.name} (${this.team})!!!`;
        }

    }

    // console.log(Avenger.countInsCreate);
    // const antman:Avenger = new Avenger('Antman','Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.countInsCreate);
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());

})()