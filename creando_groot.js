//la encapsulacion
class Groot {
    #fechaAparicion;
    constructor  (fechaAparicion) {
this.#fechaAparicion = fechaAparicion;
this.edad = 60;
 }
}

//crear instancia
let grootcito = new Groot ("13-11-1960");
console.log(grootcito.edad);
let grootcitoJoven = new Groot ("29-01-2024");
let edad = 11;
console.log (grootcitoJoven.edad);