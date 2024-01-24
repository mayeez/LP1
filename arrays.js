let razasDePerros= ["labrador", "pitbull", "chihuahua", "pastor aleman", "pug"];
const ultimoElemento= razasDePerros[razasDePerros.length - 1];
console.log(ultimoElemento);

//sobreescribiendo un array em la posicion -36
razasDePerros[-36] = null;
razasDePerros [1] = "dalmata";

console.log({razasDePerros});

console.log(razasDePerros[5]);
console.log(razasDePerros[-36]);

//uso de la propiedad lenght
const cantidadRazaPerro= razasDePerros.length;
console.log(razasDePerros.lenght);
console.log(cantidadRazaPerro);

//agregar otro elemento a la array
razasDePerros.push("delmer");
console.log({razasDePerros});
console.log(`Hemos agregado un delmer a la raza de ${razasDePerros}`);