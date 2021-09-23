var Cadastrodepecas = ["ab", "peça 2", "peça 3", "peça 4", "peça 5", "peça 6", "peça 7", "peça 8", "peça 9", "peça 10", "peça 11"];
console.log("Quantidade de peças:");

if (Cadastrodepecas.length > 10) { // analisa as posições das variáveis

    console.log("Capacidade Insuficiente!");
} else {
    console.log("Capacidade suficiente!");
}

console.log("Quantidade de caracteres:");

for (contador = 0; contador < Cadastrodepecas.length; contador++) {
    var PecaAtual = Cadastrodepecas[contador];

    if (PecaAtual.length < 3) {
        console.log(PecaAtual + ":a peça possui nome inferior a 3 caracteres e não pode ser cadastrada!");
    } else {
        console.log(PecaAtual + ": a peça possui nome superior a 3 caracteres e pode ser cadastrada!");
    }
}


console.log("Peso da peça:");
var pesodapecaemgramas = 400;
if (pesodapecaemgramas >= 100) {
    console.log("Peso suficiente!");
} else {
    console.log("Peso insuficiente!");
}