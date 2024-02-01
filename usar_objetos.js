const yeti ={
pelo: ""
, nroCuernos: null
, nroDeExtremiddades: null
, tieneMascara: false
, peso: null
, altura: null
,tieneOjos: false
,danho: null
, vida: null
, tiempoDeCrecimiento: ""
,tieneYetimitas: false
, nroYetimitas: 0
, velocidadMovimiento: 0
, multiplicarYetimitas :  function () { 
    if (this.tieneYetimitas) {
        this.nroYetimitas+=2;
    } else {
        console.log(`No tiene yetimitas, valor de yetimitas ${this.tieneYetimitas}`)
    }
}
, ganarNiveles : () => { }
, moverseaVelocidad :function(){}
, recibirDanho : () => {}
, atacarEdificios :  function () {}


}

yeti.tieneMascara= true;
yeti.nroCuernos= 2;
yeti.nroDeExtremiddades= 4;
yeti.peso= 500;

yeti.tieneYetimitas= true;
console.log(yeti);