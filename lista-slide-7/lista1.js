var readline = require("readline-sync");

//1
var resultado = 5 + 3 * 2;
console.log(resultado);

//2
var resultado = 2 ** 3;
console.log(resultado);

//3
var resto = 10 % 3;
console.log(resto)

//4
var resultado1 = 10 / 0;
console.log(resultado1); //= Infinity

//5 prioridade feita pelas ()

//6 
var resultado = 10 - 2 + 3 * 5;
console.log(resultado);

//7
var num1 = 10;
var num2 = 15;
var num3 = 20;

var media = (num1 + num2 + num3) / 3;
console.log(media);

//8
var numero = 10
var texto = ("hello")

var resultado = numero + texto
console.log (resultado) // 10hello

//9
var numero = 5;
numero++; // Incrementa o valor de numero em 1
console.log(numero) // 6

10//
var numeroDecimal = 4.6;
var arredondado = Math.round(numeroDecimal);
console.log(arredondado); // Saída: 5