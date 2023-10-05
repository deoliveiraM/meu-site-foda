function realizarOperacao() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;

    if (operacao === "soma") {
        resultado = n1 + n2;
    } else if (operacao === "subtracao") {
        resultado = n1 - n2;
    } else if (operacao === "multiplicacao") {
        resultado = n1 * n2;
    } else if (operacao === "divisao") {
        resultado = n1 / n2;
    }

    document.getElementById("resultado").innerHTML = "O resultado da operação = " + resultado;
} 