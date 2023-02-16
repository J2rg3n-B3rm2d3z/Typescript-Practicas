import * as Poder from '../data/powers';
export class Hero {
    constructor(
        public name: string,
        public powerID: number,
        public age: number,
    ){}

    get power():string{// return string
        return Poder.powers.find(power => power.id === this.powerID)?.desc || 'not found';

        // return Poder.powers.find( power:Power => this.powerID=== this.powerId).desc || 'not found';

        // for (const power of Poder.powers) {
        //     if(power.id == this.powerID){
        //         return power.desc;
        //     }
        // }
        // return 'not found'
        

    }
}

export class Hero2{ }
export class Hero3{ }
export class Hero4{ }

export const PI = 3.1416;
export const miNombre = 'Fernando';

