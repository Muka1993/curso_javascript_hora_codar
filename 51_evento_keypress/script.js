// KEYPRESS assim que a tecla é pressionada será disparado o evento

let text = document.getElementById('text');
const teclaEnter = 13;

text.addEventListener('keypress', function(evento) {
    if (evento.keyCode == teclaEnter)
    result.style.display = 'block';
});