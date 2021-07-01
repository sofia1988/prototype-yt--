function Animal (nombre, energia ){
    let animal = {}
    animal.nombre = nombre
    animal.energia = energia
    
    animal.come = function (suma) {
    console.log( `${this.nombre} esta comiendo `)
    this.energia += suma
  
}
    animal.duerme = function (length) {
    console.log(`${this.nombre} esta durmiendo `)
    this.energia += length
}
    animal.juega = function (length) {
    console.log(`${this.nombre} esta jugando `)
    this.energia -= length
}
    return animal;
}
const Rita = Animal('Rita', 100)
console.log(Rita);
Rita.come(10);
// ------------------------------------------------------------------------
function Animal(nombre,energia){
    let animal = Object.create(metodosanimal) //herencia prototipal 
    animal.nombre= nombre
    animal.anergia = energia

    return animal
}


const metodosanimal = { //un objeto que tiene metodos
    
    come(suma){
        console.log(`${this.nombre} esta comiendo`)
        this.energia += suma
    },
    duerme(length){
        console.log(`${this.nombre} esta durmiendo`)
        this.energia += length
    },
    juega(length){
        console.log(`${this.nombre} esta jugando`)
        this.energia-= length
    }

}
const Rita = Animal('Rita', 100) //instancia
console.log(Rita);
Rita.come(10);
// ------------------------------------------------------------------------
// prototype es una propiedad de una funcion q apunta a un objeto
// funcion constructora 👇

function Animal(nombre, energia){
    let animal=Object.create(Animal.prototype)
    animal.nombre = nombre
    animal.energia = energia

    return animal
}
// aca agregamos metodos al prototipo 👇
Animal.prototype.come = function(suma){
    console.log(`${this.nombre} esta comiendo`)
    this.energia += suma
}
Animal.prototype.duerme = function(length){
    console.log(`${this.nombre} esta durmiendo`)
    this.energia += length
}
Animal.prototype.juega = function(length){
    console.log(`${this.nombre} esta jugando`)
    this.energia -= length
}
const Rita = Animal('Rita', 100) 
console.log(Rita);
Rita.come(10);
const coquito = Animal('coquito',50)
console.log(coquito)
coquito.juega(5);

// ----------------------------------------------------------------------

function Animal(nombre, energia){
  this.nombre = nombre
  this.energia = energia
}

Animal.prototype.come = function(suma){
    console.log(`${this.nombre} esta comiendo`)
    this.energia += suma
}
Animal.prototype.duerme = function(length){
    console.log(`${this.nombre} esta durmiendo`)
    this.energia += length
}
Animal.prototype.juega = function(length){
    console.log(`${this.nombre} esta jugando`)
    this.energia -= length
}
const coquito = new Animal('coquito',100)
console.log(coquito)
coquito.juega(10)

// ------------------------------------------------------------------------------

class Animal  {
    constructor(nombre,energia){
        this.nombre = nombre
        this.energia = energia
    }
    come(suma){
        console.log(`${this.nombre} esta comiendo`)
        this.energia += suma
    }
    duerme(length){
        console.log(`${this.nombre} esta durmiendo`)
        this.energia += length
    }
    juega(length){
        console.log(`${this.nombre} esta jugando`)
           this.energia -= length
    }
}

const gorda = new Animal('gorda',100)
console.log(gorda)
gorda.duerme(25)

// -------------------------------------------------------------------------
