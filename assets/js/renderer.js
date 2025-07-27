const temporizador = document.getElementById('display');
const iniciar = document.getElementById('iniciar');
const stop = document.getElementById('parar');
const reset = document.getElementById('reiniciar');

let hora = 0
let min = 0
let seg = 0

let cronometroIniciado = false;
let interval;

function formataçãoTempo(totalSegundos) {
    const hora = Math.floor(totalSegundos / 3600);
    const min = Math.floor((totalSegundos % 3600) / 60);
    const seg = Math.floor(totalSegundos % 60)

    return [
        hora.toString().padStart(2, '0'),
        min.toString().padStart(2, '0'),
        seg.toString().padStart(2, '0')
    ].join(':')
    
}
function atualizarTempo(){
    seg++
    if (seg === 60) {
        seg = 0;
        min++;
    }else if (min === 60) {
        min = 0;
        hora++;
    }

    const totalSegundos = hora * 3600 + min * 60 + seg;

    temporizador.innerHTML = formataçãoTempo(totalSegundos)
}
iniciar.addEventListener('click', () => {
    if(!cronometroIniciado){
        cronometroIniciado = true;
        iniciar.disabled = true;
        interval = setInterval(atualizarTempo, 1000 );
    }

})

stop.addEventListener('click', () => {
    clearInterval(interval);
    cronometroRodando = false;
    iniciar.disabled = false;
})

reset.addEventListener('click', () => {
    clearInterval(interval)
    cronometroIniciado = false;
    iniciar.disabled = false;

    seg = 0;
    min = 0;
    hora = 0;
})
