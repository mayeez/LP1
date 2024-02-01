class Animal {
    #patas = 4;

    constructor(patas) {
        this.#patas = patas;
    }
    get patas (){
        return this.#patas;
    }
}

class Mamifero extends Animal {
    constructor(patas) {
        //cuando se hace la herencia es obligatorio esto:
        super(patas);
    }
 }

class Pez extends Animal {
    constructor(patas) {
        //cuando se hace la herencia es obligatorio esto:
        super(patas);
    }
}

class Reptil extends Animal{
    constructor(patas) {
        //cuando se hace la herencia es obligatorio esto:
        super(patas);
    }
}

class Ave  extends Animal {
    constructor(patas) {
        //cuando se hace la herencia es obligatorio esto:
        super(patas);
    }
}

class Humano extends Mamifero {
constructor (patas) {
    super(patas);
}

}


//creacion de instancias
const pez = new Pez(0);
console.log (pez.patas)
const mam = new Mamifero(2);
console.log(mam.patas)
const human = new Humano (2);
console.log(human.patas)