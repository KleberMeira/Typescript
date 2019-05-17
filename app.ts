let message: string = "Help-me, Obi-Wan Kenobi. You´re my only hope!" ;
console.log(message);

let episode: number = 4;
console.log("This is episode: " + 4);
episode++;
console.log("Next episode is: " + episode)

let favoriteDroid
favoriteDroid = 'BB-8'
console.log("My FavoriteDroid: " + favoriteDroid)

//function
let passos = function(valor: number): boolean{
    return valor < 12;
}

//template string
let distance = 11;
console.log(`Is ${distance} e maior que os valor? ${passos(distance) ? 'Sim' : 'Nao'} `)

//esquedo: declaracao
//direito: implementacao
//Arrow function
let call = (name: string) => console.log(`Do youcopy, ${name}?`)
call('R2')

//usando parametro padrao/predefinido
function inc(speed: number, inc: number =1) : number{
    return speed + inc;
}

console.log(`inc(5,1) = ${inc(5,1)}`);
console.log(`in(5) = ${inc(5)}`)

class Spacecraft{
    constructor(public propulsor: string){

    }

    jumpIntoHyperspace(){
        console.log(`Entrou no espaco ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2;
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }else{
            console.log(`Failed to jum into hyperspace`);
        }
    }

}

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

interface Containership{

    //? opcional cargoContainers?
    cargoContainers: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;

console.log(`Is falcon good the job? ${goodForTheJob ? 'Sim' : 'Nao'}`);