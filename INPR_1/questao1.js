/*Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
 */
const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));

let diferenca;

if (valor1 > valor2) {
    diferenca = valor1 - valor2;
} else {
    diferenca = valor2 - valor1;
}

console.log("A diferença entre o maior e o menor valor é: " + diferenca);