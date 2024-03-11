var readline = require("readline-sync");

//1
var numero = 5;
var texto = ("5");

console.log(numero == texto); // Saída: true, pois ocorre coerção de tipo, resultando em comparação de valores iguais
console.log(numero === texto); // Saída: false, pois não ocorre coerção de tipo, e os tipos de dados são diferentes

//3
//perador de desigualdade (!=): Este operador retorna true se os valores comparados não forem iguais e false caso contrário. Ele faz coerção de tipo antes de fazer a comparação.
var x = 5;
var y = 10;

if (x != y) {
    console.log("x é diferente de y");
} else {
    console.log("x é igual a y");
}

//3
//Operador > (maior que): Este operador verifica se o valor do operando da esquerda é estritamente maior que o valor do operando da direita. Se o valor do operando da esquerda for maior que o valor do operando da direita, a expressão é avaliada como verdadeira (true). Caso contrário, é avaliada como falsa (false).
var x = 5;
var y = 3;
console.log(x > y); // Saída: true

var x = 5;
var y = 5;
console.log(x >= y); // Saída: true

//4
//O operador de comparação usado para verificar se um valor é menor ou igual a outro "<=".
var x = 5;
var y = 10;

if (x <= y) {
    console.log("x é menor ou igual a y");
} else {
    console.log("x é maior que y");
}

//5
//O operador !== é usado para verificar se dois valores são diferentes tanto em valor quanto em tipo. Se os valores comparados forem diferentes ou se tiverem tipos diferentes, o operador !== retorna true. Caso contrário, retorna false.
var x = 5;
var y = "5";

console.log(x !== y); // Saída: true, pois os valores são iguais, mas os tipos são diferentes

//6
var numero = 5;
var texto = "5";

console.log(numero == texto); // Saída: true, pois ocorre coerção de tipo, resultando em comparação de valores iguais
console.log(numero === texto); // Saída: false, pois não ocorre coerção de tipo, e os tipos de dados são diferentes
/*No primeiro caso (numero == texto), o operador == compara os valores 5 e "5". Como há uma coerção de tipo, o número 5 é convertido em uma string, e então a comparação é feita entre duas strings iguais, resultando em true.

No segundo caso (numero === texto), o operador === compara os valores 5 e "5", mas como é uma comparação estrita, o JavaScript não faz a coerção de tipo. Como os tipos de dados são diferentes (um número e uma string), a comparação resulta em false.*/

//7
var x = 5;

if (x < 10) {
    console.log("x é menor que 10");
} else {
    console.log("x não é menor que 10");
}

//8
var x = 10;
var y = 5;

if (x > y) {
    console.log("x é maior que y");
} else {
    console.log("x não é maior que y");
} 
//Neste exemplo, a expressão x > y retorna true, pois o valor de x é 10, que é maior que o valor de y, que é 5. Então, a mensagem "x é maior que y" será impressa no console.

//9
var numero = 5;
var texto = "5";

console.log(numero != texto); // Saída: false, pois ocorre coerção de tipo, resultando em comparação de valores iguais
console.log(numero !== texto); // Saída: true, pois não ocorre coerção de tipo, e os tipos de dados são diferentes

/*No primeiro caso (numero != texto), o operador != compara os valores 5 e "5". Como há uma coerção de tipo, o número 5 é convertido em uma string, e então a comparação é feita entre duas strings iguais, resultando em false.

No segundo caso (numero !== texto), o operador !== compara os valores 5 e "5", mas como é uma comparação estrita, o JavaScript não faz a coerção de tipo. Como os tipos de dados são diferentes (um número e uma string), a comparação resulta em true.*/

//10
//Operador de igualdade estrita (===): Este operador compara os valores e os tipos dos dois operandos. Retorna true se os valores e os tipos dos operandos forem iguais; caso contrário, retorna false. Como não faz coerção de tipo, o operador === é considerado mais seguro e recomendado na maioria dos casos.
