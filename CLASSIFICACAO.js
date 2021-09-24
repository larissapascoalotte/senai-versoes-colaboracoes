var quantidadedealunos = 1;
for (var controle = 0; controle < quantidadedealunos; controle++) {
    if (controle == 0) {
        console.log("O numero é zero");
    } else if (controle % 2 == 0) {
        console.log("O numero : " + controle + ", é par!");
    } else {
        console.log("O numero :" + controle + " , é impar!");
    }
}