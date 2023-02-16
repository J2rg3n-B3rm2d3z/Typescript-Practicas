(()=>{

    const fullName = (firstName:string, lastName?:string, upper:boolean = false ): string =>{

        if(!upper){
            return `${firstName} ${lastName || '---'}`;
        }
        else{
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        
    }

const name = fullName ('Tonny', 'Stark', true);

console.log(name);

})()