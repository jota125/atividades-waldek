//Escreva um programa que solicite ao usuário dois números inteiros e imprima a soma deles.
var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

var soma = numero1 + numero2;

console.log("A soma de " + numero1 + " e " + numero2 + " é igual a " + soma + ".");

//Peça ao usuário para inserir três números e calcule a média aritmética desses números.
var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");
var numero3 = prompt("Digite o terceiro número:");

var media = (numero1 + numero2 + numero3) / 3;

console.log("A média dos números " + numero1 + ", " + numero2 + " e " + numero3 + " é: " + media);

//Crie um programa que converta uma temperatura em graus Celsius para Fahrenheit. Peça ao usuário para inserir a temperatura em Celsius e exiba a temperatura equivalente em Fahrenheit.
var fahrenheit = (celsius * 9/5) + 32;
console.log("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));

//Solicite a base e a altura de um retângulo ao usuário e calcule sua área. Em seguida, exiba o resultado.
var base = parseFloat(prompt("Digite a base do retângulo:"));
var altura = parseFloat(prompt("Digite a altura do retângulo:"));
var area = base * altura;
console.log("A área do retângulo é: " + area.toFixed(2));

//Peça ao usuário para inserir seu peso (em kg) e altura (em metros). Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula IMC = peso / altura^2 e exiba o resultado.
var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));
var imc = peso / (altura * altura);
console.log("Seu Índice de Massa Corporal (IMC) é: " + imc.toFixed(2));

//Leia dois números inteiros e troque seus valores. Ou seja, o valor da primeira variável deve ser atribuído à segunda variável e vice-versa.
var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
console.log("Números antes da troca:");
console.log("Primeiro número: " + numero1);
console.log("Segundo número: " + numero2);
var temp = numero1;

numero1 = numero2;
numero2 = temp;

console.log("\nNúmeros após a troca:");
console.log("Primeiro número: " + numero1);
console.log("Segundo número: " + numero2);

//Solicite o preço de um produto e um percentual de desconto. Calcule o valor do desconto e o preço final do produto com o desconto aplicado.
var preço = parseInt(prompt("Digite o preço do produto "))
var desconto = parseInt(prompt("Digite o valor do desconto "))
var valorDesconto = (preço * desconto) / 100
var total = (preço - valorDesconto)
console.log("O valor com desconto é " + total +".")

//Peça ao usuário para inserir um número inteiro e exiba a tabuada desse número, de 1 a 10.
var numero = parseInt(prompt("Digite um número inteiro:"));
console.log("Tabuada do número " + numero + ":");
for (var i = 1; i <= 10; i++) {
var resultado = numero * i;
console.log(numero + " x " + i + " = " + resultado);

//Peça ao usuário a distância em quilômetros e a velocidade média em km/h. Calcule o tempo estimado de viagem e mostre-o ao usuário.
