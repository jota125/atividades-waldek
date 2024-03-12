//1
//operador && é usado para realizar uma operação lógica "E" entre duas expressões. Ele retorna true se ambas as expressões forem avaliadas como verdadeiras, caso contrário, retorna false.
let x = 5;
let y = 10;

if (x > 0 && y < 20) {
    console.log("Ambas as condições são verdadeiras.");
} else {
    console.log("Pelo menos uma das condições é falsa.");
}
//2
// o operador || é conhecido como operador "OU lógico". Ele é usado para combinar duas expressões booleanas e retorna verdadeiro se pelo menos uma das expressões for verdadeira.
let idade = 25;

if (idade < 18 || idade >= 65) {
    console.log("Você se qualifica para um desconto de idade.");
} else {
    console.log("Você não se qualifica para um desconto de idade.");
}
//3
//para representar a negação lógica de uma expressão, e usado o operador ("!").
let x = 5;

if (!(x > 10)) {
    console.log("x não é maior que 10.");
} else {
    console.log("x é maior que 10.");
}
//4
//a principal diferença entre && e || é que && exige que ambas as expressões sejam verdadeiras, enquanto || precisa que pelo menos uma das expressões seja verdadeira para que a condição geral seja verdadeira.

//5
//Quando você usa o operador && com uma expressão que contém valores booleanos em JavaScript, o resultado dependerá do valor de cada uma das expressões.
let expressao1 = true;
let expressao2 = false;

let resultado = expressao1 && expressao2;
console.log(resultado); // Isso imprimirá "false", pois uma das expressões é falsa.

//6
// e verificado pelo operador logico ||.
let x = 5;
let y = 10;

if (x === 5 || y === 15) {
    console.log("Pelo menos uma das condições é verdadeira.");
} else {
    console.log("Nenhuma das condições é verdadeira.");
}

//7
//Você pode usar o operador && para verificar se todas as expressões são verdadeiras. Se todas as expressões forem verdadeiras, a condição geral será verdadeira.

if (idade >= 18 && idade <= 65 && possuiCarteiraDeMotorista) {
    console.log("Você é elegível para alugar um carro.");
}
//8
let valor1 = true;
let valor2 = false;

let resultado = valor1 || valor2;
console.log(resultado); // Isso imprimirá "true", pois pelo menos um dos valores é verdadeiro.
//Se ambos valor1 e valor2 fossem falsos, resultado seria false.

//9
//para verificar se todas as condições sao verdadeira e usada o operador logico ("&&") 

//10
//O operador lógico Y (&&) retorna true se ambas as condições forem verdadeiras e executa o bloco de código if. Caso contrário, o operador retornará false e será executado o código else.
