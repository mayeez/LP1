let str1= "Laurence";
let str2= "Svekis";
let vall= undefined;
let vall2 = null;
let myNum = 1000;


console.log("str1 es un", typeof str1);
console.log("str2 es un", typeof str2);
console.log("vall es un", typeof vall);
console.log("vall2 es un", typeof vall2);
console.log("myNum es un", typeof myNum);

console.log("----------------------")

//OPERADORES ARITMETICOS

let miNombre = 'Hola mi nombre es Mayerli, tengo ';
let miEdad = 18;
let sabeCodificar = true;
let palabra= " y se codificar="
let texto= miNombre+ miEdad +palabra+sabeCodificar;
console.log(texto);

console.log("---------------------")

//TEOREMA DE PITAGORAS
// Obtener los valores de a y b desde el usuario utilizando prompt
let a = (prompt('Ingrese el valor de a:'));
let b = (prompt('Ingrese el valor de b:'));

// Calcular la hipotenusa utilizando math.sqrt para saber la raìz y math.pow para elevar un numero a otro
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// Imprimir el resultado 
console.log('La hipotenusa según los valores dados es :', c);