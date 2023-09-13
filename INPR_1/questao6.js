/**Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.
 */

const prompt = require("prompt-sync")();

let A = parseFloat(prompt("Digite o valor de A: "));
let B = parseFloat(prompt("Digite o valor de B: "));
let C = parseFloat(prompt("Digite o valor de C: "));

if (A > B) {
  let temp = A;
  A = B;
  B = temp;
}

if (B > C) {
  let temp = B;
  B = C;
  C = temp;
}

if (A > B) {
  let temp = A;
  A = B;
  B = temp;
}

console.log("Valores em ordem crescente: " + A + ", " + B + ", " + C);
