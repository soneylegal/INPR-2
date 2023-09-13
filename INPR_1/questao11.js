/*Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.
 */

const prompt = require("prompt-sync")();

const valor = parseInt(prompt("Digite um valor inteiro: "));

if (valor <= 3) {
  console.log("O valor digitado é: " + valor);
}
