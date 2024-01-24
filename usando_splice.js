let arrafiguras =["Circulo", "Trianguo","rectangulo", "pentagon"];
arrafiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log({arrafiguras});

const valorObtenidoSplice = arrafiguras.splice(0, 3);


arrafiguras.splice(2, 1, "cuadrado", "trapezoide");
console.log(arrafiguras);

//cortar variables
const cortado = arrafiguras.splice(0, 2);
const cortado2 = [0];
//concatenar arrays
const mezclar = cortado.concat (cortado2);

//BORRAR ultimo
arrafiguras.pop();
console.log(arrafiguras);
//borrar rl primero
arrafiguras.shift();
console.log(arrafiguras);


