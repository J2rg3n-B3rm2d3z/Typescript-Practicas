(() => {
    type Autos = {
        carroceria:string;
        modelo:string;
        antibalas:boolean;
        pasajeros:number;
        disparar?:() => void;
    };
    
    //Objetos
    const batimovil:Autos = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    
    const bumblebee:Autos = {
        carroceria: "Amarillo con Negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar(){
            console.log("Disparando");
        }
    };
    
    //Villanos debe de ser un arreglo de objetos personalizados
    
    type Villanos = {
        nombre:string;
        edad?:number;
        mutante:boolean;
    }
    
    const villanos:Villanos[] = [{
        nombre:"Lex Luthor",
        edad: 54,
        mutante:false
    },{
        nombre:"Erik Magnus Lehnsherr",
        edad: 49,
        mutante:true
    },{
        nombre:"James Logan",
        edad: undefined,
        mutante:true
    }];
    
    //Multiples tipos
    // cree dos tipos, uno para charles y otro para apocalipsis
    
    type Charles = {
        poder:string,
        estatura: number
    }
    
    console.log('Paso por aqui');
    
    type Apocalipsis = {
        lider:boolean,
        miembros:string[]
    }
    
    console.log('Paso por aca');
    
    const charles:Charles = {
        poder:"psiquico",
        estatura: 1.78
    };
    
    const apocalipsis:Apocalipsis = {
        lider:true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    
    console.log(apocalipsis);
    
    // Mystique, debe poder ser cualquier de esos dos mutantes (Charles o apocalipsis)
    let mystique:(Charles|Apocalipsis);
    
    mystique = charles;
    mystique = apocalipsis;
    
    
})()
