function mostrarImagem() {
    var imagemContainer = document.getElementById("imagemContainer");
    if (imagemContainer.classList.contains("hidden")) {
        imagemContainer.classList.remove("hidden");
        setTimeout(function() {
            imagemContainer.style.opacity = "1";
        }, 100);
    }
}