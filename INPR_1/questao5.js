/**Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. */

const prompt = require("prompt-sync")();

// Função para calcular as raízes da equação quadrática
function calcularRaizes(a, b, c) {
    // Calcular o discriminante
    const discriminante = b * b - 4 * a * c;

    // Verificar se o discriminante é positivo, negativo ou zero
    if (discriminante > 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [raiz1, raiz2];
    } else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        return [raiz];
    } else {
        return []; // Sem raízes reais
    }
}

// Leitura dos valores A, B e C
const A = parseFloat(prompt("Digite o valor de A:"));
const B = parseFloat(prompt("Digite o valor de B:"));
const C = parseFloat(prompt("Digite o valor de C:"));

// Verificar se A é diferente de zero
if (A !== 0) {
    const raizes = calcularRaizes(A, B, C);
    if (raizes.length === 0) {
        console.log("Não há raízes reais para a equação.");
    } else if (raizes.length === 1) {
        console.log("A única raiz real é: " + raizes[0]);
    } else {
        console.log("As raízes reais são: " + raizes[0] + " e " + raizes[1]);
    }
} else {
    console.log("A variável A deve ser diferente de zero para calcular as raízes.");
}
