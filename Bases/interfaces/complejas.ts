(() => {
    

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id:string ):(string);
    }

    interface Address {
        id: number,
        zip:string,
        city: string,
    }

    const client: Client = {
        name:'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'ASDA ASD',
            city: 'Ottawa'
        },
        getFullAddress( id:string ){
            return this.address.city
        }
        
    }


    const client2:Client ={
        name: 'Melisa',
        age: 30,
        address: {
            id:123,
            zip: 'ASA ASD',
            city:'Saitama'
        },
        getFullAddress( id:string ){
            return this.address.city
        }
    }

})()