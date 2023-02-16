(() => {

const fullName = ( firstName: string, ...restName:string[] ) : string => {

    return `${ firstName } ${ restName.join(' ') }`;


}


const superman = fullName ( 'Clark', 'Joseph', 'Kent');


console.log({superman});







})()