var readline = require('readline-sync');

// Questão de contagem regressiva de números pares
console.log("1. Questão de contagem regressiva de números pares:");
for (var i = 10; i >= 0; i -= 2) {
    console.log(i);
}

// Questão de soma dos números de 1 a 100
console.log("\n2. Questão de soma dos números de 1 a 100:");
var soma = 0;
for (var i = 1; i <= 100; i++) {
    soma += i;
}
console.log("A soma dos números de 1 a 100 é: " + soma);

// Questão de exibição de padrão numérico
console.log("\n3. Questão de exibição de padrão numérico:");
for (var i = 1; i <= 9; i++) {
    var linha = "";
    for (var j = 1; j <= i; j++) {
        linha += i;
    }
    console.log(linha);
}

// Questão de cálculo de fatorial
console.log("\n4. Questão de cálculo de fatorial:");
var numeroFatorial = readline.questionInt("Digite um número inteiro positivo: ");
var fatorial = 1;
for (var i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}
console.log("O fatorial de " + numeroFatorial + " é: " + fatorial);

// Questão de soma dos dígitos de um número
console.log("\n5. Questão de soma dos dígitos de um número:");
var numeroSomaDigitos = readline.questionInt("Digite um número inteiro positivo: ");
var somaDigitos = 0;
var numeroString = numeroSomaDigitos.toString();
for (var i = 0; i < numeroString.length; i++) {
    somaDigitos += parseInt(numeroString[i]);
}
console.log("A soma dos dígitos é: " + somaDigitos);

// Questão de tabuada de multiplicação
console.log("\n6. Questão de tabuada de multiplicação:");
var numeroTabuada = readline.questionInt("Digite um número inteiro: ");
for (var i = 1; i <= 10; i++) {
    console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i));
}

// Questão de verificação de número primo
console.log("\n7. Questão de verificação de número primo:");
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

// Questão de contagem de vogais em uma palavra
console.log("\n8. Questão de contagem de vogais em uma palavra:");
var palavraVogais = readline.question("Digite uma palavra: ").toLowerCase();
var contagemVogais = 0;
for (var i = 0; i < palavraVogais.length; i++) {
    if (palavraVogais[i] === 'a' || palavraVogais[i] === 'e' || palavraVogais[i] === 'i' || palavraVogais[i] === 'o' || palavraVogais[i] === 'u') {
        contagemVogais++;
    }
}
console.log("O número de vogais na palavra é: " + contagemVogais);

// Questão de exibição de padrão de asteriscos
console.log("\n9. Questão de exibição de padrão de asteriscos:");
for (var i = 1; i <= 5; i++) {
    var linhaAsteriscos = "";
    for (var j = 1; j <= i; j++) {
        linhaAsteriscos += "*";
    }
    console.log(linhaAsteriscos);
}

// Questão de validação de entrada de usuário
console.log("\n10. Questão de validação de entrada de usuário:");
for (;;) {
    var senhaLoop = readline.question("Digite a senha: ");
    if (senhaLoop === "senha123") {
        console.log("Senha correta!");
        break;
    }
}
