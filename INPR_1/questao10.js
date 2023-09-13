/**Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: "O valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9.
 */

const prompt = require("prompt-sync")();

const valor = parseInt(prompt("Digite um valor entre 1 e 9: "));

if (valor >= 1 && valor <= 9) {
  console.log("O valor está na faixa permitida.");
} else {
  console.log("O valor está fora da faixa permitida.");
}
