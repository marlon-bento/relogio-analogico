const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

const horasDigitais = document.querySelector("#horas-digitais");
const diaAtual = document.querySelector("#dia-atual");
var data = new Date();

let meses = new Array("01","02","03","04","05","06","07","08","09","10","11","12");
diaAtual.innerHTML += `${data.getDate()}/${meses[data.getMonth()]}/${data.getFullYear()}`;

function executarRelorio(){
    var data = new Date();
    
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    
    let posicaoHr = hr*360/12 +(min*(360/60)/12) ;
    let posicaoMin = (min*360/60) + (seg*(360/60)/60);
    let posicaoSeg = seg*360/60;
    let segFormatted = (seg < 10 ? '0' : '') + seg;
    minFormatted = (min < 10 ? '0' : '') + min;
    hrFormatted = (hr < 10 ? '0' : '') + hr;
    horasDigitais.innerHTML = `${hrFormatted}:${minFormatted}:${segFormatted}`;
   
    PONTEIROHORA.style.transform = `rotate(${posicaoHr}deg)`;
    PONTEIROMINUTO.style.transform = `rotate(${posicaoMin}deg)`;
    PONTEIROSEGUNDO.style.transform = `rotate(${posicaoSeg}deg)`;

}

//1000 milisegundos ou 1 segundo
let intervalo = setInterval(executarRelorio, 1000)