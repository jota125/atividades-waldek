var readline = require('readline-sync');

// Verificar se um número é positivo, negativo ou zero
console.log("1. Verificar se um número é positivo, negativo ou zero");
var numero = readline.question("Digite um número: ");
if (Number(numero) > 0) {
    console.log("O número é positivo.");
} else if (Number(numero) < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Determinar se um aluno foi aprovado ou reprovado
console.log("\n2. Determinar se um aluno foi aprovado ou reprovado");
var nota1 = readline.question("Digite a primeira nota: ");
var nota2 = readline.question("Digite a segunda nota: ");
var mediaAluno = (Number(nota1) + Number(nota2)) / 2;
if (mediaAluno >= 6) {
    console.log("Aluno aprovado.");
} else {
    console.log("Aluno reprovado.");
}

// Verificar se um número é par ou ímpar
console.log("\n3. Verificar se um número é par ou ímpar");
var numeroParImpar = readline.question("Digite um número: ");
if (Number(numeroParImpar) % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// Classificar um triângulo por seus lados
console.log("\n4. Classificar um triângulo por seus lados");
var lado1 = readline.question("Digite o comprimento do primeiro lado: ");
var lado2 = readline.question("Digite o comprimento do segundo lado: ");
var lado3 = readline.question("Digite o comprimento do terceiro lado: ");
if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}

// Calcular o imposto
console.log("\n5. Calcular o imposto");
var valorProduto = readline.question("Digite o valor do produto: ");
var imposto = 0;
if (Number(valorProduto) > 2000) {
    imposto = Number(valorProduto) * 0.10;
} else if (Number(valorProduto) > 1000) {
    imposto = Number(valorProduto) * 0.07;
}
if (imposto > 0) {
    console.log("O valor do imposto a ser pago é: R$" + imposto.toFixed(2));
} else {
    console.log("Isento de imposto.");
}

// Verificar se uma pessoa é maior de idade
console.log("\n6. Verificar se uma pessoa é maior de idade");
var idadePessoa = readline.question("Digite a idade da pessoa: ");
if (Number(idadePessoa) >= 18) {
    console.log("A pessoa é maior de idade.");
} else {
    console.log("A pessoa é menor de idade.");
}

// Atribuir uma categoria de acordo com a idade de uma pessoa
console.log("\n7. Atribuir uma categoria de acordo com a idade de uma pessoa");
if (Number(idadePessoa) >= 60) {
    console.log("A pessoa é idosa.");
} else if (Number(idadePessoa) >= 18) {
    console.log("A pessoa é adulta.");
} else if (Number(idadePessoa) >= 12) {
    console.log("A pessoa é adolescente.");
} else {
    console.log("A pessoa é uma criança.");
}

// Determinar o dia da semana com base no número (1 a 7)
console.log("\n8. Determinar o dia da semana com base no número");
var numeroDia = readline.question("Digite um número de 1 a 7: ");
switch (Number(numeroDia)) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido.");
}

// Verificar se um número é primo ou não
console.log("\n9. Verificar se um número é primo");
var numeroPrimo = readline.question("Digite um número: ");
var primo = true;
if (Number(numeroPrimo) === 1) {
    primo = false;
} else {
    for (var i = 2; i <= Math.sqrt(Number(numeroPrimo)); i++) {
        if (Number(numeroPrimo) % i === 0) {
            primo = false;
            break;
        }
    }
}
if (primo) {
    console.log("O número é primo.");
} else {
    console.log("O número não é primo.");
}

// Determinar a estação do ano com base no mês
console.log("\n10. Determinar a estação do ano com base no mês");
var mes = readline.question("Digite o número do mês (1 a 12): ");
var estacao;
switch (Number(mes)) {
    case 12:
    case 1:
    case 2:
        estacao = "Verão";
        break;
    case 3:
    case 4:
    case 5:
        estacao = "Outono";
        break;
    case 6:
    case 7:
    case 8:
        estacao = "Inverno";
        break;
    case 9:
    case 10:
    case 11:
        estacao = "Primavera";
        break;
    default:
        estacao = "Mês inválido";
}
console.log("Estamos na estação: " + estacao);
