var saldo = 100.5; //Variavel Global
var nome = prompt("Digite seu nome: ")

var senha;
const validar = 3589;

alert("Olá " + nome + ", é um prazer ter você por aqui!");

function inicio() {
    //ESCOPO
    //Variavel Local
    var escolha = parseInt(prompt('Selecione uma opção: 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            fazer_extrato();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            fazer_transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function ver_saldo() {

    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validar) {
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    }
}

function fazer_extrato() {

    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validar) {
        alert('Seus extratos: ' + "\n" + '1. Casas Bahias = 403,50.' + "\n" + '2. Lourencini Supermercado = 756,52.' + "\n" + "3. IPTU = 990,40.");
        inicio();
    }
}

function fazer_saque() {

    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validar) {
        
        var saque = parseInt(prompt('Qual o valor para saque?'));

        if (isNaN(saque) || saque === '') {
            alert('Por favor, informe um número.');
            fazer_saque();

        } else if (saque <= 0) {
            alert("Operação não autorizada");
            fazer_saque();
        } else if (saque > saldo) {
            alert("Operação não autorizada");
            fazer_saque();
        } else {
            saldo -= saque;
            // saldo = saldo - saque;
            ver_saldo();
        }
    } else {
        alert("erro.")
    }
}

function fazer_deposito() {

    var deposito = parseInt(prompt('Qual o valor para depósito?'));

    if (deposito <= 0) {
        alert("Operação não autorizada.")
    } else {
        saldo += deposito;
        ver_saldo();
    }

}

function fazer_transferencia() {

    var transferencia = parseInt(prompt('Qual o valor da transferência?'));

    alert(parseInt(prompt("Informe o número da conta:")));

    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validar) {
        (transferencia <= 0)
        alert("Operação não autorizada.");
    } else if (transferencia > saldo) {
        alert("Operação não autorizada.");
    } else {
        saldo -= transferencia;
        ver_saldo();
    }
}

function valide_senha() {

    if (senha === validar) {

    } else {
        alert("Erro.")
        inicio();
    }

}

function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nome + ", foi um prazer ter você por aqui!")
        window.close();
    } else {
        inicio();
    }
}

inicio();