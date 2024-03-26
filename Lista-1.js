var readline = require('readline-sync');

// 1. Soma de dois números
console.log("1. Soma de dois números");
var num1 = readline.question("Digite o primeiro número: ");
var num2 = readline.question("Digite o segundo número: ");
var soma = Number(num1) + Number(num2);
console.log("A soma é: " + soma);

// 2. Média de três números
console.log("\n2. Média de três números");
var numA = readline.question("Digite o primeiro número: ");
var numB = readline.question("Digite o segundo número: ");
var numC = readline.question("Digite o terceiro número: ");
var media = (Number(numA) + Number(numB) + Number(numC)) / 3;
console.log("A média é: " + media);

// 3. Conversão de temperatura
console.log("\n3. Conversão de temperatura");
var celsius = readline.question("Digite a temperatura em Celsius: ");
var fahrenheit = (Number(celsius) * 9/5) + 32;
console.log("A temperatura em Fahrenheit é: " + fahrenheit);

// 4. Área de um retângulo
console.log("\n4. Área de um retângulo");
var base = readline.question("Digite a base do retângulo: ");
var altura = readline.question("Digite a altura do retângulo: ");
var areaRetangulo = Number(base) * Number(altura);
console.log("A área do retângulo é: " + areaRetangulo);

// 5. Calculadora de IMC
console.log("\n5. Calculadora de IMC");
var peso = readline.question("Digite seu peso em kg: ");
var alturaMetros = readline.question("Digite sua altura em metros: ");
var imc = Number(peso) / (Number(alturaMetros) * Number(alturaMetros));
console.log("Seu IMC é: " + imc.toFixed(2));

// 6. Troca de valores
console.log("\n6. Troca de valores");
var valor1 = readline.question("Digite o primeiro número: ");
var valor2 = readline.question("Digite o segundo número: ");
var temp = valor1;
valor1 = valor2;
valor2 = temp;
console.log("Após a troca, primeiro número: " + valor1 + ", segundo número: " + valor2);

// 7. Cálculo de desconto
console.log("\n7. Cálculo de desconto");
var preco = readline.question("Digite o preço do produto: ");
var percentualDesconto = readline.question("Digite o percentual de desconto: ");
var valorDesconto = (Number(percentualDesconto) / 100) * Number(preco);
var precoFinal = Number(preco) - valorDesconto;
console.log("O valor do desconto é: " + valorDesconto.toFixed(2));
console.log("O preço final com desconto é: " + precoFinal.toFixed(2));

// 8. Tabuada
console.log("\n8. Tabuada");
var numeroTabuada = readline.question("Digite um número inteiro para a tabuada: ");
var (var i = 1; i <= 10; i++) {
    console.log(numeroTabuada + " x " + i + " = " + (Number(numeroTabuada) * i));
}

// 9. Tempo de viagem
console.log("\n9. Tempo de viagem");
var distancia = readline.question("Digite a distância em quilômetros: ");
var velocidadeMedia = readline.question("Digite a velocidade média em km/h: ");
var tempoViagem = Number(distancia) / Number(velocidadeMedia);
console.log("O tempo estimado de viagem é: " + tempoViagem.toFixed(2) + " horas");

// 10. Conversão monetária
console.log("\n10. Conversão monetária");
var taxaCambio = readline.question("Digite a taxa de câmbio: ");
var valorReais = readline.question("Digite o valor em reais: ");
var valorDolares = Number(valorReais) / Number(taxaCambio);
console.log("O valor em dólares é: $" + valorDolares.toFixed(2));
