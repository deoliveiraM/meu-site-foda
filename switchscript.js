function mudacor() {
    var cor = document.getElementById('cor').value;
    switch (cor) {
        case "red":
            document.body.style.backgroundColor = "red";
            break;
        case "yellow":
            document.body.style.backgroundColor = "yellow";
            break;
        case "blue":
            document.body.style.backgroundColor = "blue";
            break;
        default:
            document.body.style.background = "";
    }
}

function personalizado() {
    var selecionador = document.getElementById("selecionador");
    var corselecionada = selecionador.value;
    document.body.style.backgroundColor = corselecionada;
}

function mudaalinhamento() {
    var alinhamento = document.getElementById('alinhamento').value;
    switch (alinhamento) {
        case "center":
            document.body.style.textAlign = "center";
            break;
        case "right":
            document.body.style.textAlign = "right";
            break;
        case "left":
            document.body.style.textAlign = "left";
            break;
        default:
            document.body.style.textAlign = "";
            break;
    }
}
