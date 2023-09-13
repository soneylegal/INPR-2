/**Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.
 * 
 */
const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um valor inteiro:"));

if (numero < 0) {
    numero = numero * -1;
}

console.log("O valor positivo é: " + numero);