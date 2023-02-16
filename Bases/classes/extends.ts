(() => {

    class Avenger {

        constructor(
            public name:string,
            public realname:string,
        ){
            // console.log('Constructor Avenger llamado!')
        }

        get fullName():string{
            return ` ${ this.name } - ${ this.realname} `;
        }

        set fullName(name:string){
            this.name = name;
        }

        protected getFullName():string{
            return `${ this.name} ${ this.realname}`;
        }

    }

    class Xmen extends Avenger{

        constructor(
            name:string,
            realname:string,
            public isMutant:boolean
        ){
            super(name,realname);
            // console.log('Constructor Xmen llamado');
        }

        getFullNameFromXmen(){
            console.log(super.getFullName());
        }

    }

    const wolverine = new Xmen(`Wolverine`,`Logan`, true);

    // console.log(wolverine.fullName);
    // wolverine.fullName='Fernando';
    // console.log(wolverine.fullName);
    // wolverine.getFullNameFromXmen();





})()