console.log ("---------------------")
//crear nombre y apellido
function ingresarNombre() {
    return "Mayerli";
}

function ingresarApellido() {
    return "Torres";
}

let nombre = ingresarNombre ();
let apellido = ingresarApellido ();

console.log( `MI nombre es: ${nombre} y mi apellido es: ${apellido}`);

//efectuar una suma
function sumaa (a, b) {
return a + b;
}

let resultado = sumaa (15, 5);
console.log("El resultado de la suma es:", resultado);

//elaborar lista de compras y usar find
let listaDeCompras = ["Leche", "Cáfe", "Azúcar", "Galletitas"];

let devolverElemento=  listaDeCompras.find (function (lista){return lista === "Azúcar"});

console.log(`El elemento encontrado en la lista de compras es: ${devolverElemento}`);