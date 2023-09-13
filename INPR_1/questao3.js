/**Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.
 */

const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a nota: "));
let nota2 = Number(prompt("Digite a nota: "));
let nota3 = Number(prompt("Digite a nota: "));
let nota4 = Number(prompt("Digite a nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 6) {
    console.log("O aluno foi aprovado com média " + media.toFixed(2));
} else {
    console.log("O aluno não foi aprovado com média " + media.toFixed(2));
}