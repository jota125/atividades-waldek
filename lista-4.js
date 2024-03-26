var readline = require('readline-sync');

// Questão de contagem regressiva
console.log("1. Questão de contagem regressiva:");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// Questão de adivinhação de número
console.log("\n2. Questão de adivinhação de número:");
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var palpite;
do {
    palpite = readline.questionInt("Digite um número entre 1 e 100: ");
    if (palpite < numeroAleatorio) {
        console.log("Muito baixo. Tente novamente.");
    } else if (palpite > numeroAleatorio) {
        console.log("Muito alto. Tente novamente.");
    }
} while (palpite !== numeroAleatorio);
console.log("Parabéns! Você acertou o número.");

// Questão de cálculo de fatorial
console.log("\n3. Questão de cálculo de fatorial:");
var numeroFatorial = readline.questionInt("Digite um número inteiro positivo: ");
var fatorial = 1;
for (var i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}
console.log("O fatorial de " + numeroFatorial + " é: " + fatorial);

// Questão de média de números
console.log("\n4. Questão de média de números:");
var soma = 0;
var contador = 0;
var numeroMedia;
do {
    numeroMedia = readline.questionInt("Digite um número positivo (ou um negativo para encerrar): ");
    if (numeroMedia >= 0) {
        soma += numeroMedia;
        contador++;
    }
} while (numeroMedia >= 0);
var media = soma / contador;
console.log("A média dos números inseridos é: " + media.toFixed(2));

// Questão de soma de dígitos
console.log("\n5. Questão de soma de dígitos:");
var numeroSomaDigitos = readline.questionInt("Digite um número inteiro positivo: ");
var somaDigitos = 0;
while (numeroSomaDigitos > 0) {
    somaDigitos += numeroSomaDigitos % 10;
    numeroSomaDigitos = Math.floor(numeroSomaDigitos / 10);
}
console.log("A soma dos dígitos é: " + somaDigitos);

// Questão de multiplicação sem usar o operador de multiplicação
console.log("\n6. Questão de multiplicação sem usar o operador de multiplicação:");
var multiplicando = readline.questionInt("Digite o primeiro número: ");
var multiplicador = readline.questionInt("Digite o segundo número: ");
var resultadoMultiplicacao = 0;
for (var i = 0; i < multiplicador; i++) {
    resultadoMultiplicacao += multiplicando;
}
console.log("O resultado da multiplicação é: " + resultadoMultiplicacao);

// Questão de validação de senha
console.log("\n7. Questão de validação de senha:");
var senha;
do {
    senha = readline.question("Digite a senha: ");
} while (senha !== "senha123");
console.log("Senha correta!");

// Questão de identificação de números primos
console.log("\n8. Questão de identificação de números primos:");
var numeroPrimo = readline.questionInt("Digite um número inteiro positivo: ");
var primo = true;
if (numeroPrimo === 1) {
    primo = false;
} else {
    for (var i = 2; i <= Math.sqrt(numeroPrimo); i++) {
        if (numeroPrimo % i === 0) {
            primo = false;
            break;
        }
    }
}
if (primo) {
    console.log(numeroPrimo + " é um número primo.");
} else {
    console.log(numeroPrimo + " não é um número primo.");
}

// Questão de conversão de temperatura
console.log("\n9. Questão de conversão de temperatura:");
var temperaturaCelsius = readline.questionInt("Digite a temperatura em graus Celsius: ");
var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
console.log("A temperatura equivalente em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));

// Questão de tabuada personalizada
console.log("\n10. Questão de tabuada personalizada:");
var numeroTabuada = readline.questionInt("Digite um número inteiro positivo: ");
for (var i = 1; i <= 10; i++) {
    console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i));
}
