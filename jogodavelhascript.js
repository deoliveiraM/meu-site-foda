    var pontuacaoX = 0;
    var pontuacaoO = 0;
    
    function jogar() {
    
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var n5 = document.getElementById("n5").value;
    var n6 = document.getElementById("n6").value;
    var n7 = document.getElementById("n7").value;
    var n8 = document.getElementById("n8").value;
    var n9 = document.getElementById("n9").value;

    if (
        (n1 !== "X" && n1 !== "O" && n1 !== "") ||
        (n2 !== "X" && n2 !== "O" && n2 !== "") ||
        (n3 !== "X" && n3 !== "O" && n3 !== "") ||
        (n4 !== "X" && n4 !== "O" && n4 !== "") ||
        (n5 !== "X" && n5 !== "O" && n5 !== "") ||
        (n6 !== "X" && n6 !== "O" && n6 !== "") ||
        (n7 !== "X" && n7 !== "O" && n7 !== "") ||
        (n8 !== "X" && n8 !== "O" && n8 !== "") ||
        (n9 !== "X" && n9 !== "O" && n9 !== "")
    ) {
        alert("Digite apenas X ou O em MAIÚSCULO");
        return;
    }
    if ((n1 === "X" && n2 === "X" && n3 === "X") ||
        (n4 === "X" && n5 === "X" && n6 === "X") ||
        (n7 === "X" && n8 === "X" && n9 === "X")) {
        alert("X GANHOU");
        pontuacaoX++;
        document.getElementById("pontosX").textContent = pontuacaoX;
        return;

    } else if ((n1 === "O" && n2 === "O" && n3 === "O") ||
        (n4 === "O" && n5 === "O" && n6 === "O") ||
        (n7 === "O" && n8 === "O" && n9 === "O")) {
        alert("O GANHOU");
        pontuacaoO++;
        document.getElementById("pontosO").textContent = pontuacaoO;
        return;
    }

}
