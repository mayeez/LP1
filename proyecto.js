//Valor en kilometros
let millas= prompt("Ingresa un valor para el kilometros:");

//Conversion de kilometros a millas
let kilom= millas * 1.60934 ;

let km= Math.trunc(kilom);


console.log ("La distancia de", km, "km es igual a", millas, "millas");

console.log("----------------------")

//Obtener el peso y altura preguntando al usuario
let peso= prompt("Ingrese su peso en kg");
let altura= prompt("Ingrese su altura en cm");

//Calcular usando la formúla IMC= peso/(altura¨2)
let imc= peso/ Math.pow(altura,2);

console.log("Su índice de masa corporal es:",imc.toFixed(2));
