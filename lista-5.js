var readline = require('readline-sync');

// Questão de contagem regressiva reversa
console.log("1. Questão de contagem regressiva reversa:");
var count = 10;
do {
    console.log(count);
    count--;
} while (count >= 1);

// Questão de validação de entrada de usuário
console.log("\n2. Questão de validação de entrada de usuário:");
var senha;
do {
    senha = readline.question("Digite a senha: ");
} while (senha !== "senha123");
console.log("Senha correta!");

// Questão de soma de números positivos
console.log("\n3. Questão de soma de números positivos:");
var soma = 0;
var numero;
do {
    numero = readline.questionInt("Digite um número positivo (ou um negativo para encerrar): ");
    if (numero >= 0) {
        soma += numero;
    }
} while (numero >= 0);
console.log("A soma dos números inseridos é: " + soma);

// Questão de adivinhação de número com limite de tentativas
console.log("\n4. Questão de adivinhação de número com limite de tentativas:");
var numeroAleatorio = Math.floor(Math.random() * 50) + 1;
var tentativas = 5;
var palpite;
do {
    palpite = readline.questionInt("Digite um número entre 1 e 50: ");
    if (palpite < numeroAleatorio) {
        console.log("Muito baixo.");
    } else if (palpite > numeroAleatorio) {
        console.log("Muito alto.");
    }
    tentativas--;
} while (palpite !== numeroAleatorio && tentativas > 0);
if (palpite === numeroAleatorio) {
    console.log("Parabéns! Você acertou o número.");
} else {
    console.log("Você excedeu o número máximo de tentativas. O número era: " + numeroAleatorio);
}

// Questão de cálculo de média de alunos
console.log("\n5. Questão de cálculo de média de alunos:");
var somaNotas = 0;
var contadorAlunos = 0;
var notaAluno;
do {
    notaAluno = readline.questionInt("Digite a nota do aluno (ou um valor negativo para encerrar): ");
    if (notaAluno >= 0) {
        somaNotas += notaAluno;
        contadorAlunos++;
    }
} while (notaAluno >= 0);
if (contadorAlunos > 0) {
    var mediaNotas = somaNotas / contadorAlunos;
    console.log("A média das notas dos alunos é: " + mediaNotas.toFixed(2));
} else {
    console.log("Nenhuma nota foi inserida.");
}

// Questão de verificação de número primo
console.log("\n6. Questão de verificação de número primo:");
var numeroPrimo;
do {
    numeroPrimo = readline.questionInt("Digite um número inteiro positivo (ou um negativo para encerrar): ");
    if (numeroPrimo >= 0) {
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
    }
} while (numeroPrimo >= 0);

// Questão de conversão de temperatura
console.log("\n7. Questão de conversão de temperatura:");
var temperaturaCelsius;
do {
    temperaturaCelsius = readline.questionInt("Digite a temperatura em graus Celsius (ou um valor negativo para encerrar): ");
    if (temperaturaCelsius >= 0) {
        var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
        console.log("A temperatura equivalente em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));
    }
} while (temperaturaCelsius >= 0);

// Questão de contagem de letras em uma palavra
console.log("\n8. Questão de contagem de letras em uma palavra:");
var palavra;
do {
    palavra = readline.question("Digite uma palavra (ou 'fim' para encerrar): ");
    var contagemA = 0;
    for (var i = 0; i < palavra.length; i++) {
        if (palavra[i] === 'a') {
            contagemA++;
        }
    }
    console.log("Número de letras 'a' na palavra: " + contagemA);
} while (palavra !== 'fim');

// Questão de tabuada personalizada
console.log("\n9. Questão de tabuada personalizada:");
var numeroTabuada;
do {
    numeroTabuada = readline.questionInt("Digite um número inteiro positivo (ou um valor negativo para encerrar): ");
    if (numeroTabuada >= 0) {
        var multiplicador = 1;
        do {
            console.log(numeroTabuada + " x " + multiplicador + " = " + (numeroTabuada * multiplicador));
            multiplicador++;
        } while (multiplicador <= 10);
    }
} while (numeroTabuada >= 0);

// Questão de geração de números aleatórios
console.log("\n10. Questão de geração de números aleatórios:");
var numeroAleatorio2;
do {
    numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
    console.log("Número gerado: " + numeroAleatorio2);
} while (numeroAleatorio2 !== 5);
