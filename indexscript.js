document.addEventListener('DOMContentLoaded', function() {
    var botaoAudio = document.getElementById('click');
    var audio = new Audio('public/sounds/heyygalera.mp3');  

    function tocarAudio() {
        audio.play();
    }

    botaoAudio.addEventListener('click', tocarAudio);
});