/**Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar.
 */

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

