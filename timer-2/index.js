// const iniciar = document.querySelector('#iniciar');
// const parar = document.querySelector('#parar');
// const resetar = document.querySelector('#resetar');
// const lugar = document.querySelector('#relogio');
// let segundos = 0;
// let timer;
// let condicao;

// iniciar.addEventListener('click', function() {
//     iniciarTempo();
// });
// parar.addEventListener('click', function() {
//     pararTempo();
// })
// resetar.addEventListener('click', function() {
//     resetarTempo();
// })

// function mostraHora(segundos) {
//     let time = new Date(segundos * 1000);
//     return time = time.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'GMT',
//     });
// }

// function iniciarTempo() {
//     timer = setInterval(function() {
//     segundos++;
//     condicao = true
//     lugar.innerHTML = mostraHora(segundos)
// }, 1000)
// }

// function pararTempo() {
//     if(condicao === true) {
//          clearInterval(timer)
//          condicao = false;
//     }
//     else {
//         iniciarTempo()
//         condicao = true;
//     }
// }

// function resetarTempo() {
//     segundos = 0;
//     clearInterval(timer)
//     lugar.innerHTML = '00:00:00'
//}



const relogio = document.querySelector('#relogio');
const start = document.querySelector('#iniciar');
const stopI = document.querySelector('#parar');
const reset = document.querySelector('#resetar');
let segundos = 0;
let timer;
let condicao;
start.addEventListener('click', function() {
    iniciaR()
})
stopI.addEventListener('click', function() {
    pausar()
});
reset.addEventListener('click', function() {
    resetar()
});

function mostraHora(segundos) {
    let data = new Date(segundos * 1000);
    return data = data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciaR() {
    timer = setInterval(function() {
        segundos++;
        condicao = true;
        relogio.innerHTML = mostraHora(segundos);
        start.style.backgroundColor = 'green';
        reset.style.backgroundColor = '';
        stopI.style.backgroundColor = '';
        stopI.style.fontSize = '0.8em'
    }, 1000)
}


function pausar() {
   if(condicao === true) { 
    clearInterval(timer);
    condicao = false; 
    stopI.style.backgroundColor = '#a7a3a3';
    stopI.style.fontSize = '0.9em'
}
   else {
    iniciaR()
    stopI.style.backgroundColor = '';
    stopI.style.fontSize = '0.8em'
   }
}

function resetar() {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = mostraHora(segundos)
    reset.style.backgroundColor = 'red';
    start.style.backgroundColor = '';
    stopI.style.backgroundColor = '';
    stopI.style.fontSize = '0.8em'
}
/*
     background-color: #a7a3a3;
     border: none;
     font-size: 0.90em;
*/ 


