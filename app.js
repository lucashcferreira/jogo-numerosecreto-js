alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 1;

// enquanto o chute for diferente do número secreto, continue pedindo um novo chute
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}:`);
    // se o chute for igual ao número secreto, exiba a mensagem "Isso aí! Você acertou!"
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);


