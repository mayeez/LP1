//lista de compras
let listaCompras = [] ;

//agregar elementos a la lista
listaCompras.push("leche", "pan", "manzanas");

//actualizamos pan por bananas y huevos
listaCompras.splice(1,1, "bananas", "huevos" );

//removemos el ultimo elemnto de la lista
let elementoEliminado = listaCompras.pop();
console.log(`El elemento removido fue ${elementoEliminado}`);

//ordenamos alfabeticamente
listaCompras.sort();

//encontar y mostrar la salida del valor "leche"
let encontrarValorLeche = listaCompras.indexOf("leche");
console.log(`La salida del index del valor de leche es ${encontrarValorLeche}`);

//despues de banana agregar zanahorias y lechuga
listaCompras.splice(1, 0, "zanahorias", "lechuga");

//creamos nueva lista
let nuevaLista = ["jugo", "pop"];

//combinar ambas listas agegando la nueva lista dos veces
let arrayLista= listaCompras.concat(nuevaLista, nuevaLista);

//obetener el ultimo valor index de pop y mostrar en la consola
let valorPop = arrayLista.lastIndexOf("pop");
console.log(`El ultimo valor index de pop es: ${valorPop}`);

//resultado de lista final
console.log(`La lista final de compras es: ${arrayLista}`);