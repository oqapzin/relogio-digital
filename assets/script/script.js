var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var cor = 0

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();


    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;

    minutos.textContent = min;

    segundos.textContent = sec;
})


function atualizarCor() {
    if(cor == 0) {
        classCor = document.querySelector('.tema-roxo')
        classCor.classList.remove("tema-roxo");
        classCor.classList.add("tema-amarelo");
        cor = 1
    } else {
        classCor = document.querySelector('.tema-amarelo')
        classCor.classList.remove("tema-amarelo");
        classCor.classList.add("tema-roxo");
        cor = 0 
    }
}