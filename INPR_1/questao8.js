/**Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.
 */

const prompt = require("prompt-sync")();

let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite um número inteiro: "));

  numeros.push(numero);
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log("O maior valor é: " + maior);
console.log("O menor valor é: " + menor);
