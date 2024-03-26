var readline = require('readline-sync');

// Problema da Cafeteria: Controle de Pedidos
console.log("1. Problema da Cafeteria: Controle de Pedidos");
var estadoPedido = readline.question("Digite o estado do pedido: ");
switch (estadoPedido) {
    case "pendente":
        console.log("Pedido em andamento, aguarde");
        break;
    case "preparando":
        console.log("Pedido em preparo");
        break;
    case "pronto":
        console.log("Pedido pronto para retirada");
        break;
    case "entregue":
        console.log("Pedido entregue com sucesso");
        break;
    default:
        console.log("Estado do pedido desconhecido");
}

// Problema de Controle de Estoque: Verificação de Disponibilidade
console.log("\n2. Problema de Controle de Estoque: Verificação de Disponibilidade");
var quantidadeEstoque = readline.question("Digite a quantidade em estoque: ");
if (Number(quantidadeEstoque) > 0) {
    console.log("Produto disponível para compra");
} else {
    console.log("Produto esgotado");
}

// Problema de Avaliação de Desempenho: Classificação de Funcionários
console.log("\n3. Problema de Avaliação de Desempenho: Classificação de Funcionários");
var notaDesempenho = readline.question("Digite a nota de desempenho: ");
if (Number(notaDesempenho) >= 9) {
    console.log("Excelente desempenho");
} else if (Number(notaDesempenho) >= 7) {
    console.log("Bom desempenho");
} else if (Number(notaDesempenho) >= 5) {
    console.log("Desempenho razoável");
} else {
    console.log("Desempenho insatisfatório");
}

// Problema de Priorização de Tarefas: Escalonamento de Projetos
console.log("\n4. Problema de Priorização de Tarefas: Escalonamento de Projetos");
var urgenciaProjeto = readline.question("Digite a urgência do projeto: ");
switch (urgenciaProjeto) {
    case "urgente":
        console.log("Iniciar imediatamente");
        break;
    case "importante":
        console.log("Programar para esta semana");
        break;
    case "normal":
        console.log("Programar para o próximo mês");
        break;
    case "baixa prioridade":
        console.log("Programar para o próximo trimestre");
        break;
}

// Problema de Controle de Acesso: Verificação de Credenciais
console.log("\n5. Problema de Controle de Acesso: Verificação de Credenciais");
var tipoUsuario = readline.question("Digite o tipo de usuário: ");
var credenciaisCorretas = readline.question("As credenciais estão corretas? (sim/não): ");
if (tipoUsuario === "admin" && credenciaisCorretas === "sim") {
    console.log("Acesso concedido como administrador");
} else if (tipoUsuario === "funcionário" && credenciaisCorretas === "sim") {
    console.log("Acesso concedido como funcionário");
} else {
    console.log("Credenciais inválidas");
}

// Problema de Verificação de Idade: Restrição de Conteúdo
console.log("\n6. Problema de Verificação de Idade: Restrição de Conteúdo");
var idadeUsuario = readline.question("Digite sua idade: ");
if (Number(idadeUsuario) >= 18) {
    console.log("Acesso total permitido");
} else {
    console.log("Acesso restrito para maiores de 18 anos");
}

// Problema de Verificação de Cartão: Identificação da Bandeira
console.log("\n7. Problema de Verificação de Cartão: Identificação da Bandeira");
var numeroCartao = readline.question("Digite os primeiros dígitos do número do cartão: ");
switch (numeroCartao.charAt(0)) {
    case "4":
        console.log("Visa");
        break;
    case "5":
        console.log("Mastercard");
        break;
    case "3":
        console.log("American Express");
        break;
    default:
        console.log("Bandeira desconhecida");
}

// Problema de Notificação de Pagamento: Status de Transação
console.log("\n8. Problema de Notificação de Pagamento: Status de Transação");
var statusTransacao = readline.question("Digite o status da transação: ");
switch (statusTransacao) {
    case "aprovado":
        console.log("Pagamento aprovado com sucesso");
        break;
    case "pendente":
        console.log("Aguardando confirmação do pagamento");
        break;
    case "recusado":
        console.log("Pagamento recusado. Tente novamente");
        break;
    case "cancelado":
        console.log("Pagamento cancelado pelo usuário");
        break;
}

// Problema de Classificação de Veículos: Identificação de Categoria
console.log("\n9. Problema de Classificação de Veículos: Identificação de Categoria");
var tipoVeiculo = readline.question("Digite o tipo de veículo: ");
switch (tipoVeiculo) {
    case "carro":
        console.log("Categoria: Veículo de passeio");
        break;
    case "caminhão":
        console.log("Categoria: Veículo de carga");
        break;
    case "moto":
        console.log("Categoria: Motocicleta");
        break;
    default:
        console.log("Categoria desconhecida");
}

// Problema de Verificação de Tipo de Pagamento: Processamento de Compra
console.log("\n10. Problema de Verificação de Tipo de Pagamento: Processamento de Compra");
var metodoPagamento = readline.question("Digite o método de pagamento: ");
switch (metodoPagamento) {
    case "cartão de crédito":
        console.log("Compra realizada com cartão de crédito");
        break;
    case "boleto bancário":
        console.log("Boleto gerado. Aguardando pagamento");
        break;
    case "transferência bancária":
        console.log("Instruções de transferência enviadas. Aguardando confirmação");
        break;
    default:
        console.log("Método de pagamento não suportado. Por favor, escolha outra opção");
}
