// KEYPRESS assim que a tecla é pressionada será disparado o evento

const music = new Audio('water-droplets-small-stone.mp3');


let text = document.getElementById('text');
const teclaEnter = 13;

text.addEventListener('keypress', function(evento) {
    if (evento.keyCode == teclaEnter)
    result.style.display = 'block';
    let inpu = document.querySelector('text');
    
} 
);