// EFEITO QUE AO SOLTAR UMA UMA TECLA DISPARA O EVENTO

const music = new Audio('dr-dre-nuthin-but-a-g-thang.mp3');

let text = document.getElementById("search");

text.addEventListener("keyup", function() {
    music.play();
});