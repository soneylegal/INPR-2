/**Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.
 */

const prompt = require("prompt-sync")();

function divisivelPor2E3(numero) {
    return numero % 2 === 0 && numero % 3 === 0;
}

const numerosDivisiveis = [];

for (let i = 1; i <= 4; i++) {
    const numero = parseInt(prompt(`Digite o ${i}º número inteiro: `));
    
    if (divisivelPor2E3(numero)) {
        numerosDivisiveis.push(numero);
    }
}

if (numerosDivisiveis.length > 0) {
    console.log("Números divisíveis por 2 e 3: ");
    for (const numero of numerosDivisiveis) {
        console.log(numero);
    }
} else {
    console.log("Nenhum dos números digitados é divisível por 2 e 3.");
}
