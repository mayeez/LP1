//Solicitar datos
let nombreUsuario = prompt ("Ingrese su nombre");
let apellidoUsuario = prompt ("Ingrese su apellido");
let cedulaUsuario = prompt ("Ingrese su cedula");

//Guardar datos

let datosUsuario = {
    nombreUsuario : nombreUsuario,
    apellidoUsuario : apellidoUsuario,
    cedulaUsuario : cedulaUsuario,
};

//Crear array de verduras y frutas
 let arrayVerduras = ["tomate", "locote", "papa"];

 let arrayFrutas = ["banana", "manzana", "guayaba"];

 //Agregar los datos del array al usuario
datosUsuario.arrayVerduras = arrayVerduras;
datosUsuario.arrayFrutas = arrayFrutas;

//Borrar el ultimo elemento de verduras
arrayVerduras.pop ();

//Borrar perimer elemento de frutas
arrayFrutas.shift  ();

//Mostrar resultados en consola
console.log (datosUsuario);

